console.log('tut32 librabry practise');
// create class library
// implement    function getbooklist()(see allthe book list when it called)
//constructore must take the book list as an arugumrnt 
//issuebook(bookname,user)
//returnbook(bookname) user- book add in booklist()

class Lab {
	constructor(user,book,booklist){
		this.booklist=booklist;
		this.user=user;
	}
	getbooklist(){
		return this.booklist
		//show all the booklist
	}
	issuebook(){
		return this.user
		//user + this book - in booklist
	}
	returnbook(){
		return this.user -this.issuebook 
		//user - these book als plus in booklist
	}
}
console.log(Lab)
//object
m = new Lab("msp","111","all");
console.log(m);