exports.get = 
    [
        {fname:'Lola',
        lname:'Ballot',
        tel:'00112233',
        _id:"0"
      },
      {fname:'Albert',
      lname:'Ballot',
      tel:'04112244',
      _id:"1"
      }
      ];
exports.new = (contact) =>{
    this.get.push(contact);
};
exports.del = (contact) =>{
    const found = this.get.find(element => element._id === contact);
    this.get.splice(this.get.indexOf(found),1);
};
exports.update = (contactId,newContact) =>{
    const found = this.get.find(element => element._id === contactId);
    this.get[this.get.indexOf(found)]=newContact;
};

