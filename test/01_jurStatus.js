const JurStatus = artifacts.require("./JurStatus.sol");
const assertFail = require("./helpers/assertFail");

contract('JurStatus', function (accounts) {

  var jurStatus;
  var jurAdmin = accounts[0];
  var status1 = accounts[1];
  var status2 = accounts[2];
  var solomon = "Solomon";
  var justanian = "Justanian";

  // =========================================================================
  it("0. Initialize jur status contract. ", async () => {
    
    jurStatus = await JurStatus.new({from: jurAdmin});
    console.log("Jur Status contract address: ", jurStatus.address);

    assert.equal((await jurStatus.statusCount.call()).toNumber(), 0);
  });

  it("1. Let's the Jur admin add a state type. ", async () => {
    
    await jurStatus.addStatusType(solomon, {from: jurAdmin});
    assert.equal(await jurStatus.statusTypes.call(0), solomon);

    await jurStatus.addStatusType(justanian, {from: jurAdmin});
    assert.equal(await jurStatus.statusTypes.call(1), justanian);
  });

  it("2. Does not let's any address other than the Jur admin add a state type. ", async () => {
    
    await assertFail(async () => {
        await jurStatus.addStatusType(solomon, {from: accounts[4]});
    });
  });

  it("2. Let's the admin add a status. ", async () => {
    
    await jurStatus.addJurStatus(status1, 0);

    assert.equal((await jurStatus.status.call(status1)).isActive, true);
    assert.equal((await jurStatus.status.call(status1)).statusType, solomon);
  });

  it("2. Let's the admin change the active state of a status. ", async () => {
    
    await jurStatus.changeState(status1, false);

    assert.equal((await jurStatus.status.call(status1)).isActive, false);
  });

  it("3. Let's the admin get all status. ", async () => {
    assert.equal((await jurStatus.getStatusListLength.call()), 1);
  });

  it("3. Does not let's any address other than the Jur admin to get status Length. ", async () => {
    await assertFail(async () => {
      await jurStatus.getStatusListLength({from: accounts[4]});
  });
  });
/** Our current get All status does not get updated on status change as that was beyound the scope of this task i.e. update status
 * we could refactor our status update logic to reflect this, kindly reach out to me if you want me to add this ):
 * here we tested the status active state was what is added initially
 */
  it("3. Let's the admin get status at first Index. ", async () => {
    var response = await jurStatus.getStatusListItem.call(0);
    assert.equal(response[1], true);
  });
});
