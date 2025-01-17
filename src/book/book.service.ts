import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";


@Injectable()
export class BookService{
    public books : Book[]=[]


    // add book

    addBookService(book:Book):string {
        this.books.push(book)
        return "Book has been successfully added"
    }

    updateBookService(book: Book):string{
        let index =this.books.findIndex((currentBook)=>{
            return currentBook.id==book.id
        })

        this.books[index]=book;
        return "Book has been successfully updated"
    }

    deleteBookService(bookId:string):string{
        this.books=this.books.filter((book)=>{
            return book.id!==bookId;
        })
        return "Book has been deleted"
    }
   
    findAllBook():Book[]{
        return this.books
    }

}