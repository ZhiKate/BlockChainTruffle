const SimpleStorage = artifacts.require("SimpleStorage");

contract('SimpleStorage', () => {
  it('should read newly written values', async() => {
    const simpleStorageInstance = await SimpleStorage.deployed();
    var value = (await simpleStorageInstance.read.call()).toNumber();

    assert.equal(value, 0, "0 wasn't the initial value");

    await simpleStorageInstance.write(1);
    value = (await simpleStorageInstance.read.call()).toNumber();
    assert.equal(value, 1, "1 was not written");

    await simpleStorageInstance.write(2);
    value = (await simpleStorageInstance.read.call()).toNumber();
    assert.equal(value, 2, "2 was not written");
  });

   //The following test case is created by myself.
   it('Should write and read value when it increase by a specific number', async() => {
    const simpleStorageInstance=await SimpleStorage.deployed();
    //var value= (await simpleStorageInstance.read.call()).toNumber();
    
    await simpleStorageInstance.write(5);
    value= (await simpleStorageInstance.read.call()).toNumber();
    assert.equal(5,value,"5 was not written");

    
    await simpleStorageInstance.ValueIncrease(20);
    const result=value+20;
    value= (await simpleStorageInstance.read.call()).toNumber();
    assert.equal(result,value,"value did not went up 20");

  });

});
