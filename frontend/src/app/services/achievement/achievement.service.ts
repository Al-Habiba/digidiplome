import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor( private httpClient:HttpClient
    ) { }
  url='http://localhost:3000/achievement/'
  createAchievement(
      titre:String,type:String ,
      domaine:String,
      annee:String,
      mention :String, 
      signatureNum:String,
      donneeDeValidation:String,
      statutDaccreditation:String,
    ){
    console.log(titre,type,domaine,annee,mention,signatureNum,donneeDeValidation, statutDaccreditation)
    return this.httpClient
     .post<any>(this.url,{
        'titre':titre,
        'type':type,
        'domaine':domaine,
        'annee':annee,
        'mention':mention,
        'signatureNum':signatureNum,
        'donneeDeValidation':donneeDeValidation,
        'statutDaccreditation':statutDaccreditation
    })
     .pipe(
      map((userData: any )=>{
       return userData
      })
     )
  }

  getAchievements(){
    return this.httpClient
      .get<any>(this.url+'')
      .pipe(
        map((userData: any )=>{
         return userData
        })
 
       )
  }
  getAchievementByid(id:number){
    return this.httpClient
      .get<any>(this.url+'/:'+id)
      .pipe(
        map((userData: any )=>{
         return userData
        })
 
       )
  }
  UpdateAchievement(
    id:number,
    titre:String,type:String ,
    domaine:String,
    annee:String,
    mention :String, 
    signatureNum:String,
    donneeDeValidation:String,
    statutDaccreditation:String,
    ){
    return this.httpClient
     .put<any>(this.url+'/:'+id,{ 
        'titre':titre,
        'type':type,
        'domaine':domaine,
        'annee':annee,
        'mention':mention,
        'signatureNum':signatureNum,
        'donneeDeValidation':donneeDeValidation,
        'statutDaccreditation':statutDaccreditation})
     .pipe(
      map((userData: any )=>{
       return userData
      })

     )
  }
}




