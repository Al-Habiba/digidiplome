import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

   constructor(
    private httpClient:HttpClient
    ) { }
  url='http://localhost:3000/student/'



  createStudent(nom: string,prenom: string,dateNaiss:Date,tel:number,email:string,CNI:number){
    console.log(nom,tel,prenom,email,dateNaiss,CNI)
    return this.httpClient
     .post<any>(this.url,{
        'nom':nom,'prenom':prenom,'dateNaiss':dateNaiss,'tel':tel,
        'email':email,'CNI':CNI
    })
     .pipe(
      map((userData: any )=>{
       return userData
      })
     )
  }

  getStudents(){
    return this.httpClient
      .get<any>(this.url+'')
      .pipe(
        map((userData: any )=>{
         return userData
        })
 
       )
  }
  getStudentByid(id:number){
    return this.httpClient
      .get<any>(this.url+'/:'+id)
      .pipe(
        map((userData: any )=>{
         return userData
        })
 
       )
  }
  UpdateStudent(id:number,nom: string,prenom: string,dateNaiss:Date,tel:number,email:string,CNI:number){
    return this.httpClient
     .put<any>(this.url+'/:'+id,{nom:nom,prenom:prenom,dateNaiss:dateNaiss,tel:tel,email:email,CNI:CNI})
     .pipe(
      map((userData: any )=>{
       return userData
      })

     )
  }
}

