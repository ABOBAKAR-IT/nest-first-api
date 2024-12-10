import { Controller,Get,Put,Post,Delete,Param, Body } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";
@Controller("book")
export class BookController{

    constructor(private bookService:BookService){

    }
   
    @Get("/findAll")
    getAllBooks():Book[]{
return this.bookService.findAllBook()
    }

    @Put('/update')
    updateBook(@Body() book:Book):string{
        return this.bookService.updateBookService(book);
    }

    @Delete('/delete/:id')
    deleteBook(@Param("id") bookId:string):string{
        return this.bookService.deleteBookService(bookId);
    }

    @Post("/add")
    addBook(@Body() book:Book):string{
     return this.bookService.addBookService(book)  ;
    }
}