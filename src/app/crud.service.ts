import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService { 

  constructor(private http: HttpClient) { }

 

  getMusic(){
    return this.http.get<any[]>('/api/angularcrud/list.php')
  }
  getDt(){
    return this.http.get<any[]>('/api/angularcrud/listDt.php')
  }
  getMorada(){
    return this.http.get<any[]>('/api/angularcrud/listMorada.php')
  }
  getGabrielaRocha(){
    return this.http.get<any[]>('/api/angularcrud/listGabrielaRocha.php')
  }
  getZoe(){
    return this.http.get<any[]>('/api/angularcrud/listZoe.php')
  }
  isaiasSaad(){
    return this.http.get<any[]>('/api/angularcrud/isaiasSaad.php')
  }
  casaWorship(){
    return this.http.get<any[]>('/api/angularcrud/casaWorship.php')
  }
/*=====================================================
                   C
=====================================================*/
  dodo(v){
   return v.replace(/<b>/g, "<b><font color='red'>")
      .replace(/<\/b>/g, "</font></b>") 
  }
  dodos(v){
   return v
    .replace(/>D#/g, "> E").replace(/>Eb/g, "> E")   
    .replace(/>F#/g, "> G").replace(/>Gb/g, "> G")
    .replace(/>G#/g, "> A").replace(/>Ab/g, "> A")
    .replace(/>A#/g, "> B").replace(/>Bb/g, "> B")
    .replace(/>C#/g, "> D").replace(/>Db/g, "> D")   

    .replace(/>C/g, "> C#")
    .replace(/>D/g, "> D#")
    .replace(/>E/g, "> F")
    .replace(/>F/g, "> F#")
    .replace(/>G/g, "> G#")
    .replace(/>A/g, "> A#")
    .replace(/>B/g, "> C")

    .replace(/\/C#/g, " / D").replace(/\/Db/g, " / D")
    .replace(/\/D#/g, " / E").replace(/\/Eb/g, " / E")
    .replace(/\/F#/g, " / G").replace(/\/Gb/g, " / G")
    .replace(/\/G#/g, " / A").replace(/\/Ab/g, " / A")
    .replace(/\/A#/g, " / B").replace(/\/Bb/g, " / B")      
    
    .replace(/\/C/g, " / C#")
    .replace(/\/D/g, " / D#")
    .replace(/\/E/g, " / F")
    .replace(/\/F/g, " / F#")
    .replace(/\/G/g, " / G#")
    .replace(/\/A/g, " / A#")
    .replace(/\/B/g, " / C")

    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
  }
  dore(v){
    return v
    .replace(/>C#/g, "> D#").replace(/>Db/g, "> D#")   
    .replace(/>D#/g, "> F").replace(/>Eb/g, "> F")   
    .replace(/>F#/g, "> G#").replace(/>Gb/g, "> G#")
    .replace(/>G#/g, "> A#").replace(/>Ab/g, "> A#")
    .replace(/>A#/g, "> C").replace(/>Bb/g, "> C")    

    .replace(/>C/g, "> D")
    .replace(/>D/g, "> E")
    .replace(/>E/g, "> F#")
    .replace(/>F/g, "> G")
    .replace(/>G/g, "> A")
    .replace(/>A/g, "> B")
    .replace(/>B/g, "> C#")

    .replace(/\/C#/g, " / D#").replace(/\/Db/g, " / D#")
    .replace(/\/D#/g, " / F").replace(/\/Eb/g, " / F")
    .replace(/\/F#/g, " / G#").replace(/\/Gb/g, " / G#")
    .replace(/\/G#/g, " / A#").replace(/\/Ab/g, " / A#")
    .replace(/\/A#/g, " / C").replace(/\/Bb/g, " / C")      
    
    .replace(/\/C/g, " / D")
    .replace(/\/D/g, " / E")
    .replace(/\/E/g, " / F#")
    .replace(/\/F/g, " / G")
    .replace(/\/G/g, " / A")
    .replace(/\/A/g, " / B")
    .replace(/\/B/g, " / C#")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
   }
  dores(v){
    return v
    .replace(/>C#/g, "> E").replace(/>Db/g, "> E")   
    .replace(/>D#/g, "> F#").replace(/>Eb/g, "> F#")   
    .replace(/>F#/g, "> A").replace(/>Gb/g, "> A")
    .replace(/>G#/g, "> B").replace(/>Ab/g, "> B")
    .replace(/>A#/g, "> C#").replace(/>Bb/g, "> C#")    

    .replace(/>C/g, "> Eb")
    .replace(/>D/g, "> F")
    .replace(/>E/g, "> G")
    .replace(/>F/g, "> Ab")
    .replace(/>G/g, "> Bb")
    .replace(/>A/g, "> C")
    .replace(/>B/g, "> D")

    .replace(/\/C#/g, " / E").replace(/\/Db/g, " / E")
    .replace(/\/D#/g, " / F#").replace(/\/Eb/g, " / F#")
    .replace(/\/F#/g, " / A").replace(/\/Gb/g, " / A")
    .replace(/\/G#/g, " / B").replace(/\/Ab/g, " / B")
    .replace(/\/A#/g, " / C#").replace(/\/Bb/g, " / C#")      
    
    .replace(/\/C/g, " / Eb")
    .replace(/\/D/g, " / F")
    .replace(/\/E/g, " / G")
    .replace(/\/F/g, " / Ab")
    .replace(/\/G/g, " / Bb")
    .replace(/\/A/g, " / C")
    .replace(/\/B/g, " / D")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
   }
   domi(v){
    return v
    .replace(/>C#/g, "> F").replace(/>Db/g, "> F")   
    .replace(/>D#/g, "> G").replace(/>Eb/g, "> G")   
    .replace(/>F#/g, "> A#").replace(/>Gb/g, "> A#")
    .replace(/>G#/g, "> C").replace(/>Ab/g, "> C")
    .replace(/>A#/g, "> D").replace(/>Bb/g, "> D")    

    .replace(/>C/g, "> E")
    .replace(/>D/g, "> F#")
    .replace(/>E/g, "> G#")
    .replace(/>F/g, "> A")
    .replace(/>G/g, "> B")
    .replace(/>A/g, "> C#")
    .replace(/>B/g, "> D#")

    .replace(/\/C#/g, " / F").replace(/\/Db/g, " / F")
    .replace(/\/D#/g, " / G").replace(/\/Eb/g, " / G")
    .replace(/\/F#/g, " / A#").replace(/\/Gb/g, " / A#")
    .replace(/\/G#/g, " / C").replace(/\/Ab/g, " / C")
    .replace(/\/A#/g, " / D").replace(/\/Bb/g, " / D")      
    
    .replace(/\/C/g, " / E")
    .replace(/\/D/g, " / F#")
    .replace(/\/E/g, " / G#")
    .replace(/\/F/g, " / A")
    .replace(/\/G/g, " / B")
    .replace(/\/A/g, " / C#")
    .replace(/\/B/g, " / D#")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
  
   }
   dofa(v){
    return v
    .replace(/>C#/g, "> F#").replace(/>Db/g, "> F#")   
    .replace(/>D#/g, "> G#").replace(/>Eb/g, "> G#")   
    .replace(/>F#/g, "> B").replace(/>Gb/g, "> B")
    .replace(/>G#/g, "> C#").replace(/>Ab/g, "> C#")
    .replace(/>A#/g, "> D#").replace(/>Bb/g, "> D#")    

    .replace(/>C/g, "> F")
    .replace(/>D/g, "> G")
    .replace(/>E/g, "> A")
    .replace(/>F/g, "> Bb")
    .replace(/>G/g, "> C")
    .replace(/>A/g, "> D")
    .replace(/>B/g, "> E")

    .replace(/\/C#/g, " / F#").replace(/\/Db/g, " / F#")
    .replace(/\/D#/g, " / G#").replace(/\/Eb/g, " / G#")
    .replace(/\/F#/g, " / B").replace(/\/Gb/g, " / B")
    .replace(/\/G#/g, " / C#").replace(/\/Ab/g, " / C#")
    .replace(/\/A#/g, " / D#").replace(/\/Bb/g, " / D#")      
    
    .replace(/\/C/g, " / F")
    .replace(/\/D/g, " / G")
    .replace(/\/E/g, " / A")
    .replace(/\/F/g, " / Bb")
    .replace(/\/G/g, " / C")
    .replace(/\/A/g, " / D")
    .replace(/\/B/g, " / E")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
   }
   dofas(v){
    return v
    .replace(/>C#/g, "> G").replace(/>Db/g, "> G")   
    .replace(/>D#/g, "> A").replace(/>Eb/g, "> A")   
    .replace(/>F#/g, "> C").replace(/>Gb/g, "> C")
    .replace(/>G#/g, "> D").replace(/>Ab/g, "> D")
    .replace(/>A#/g, "> E").replace(/>Bb/g, "> E")    

    .replace(/>C/g, "> F#")
    .replace(/>D/g, "> G#")
    .replace(/>E/g, "> A#")
    .replace(/>F/g, "> B")
    .replace(/>G/g, "> C#")
    .replace(/>A/g, "> D#")
    .replace(/>B/g, "> F")

    .replace(/\/C#/g, " / G").replace(/\/Db/g, " / G")
    .replace(/\/D#/g, " / A").replace(/\/Eb/g, " / A")
    .replace(/\/F#/g, " / C").replace(/\/Gb/g, " / C")
    .replace(/\/G#/g, " / D").replace(/\/Ab/g, " / D")
    .replace(/\/A#/g, " / E").replace(/\/Bb/g, " / E")      
    
    .replace(/\/C/g, " / F#")
    .replace(/\/D/g, " / G#")
    .replace(/\/E/g, " / A#")
    .replace(/\/F/g, " / B")
    .replace(/\/G/g, " / C#")
    .replace(/\/A/g, " / D#")
    .replace(/\/B/g, " / F")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
   }
   dosol(v){
    return v
    .replace(/>C#/g, "> G#").replace(/>Db/g, "> G#")   
    .replace(/>D#/g, "> A#").replace(/>Eb/g, "> A#")   
    .replace(/>F#/g, "> C#").replace(/>Gb/g, "> C#")
    .replace(/>G#/g, "> D#").replace(/>Ab/g, "> D#")
    .replace(/>A#/g, "> F").replace(/>Bb/g, "> F")    

    .replace(/>C/g, "> G")
    .replace(/>D/g, "> A")
    .replace(/>E/g, "> B")
    .replace(/>F/g, "> C")
    .replace(/>G/g, "> D")
    .replace(/>A/g, "> E")
    .replace(/>B/g, "> F#")

    .replace(/\/C#/g, " / G#").replace(/\/Db/g, " / G#")
    .replace(/\/D#/g, " / A#").replace(/\/Eb/g, " / A#")
    .replace(/\/F#/g, " / C#").replace(/\/Gb/g, " / C#")
    .replace(/\/G#/g, " / D#").replace(/\/Ab/g, " / D#")
    .replace(/\/A#/g, " / F").replace(/\/Bb/g, " / F")      
    
    .replace(/\/C/g, " / G")
    .replace(/\/D/g, " / A")
    .replace(/\/E/g, " / B")
    .replace(/\/F/g, " / C")
    .replace(/\/G/g, " / D")
    .replace(/\/A/g, " / E")
    .replace(/\/B/g, " / F#")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
   }
   dosols(v){
    return v
    .replace(/>C#/g, "> A").replace(/>Db/g, "> A")   
    .replace(/>D#/g, "> B").replace(/>Eb/g, "> B")   
    .replace(/>F#/g, "> D").replace(/>Gb/g, "> D")
    .replace(/>G#/g, "> E").replace(/>Ab/g, "> E")
    .replace(/>A#/g, "> F#").replace(/>Bb/g, "> F#")    

    .replace(/>C/g, "> Ab")
    .replace(/>D/g, "> Bb")
    .replace(/>E/g, "> C")
    .replace(/>F/g, "> Db")
    .replace(/>G/g, "> Eb")
    .replace(/>A/g, "> F")
    .replace(/>B/g, "> G")

    .replace(/\/C#/g, " / A").replace(/\/Db/g, " / A")
    .replace(/\/D#/g, " / B").replace(/\/Eb/g, " / B")
    .replace(/\/F#/g, " / D").replace(/\/Gb/g, " / D")
    .replace(/\/G#/g, " / E").replace(/\/Ab/g, " / E")
    .replace(/\/A#/g, " / F#").replace(/\/Bb/g, " / F#")      
    
    .replace(/\/C/g, " / Ab")
    .replace(/\/D/g, " / Bb")
    .replace(/\/E/g, " / C")
    .replace(/\/F/g, " / Db")
    .replace(/\/G/g, " / Eb")
    .replace(/\/A/g, " / F")
    .replace(/\/B/g, " / G")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
   }
   dola(v){
    return v
    .replace(/>C#/g, "> A#").replace(/>Db/g, "> A#")   
    .replace(/>D#/g, "> C").replace(/>Eb/g, "> C")   
    .replace(/>F#/g, "> D#").replace(/>Gb/g, "> D#")
    .replace(/>G#/g, "> F").replace(/>Ab/g, "> F")
    .replace(/>A#/g, "> G").replace(/>Bb/g, "> G")    

    .replace(/>C/g, "> A")
    .replace(/>D/g, "> B")
    .replace(/>E/g, "> C#")
    .replace(/>F/g, "> D")
    .replace(/>G/g, "> E")
    .replace(/>A/g, "> F#")
    .replace(/>B/g, "> G#")

    .replace(/\/C#/g, " / A#").replace(/\/Db/g, " / A#")
    .replace(/\/D#/g, " / C").replace(/\/Eb/g, " / C")
    .replace(/\/F#/g, " / D#").replace(/\/Gb/g, " / D#")
    .replace(/\/G#/g, " / F").replace(/\/Ab/g, " / F")
    .replace(/\/A#/g, " / G").replace(/\/Bb/g, " / G")      
    
    .replace(/\/C/g, " / A")
    .replace(/\/D/g, " / B")
    .replace(/\/E/g, " / C#")
    .replace(/\/F/g, " / D#")
    .replace(/\/G/g, " / E")
    .replace(/\/A/g, " / F#")
    .replace(/\/B/g, " / G#")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
   }
   dolas(v){
    return v
    .replace(/>C#/g, "> B").replace(/>Db/g, "> B")   
    .replace(/>D#/g, "> C#").replace(/>Eb/g, "> C#")   
    .replace(/>F#/g, "> E").replace(/>Gb/g, "> E")
    .replace(/>G#/g, "> F#").replace(/>Ab/g, "> F#")
    .replace(/>A#/g, "> G#").replace(/>Bb/g, "> G#")    

    .replace(/>C/g, "> Bb")
    .replace(/>D/g, "> C")
    .replace(/>E/g, "> D")
    .replace(/>F/g, "> Eb")
    .replace(/>G/g, "> F")
    .replace(/>A/g, "> G")
    .replace(/>B/g, "> A")

    .replace(/\/C#/g, " / B").replace(/\/Db/g, " / B")
    .replace(/\/D#/g, " / C#").replace(/\/Eb/g, " / C#")
    .replace(/\/F#/g, " / E").replace(/\/Gb/g, " / E")
    .replace(/\/G#/g, " / F#").replace(/\/Ab/g, " / F#")
    .replace(/\/A#/g, " / G#").replace(/\/Bb/g, " / G#")      
    
    .replace(/\/C/g, " / Bb")
    .replace(/\/D/g, " / C")
    .replace(/\/E/g, " / D")
    .replace(/\/F/g, " / Eb")
    .replace(/\/G/g, " / F")
    .replace(/\/A/g, " / G")
    .replace(/\/B/g, " / A")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
   }
   dosi(v){
    return v
    .replace(/>C#/g, "> C").replace(/>Db/g, "> C")   
    .replace(/>D#/g, "> D").replace(/>Eb/g, "> D")   
    .replace(/>F#/g, "> F").replace(/>Gb/g, "> F")
    .replace(/>G#/g, "> G").replace(/>Ab/g, "> G")
    .replace(/>A#/g, "> A").replace(/>Bb/g, "> A")    

    .replace(/>C/g, "> B")
    .replace(/>D/g, "> C#")
    .replace(/>E/g, "> D#")
    .replace(/>F/g, "> E")
    .replace(/>G/g, "> F#")
    .replace(/>A/g, "> G#")
    .replace(/>B/g, "> A#")

    .replace(/\/C#/g, " / C").replace(/\/Db/g, " / C")
    .replace(/\/D#/g, " / D").replace(/\/Eb/g, " / D")
    .replace(/\/F#/g, " / F").replace(/\/Gb/g, " / F")
    .replace(/\/G#/g, " / G").replace(/\/Ab/g, " / G")
    .replace(/\/A#/g, " / A").replace(/\/Bb/g, " / A")      
    
    .replace(/\/C/g, " / B")
    .replace(/\/D/g, " / C#")
    .replace(/\/E/g, " / D#")
    .replace(/\/F/g, " / E")
    .replace(/\/G/g, " / F#")
    .replace(/\/A/g, " / G#")
    .replace(/\/B/g, " / A#")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
   }
/*=====================================================
                    D 
=====================================================*/
 redo(v){
  return v
    .replace(/>C#/g, "> B").replace(/>Db/g, "> B")   
    .replace(/>D#/g, "> Db").replace(/>Eb/g, "> Db")   
    .replace(/>F#/g, "> E").replace(/>Gb/g, "> E")
    .replace(/>G#/g, "> F#").replace(/>Ab/g, "> F#")
    .replace(/>A#/g, "> G#").replace(/>Bb/g, "> G#")    

    .replace(/>C/g, "> Bb")
    .replace(/>D/g, "> C")
    .replace(/>E/g, "> D")
    .replace(/>F/g, "> Eb")
    .replace(/>G/g, "> F")
    .replace(/>A/g, "> G")
    .replace(/>B/g, "> A")

    .replace(/\/C#/g, " / B").replace(/\/Db/g, " / B")
    .replace(/\/D#/g, " / Db").replace(/\/Eb/g, " / Db")
    .replace(/\/F#/g, " / E").replace(/\/Gb/g, " / E")
    .replace(/\/G#/g, " / F#").replace(/\/Ab/g, " / F#")
    .replace(/\/A#/g, " / G#").replace(/\/Bb/g, " / G#")      
    
    .replace(/\/C/g, " / Bb")
    .replace(/\/D/g, " / C")
    .replace(/\/E/g, " / D")
    .replace(/\/F/g, " / Eb")
    .replace(/\/G/g, " / F")
    .replace(/\/A/g, " / G")
    .replace(/\/B/g, " / A")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
 }
 redos(v){
  return v
  .replace(/>C#/g, "> C").replace(/>Db/g, "> C")   
  .replace(/>D#/g, "> D").replace(/>Eb/g, "> D")   
  .replace(/>F#/g, "> F").replace(/>Gb/g, "> F")
  .replace(/>G#/g, "> G").replace(/>Ab/g, "> G")
  .replace(/>A#/g, "> A").replace(/>Bb/g, "> A")    
  
  .replace(/>D/g, "> C#")
  .replace(/>E/g, "> D#")
  .replace(/>F/g, "> E")
  .replace(/>G/g, "> F#")
  .replace(/>A/g, "> G#")
  .replace(/>B/g, "> A#")
  .replace(/>C/g, "> B")

  .replace(/\/C#/g, " / C").replace(/\/Db/g, " / C")
  .replace(/\/D#/g, " / D").replace(/\/Eb/g, " / D")
  .replace(/\/F#/g, " / F").replace(/\/Gb/g, " / F")
  .replace(/\/G#/g, " / G").replace(/\/Ab/g, " / G")
  .replace(/\/A#/g, " / A").replace(/\/Bb/g, " / A")        
  
  .replace(/\/D/g, " / C#")
  .replace(/\/E/g, " / D#")
  .replace(/\/F/g, " / E")
  .replace(/\/G/g, " / F#")
  .replace(/\/A/g, " / G#")
  .replace(/\/B/g, " / A#")
  .replace(/\/C/g, " / B")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
 }
 rere(v){
  return v .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
 }
 reres(v){
  return v
  .replace(/>C#/g, "> D").replace(/>Db/g, "> D")   
  .replace(/>D#/g, "> E").replace(/>Eb/g, "> E")   
  .replace(/>F#/g, "> G").replace(/>Gb/g, "> G")
  .replace(/>G#/g, "> A").replace(/>Ab/g, "> A")
  .replace(/>A#/g, "> B").replace(/>Bb/g, "> B")
  
  .replace(/>D/g, "> Eb")
  .replace(/>E/g, "> F")
  .replace(/>F/g, "> F#")
  .replace(/>G/g, "> Ab")
  .replace(/>A/g, "> Bb")
  .replace(/>B/g, "> C")
  .replace(/>C/g, "> Db")

  .replace(/\/C#/g, " / D").replace(/\/Db/g, " / D")
  .replace(/\/D#/g, " / E").replace(/\/Eb/g, " / E")
  .replace(/\/F#/g, " / G").replace(/\/Gb/g, " / G")
  .replace(/\/G#/g, " / A").replace(/\/Ab/g, " / A")
  .replace(/\/A#/g, " / B").replace(/\/Bb/g, " / B")
  
  .replace(/\/D/g, " / Eb")
  .replace(/\/E/g, " / F")
  .replace(/\/F/g, " / F#")
  .replace(/\/G/g, " / Ab")
  .replace(/\/A/g, " / Bb")
  .replace(/\/B/g, " / C")
  .replace(/\/C/g, " / Db")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
 }
 remi(v){
  return v
  .replace(/>C#/g, "> D#").replace(/>Db/g, "> D#")   
  .replace(/>D#/g, "> F").replace(/>Eb/g, "> F")   
  .replace(/>F#/g, "> G#").replace(/>Gb/g, "> G#")
  .replace(/>G#/g, "> A#").replace(/>Ab/g, "> A#")
  .replace(/>A#/g, "> C").replace(/>Bb/g, "> C")    
  
  .replace(/>D/g, "> E")
  .replace(/>E/g, "> F#")
  .replace(/>F/g, "> G")
  .replace(/>G/g, "> A")
  .replace(/>A/g, "> B")
  .replace(/>B/g, "> C#")
  .replace(/>C/g, "> D")

  .replace(/\/C#/g, " / D#").replace(/\/Db/g, " / D#")
  .replace(/\/D#/g, " / F").replace(/\/Eb/g, " / F")
  .replace(/\/F#/g, " / G#").replace(/\/Gb/g, " / G#")
  .replace(/\/G#/g, " / A#").replace(/\/Ab/g, " / A#")
  .replace(/\/A#/g, " / C").replace(/\/Bb/g, " / C")        
  
  .replace(/\/D/g, " / E")
  .replace(/\/E/g, " / F#")
  .replace(/\/F/g, " / G")
  .replace(/\/G/g, " / A")
  .replace(/\/A/g, " / B")
  .replace(/\/B/g, " / C#")
  .replace(/\/C/g, " / D")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
 }
 refa(v){
  return v
  .replace(/>C#/g, "> E").replace(/>Db/g, "> E")   
  .replace(/>D#/g, "> F#").replace(/>Eb/g, "> F#")   
  .replace(/>F#/g, "> A").replace(/>Gb/g, "> A")
  .replace(/>G#/g, "> B").replace(/>Ab/g, "> B")
  .replace(/>A#/g, "> C#").replace(/>Bb/g, "> C#")    
  
  .replace(/>D/g, "> F")
  .replace(/>E/g, "> G")
  .replace(/>F/g, "> G#")
  .replace(/>G/g, "> A#")
  .replace(/>A/g, "> C")
  .replace(/>B/g, "> D")
  .replace(/>C/g, "> Eb")

  .replace(/\/C#/g, " / E").replace(/\/Db/g, " / E")
  .replace(/\/D#/g, " / F#").replace(/\/Eb/g, " / F#")
  .replace(/\/F#/g, " / A").replace(/\/Gb/g, " / A")
  .replace(/\/G#/g, " / B").replace(/\/Ab/g, " / B")
  .replace(/\/A#/g, " / C#").replace(/\/Bb/g, " / C#")        
  
  .replace(/\/D/g, " / F")
  .replace(/\/E/g, " / G")
  .replace(/\/F/g, " / G#")
  .replace(/\/G/g, " / Bb")
  .replace(/\/A/g, " / C")
  .replace(/\/B/g, " / D")
  .replace(/\/C/g, " / Eb")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
 }
 refas(v){
  return v
  .replace(/>C#/g, "> F").replace(/>Db/g, "> F")   
  .replace(/>D#/g, "> G").replace(/>Eb/g, "> G")   
  .replace(/>F#/g, "> A#").replace(/>Gb/g, "> A#")
  .replace(/>G#/g, "> C").replace(/>Ab/g, "> C")
  .replace(/>A#/g, "> D").replace(/>Bb/g, "> D")    
  
  .replace(/>D/g, "> F#")
  .replace(/>E/g, "> G#")
  .replace(/>F/g, "> A")
  .replace(/>G/g, "> B")
  .replace(/>A/g, "> C#")
  .replace(/>B/g, "> D#")
  .replace(/>C/g, "> E")

  .replace(/\/C#/g, " / F").replace(/\/Db/g, " / F")
  .replace(/\/D#/g, " / G").replace(/\/Eb/g, " / G")
  .replace(/\/F#/g, " / A#").replace(/\/Gb/g, " / A#")
  .replace(/\/G#/g, " / C").replace(/\/Ab/g, " / C")
  .replace(/\/A#/g, " / D").replace(/\/Bb/g, " / D")        
  
  .replace(/\/D/g, " / F#")
  .replace(/\/E/g, " / G#")
  .replace(/\/F/g, " / A")
  .replace(/\/G/g, " / B")
  .replace(/\/A/g, " / C#")
  .replace(/\/B/g, " / D#")
  .replace(/\/C/g, " / E")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
 }
 resol(v){
  return v
  .replace(/>C#/g, "> F#").replace(/>Db/g, "> F#")   
  .replace(/>D#/g, "> G#").replace(/>Eb/g, "> G#")   
  .replace(/>F#/g, "> B").replace(/>Gb/g, "> B")
  .replace(/>G#/g, "> C#").replace(/>Ab/g, "> C#")
  .replace(/>A#/g, "> D#").replace(/>Bb/g, "> D#")    
  
  .replace(/>D/g, "> G")
  .replace(/>E/g, "> A")
  .replace(/>F/g, "> A#")
  .replace(/>G/g, "> C")
  .replace(/>A/g, "> D")
  .replace(/>B/g, "> E")
  .replace(/>C/g, "> F")

  .replace(/\/C#/g, " / F#").replace(/\/Db/g, " / F#")
  .replace(/\/D#/g, " / G#").replace(/\/Eb/g, " / G#")
  .replace(/\/F#/g, " / B").replace(/\/Gb/g, " / B")
  .replace(/\/G#/g, " / C#").replace(/\/Ab/g, " / C#")
  .replace(/\/A#/g, " / D#").replace(/\/Bb/g, " / D#")        
  
  .replace(/\/D/g, " / G")
  .replace(/\/E/g, " / A")
  .replace(/\/F/g, " / A#")
  .replace(/\/G/g, " / C")
  .replace(/\/A/g, " / D")
  .replace(/\/B/g, " / E")
  .replace(/\/C/g, " / F")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
 }
 resols(v){
  return v
  .replace(/>C#/g, "> G").replace(/>Db/g, "> G")   
  .replace(/>D#/g, "> A").replace(/>Eb/g, "> A")   
  .replace(/>F#/g, "> C").replace(/>Gb/g, "> C")
  .replace(/>G#/g, "> D").replace(/>Ab/g, "> D")
  .replace(/>A#/g, "> E").replace(/>Bb/g, "> E")    
  
  .replace(/>D/g, "> G#")
  .replace(/>E/g, "> A#")
  .replace(/>F/g, "> B")
  .replace(/>G/g, "> C#")
  .replace(/>A/g, "> D#")
  .replace(/>B/g, "> F")
  .replace(/>C/g, "> F#")

  .replace(/\/C#/g, " / G").replace(/\/Db/g, " / G")
  .replace(/\/D#/g, " / A").replace(/\/Eb/g, " / A")
  .replace(/\/F#/g, " / C").replace(/\/Gb/g, " / C")
  .replace(/\/G#/g, " / D").replace(/\/Ab/g, " / D")
  .replace(/\/A#/g, " / E").replace(/\/Bb/g, " / E")        
  
  .replace(/\/D/g, " / G#")
  .replace(/\/E/g, " / A#")
  .replace(/\/F/g, " / B")
  .replace(/\/G/g, " / C#")
  .replace(/\/A/g, " / D#")
  .replace(/\/B/g, " / F")
  .replace(/\/C/g, " / F#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
 }
 rela(v){
  return v
  .replace(/>C#/g, "> G#").replace(/>Db/g, "> G#")   
  .replace(/>D#/g, "> A#").replace(/>Eb/g, "> A#")   
  .replace(/>F#/g, "> C#").replace(/>Gb/g, "> C#")
  .replace(/>G#/g, "> D#").replace(/>Ab/g, "> D#")
  .replace(/>A#/g, "> F").replace(/>Bb/g, "> F")    
  
  .replace(/>D/g, "> A")
  .replace(/>E/g, "> B")
  .replace(/>F/g, "> C")
  .replace(/>G/g, "> D")
  .replace(/>A/g, "> E")
  .replace(/>B/g, "> F#")
  .replace(/>C/g, "> G")

  .replace(/\/C#/g, " / G#").replace(/\/Db/g, " / G#")
  .replace(/\/D#/g, " / A#").replace(/\/Eb/g, " / A#")
  .replace(/\/F#/g, " / C#").replace(/\/Gb/g, " / C#")
  .replace(/\/G#/g, " / D#").replace(/\/Ab/g, " / D#")
  .replace(/\/A#/g, " / F").replace(/\/Bb/g, " / F")        
  
  .replace(/\/D/g, " / A")
  .replace(/\/E/g, " / B")
  .replace(/\/F/g, " / C")
  .replace(/\/G/g, " / D")
  .replace(/\/A/g, " / E")
  .replace(/\/B/g, " / F#")
  .replace(/\/C/g, " / G")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
 }
 relas(v){
  return v
  .replace(/>C#/g, "> A").replace(/>Db/g, "> A")   
  .replace(/>D#/g, "> B").replace(/>Eb/g, "> B")   
  .replace(/>F#/g, "> D").replace(/>Gb/g, "> D")
  .replace(/>G#/g, "> E").replace(/>Ab/g, "> E")
  .replace(/>A#/g, "> F#").replace(/>Bb/g, "> F#")    
  
  .replace(/>D/g, "> Bb")
  .replace(/>E/g, "> C")
  .replace(/>F/g, "> Db")
  .replace(/>G/g, "> Eb")
  .replace(/>A/g, "> F")
  .replace(/>B/g, "> G")
  .replace(/>C/g, "> Ab")

  .replace(/\/C#/g, " / A").replace(/\/Db/g, " / A")
  .replace(/\/D#/g, " / B").replace(/\/Eb/g, " / B")
  .replace(/\/F#/g, " / D").replace(/\/Gb/g, " / D")
  .replace(/\/G#/g, " / E").replace(/\/Ab/g, " / E")
  .replace(/\/A#/g, " / F#").replace(/\/Bb/g, " / F#")        
  
  .replace(/\/D/g, " / Bb")
  .replace(/\/E/g, " / C")
  .replace(/\/F/g, " / Db")
  .replace(/\/G/g, " / Eb")
  .replace(/\/A/g, " / F")
  .replace(/\/B/g, " / G")
  .replace(/\/C/g, " / Ab")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
 }
 resi(v){
  return v
  .replace(/>C#/g, "> A#").replace(/>Db/g, "> A#")   
  .replace(/>D#/g, "> C").replace(/>Eb/g, "> C")   
  .replace(/>F#/g, "> D#").replace(/>Gb/g, "> D#")
  .replace(/>G#/g, "> F").replace(/>Ab/g, "> F")
  .replace(/>A#/g, "> G").replace(/>Bb/g, "> G")    
  
  .replace(/>D/g, "> B")
  .replace(/>E/g, "> C#")
  .replace(/>F/g, "> D")
  .replace(/>G/g, "> E")
  .replace(/>A/g, "> F#")
  .replace(/>B/g, "> G#")
  .replace(/>C/g, "> A")

  .replace(/\/C#/g, " / A#").replace(/\/Db/g, " / A#")
  .replace(/\/D#/g, " / C").replace(/\/Eb/g, " / C")
  .replace(/\/F#/g, " / D#").replace(/\/Gb/g, " / D#")
  .replace(/\/G#/g, " / F").replace(/\/Ab/g, " / F")
  .replace(/\/A#/g, " / G").replace(/\/Bb/g, " / G")        
  
  .replace(/\/D/g, " / B")
  .replace(/\/E/g, " / C#")
  .replace(/\/F/g, " / D")
  .replace(/\/G/g, " / E")
  .replace(/\/A/g, " / F#")
  .replace(/\/B/g, " / G#")
  .replace(/\/C/g, " / A")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
 }
 /*=====================================================
                    E 
=====================================================*/
mido(v){
  return v
    .replace(/>C#/g, "> A").replace(/>Db/g, "> A")   
    .replace(/>D#/g, "> B").replace(/>Eb/g, "> B")   
    .replace(/>F#/g, "> D").replace(/>Gb/g, "> D")
    .replace(/>G#/g, "> E").replace(/>Ab/g, "> E")
    .replace(/>A#/g, "> F#").replace(/>Bb/g, "> F#")    

    .replace(/>D/g, "> Bb")
    .replace(/>E/g, "> C")
    .replace(/>F/g, "> C#")
    .replace(/>G/g, "> Eb")
    .replace(/>A/g, "> F")
    .replace(/>B/g, "> G")
    .replace(/>C/g, "> Ab")

    .replace(/\/C#/g, " / A").replace(/\/Db/g, " / A")
    .replace(/\/D#/g, " / B").replace(/\/Eb/g, " / B")
    .replace(/\/F#/g, " / D").replace(/\/Gb/g, " / D")
    .replace(/\/G#/g, " / E").replace(/\/Ab/g, " / E")
    .replace(/\/A#/g, " / F#").replace(/\/Bb/g, " / F#")      
    
    .replace(/\/D/g, " / Bb")
    .replace(/\/E/g, " / C")
    .replace(/\/F/g, " / C#")
    .replace(/\/G/g, " / Eb")
    .replace(/\/A/g, " / F")
    .replace(/\/B/g, " / G")
    .replace(/\/C/g, " / Ab")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
midos(v){
  return v
    .replace(/>C#/g, "> A#").replace(/>Db/g, "> A#")   
    .replace(/>D#/g, "> C").replace(/>Eb/g, "> C")   
    .replace(/>F#/g, "> D#").replace(/>Gb/g, "> D#")
    .replace(/>G#/g, "> F").replace(/>Ab/g, "> F")
    .replace(/>A#/g, "> G").replace(/>Bb/g, "> G")    

    .replace(/>D/g, "> B")
    .replace(/>E/g, "> C#")
    .replace(/>F/g, "> D")
    .replace(/>G/g, "> E")
    .replace(/>A/g, "> F#")
    .replace(/>B/g, "> G#")
    .replace(/>C/g, "> A")

    .replace(/\/C#/g, " / A#").replace(/\/Db/g, " / A#")
    .replace(/\/D#/g, " / C").replace(/\/Eb/g, " / C")
    .replace(/\/F#/g, " / D#").replace(/\/Gb/g, " / D#")
    .replace(/\/G#/g, " / F").replace(/\/Ab/g, " / F")
    .replace(/\/A#/g, " / G").replace(/\/Bb/g, " / G")      
    
    .replace(/\/D/g, " / B")
    .replace(/\/E/g, " / C#")
    .replace(/\/F/g, " / D")
    .replace(/\/G/g, " / E")
    .replace(/\/A/g, " / F#")
    .replace(/\/B/g, " / G#")
    .replace(/\/C/g, " / A")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
mire(v){
  return v
    .replace(/>C#/g, "> B").replace(/>Db/g, "> B")   
    .replace(/>D#/g, "> C#").replace(/>Eb/g, "> C#")   
    .replace(/>F#/g, "> E").replace(/>Gb/g, "> E")
    .replace(/>G#/g, "> F#").replace(/>Ab/g, "> F#")
    .replace(/>A#/g, "> Ab").replace(/>Bb/g, "> Ab")    

    .replace(/>D/g, "> C")
    .replace(/>E/g, "> D")
    .replace(/>F/g, "> D#")
    .replace(/>G/g, "> F")
    .replace(/>A/g, "> G")
    .replace(/>B/g, "> A")
    .replace(/>C/g, "> A#")

    .replace(/\/C#/g, " / B").replace(/\/Db/g, " / B")
    .replace(/\/D#/g, " / C#").replace(/\/Eb/g, " / C#")
    .replace(/\/F#/g, " / E").replace(/\/Gb/g, " / E")
    .replace(/\/G#/g, " / F#").replace(/\/Ab/g, " / F#")
    .replace(/\/A#/g, " / Ab").replace(/\/Bb/g, " / Ab")      
    
    .replace(/\/D/g, " / C")
    .replace(/\/E/g, " / D")
    .replace(/\/F/g, " / D#")
    .replace(/\/G/g, " / F")
    .replace(/\/A/g, " / G")
    .replace(/\/B/g, " / A")
    .replace(/\/C/g, " / A#")
    
    .replace(/<b>/g, "<b><font color='red'>")
    .replace(/<\/b>/g, "</font></b>")
    .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
mires(v){
  return v
  .replace(/>C#/g, "> C").replace(/>Db/g, "> C")   
  .replace(/>D#/g, "> D").replace(/>Eb/g, "> D")   
  .replace(/>F#/g, "> F").replace(/>Gb/g, "> F")
  .replace(/>G#/g, "> G").replace(/>Ab/g, "> G")
  .replace(/>A#/g, "> A").replace(/>Bb/g, "> A")    

  .replace(/>D/g, "> C#")
  .replace(/>E/g, "> D#")
  .replace(/>F/g, "> E")
  .replace(/>G/g, "> F#")
  .replace(/>A/g, "> G#")
  .replace(/>B/g, "> A#")
  .replace(/>C/g, "> B")

  .replace(/\/C#/g, " / C").replace(/\/Db/g, " / C")
  .replace(/\/D#/g, " / D").replace(/\/Eb/g, " / D")
  .replace(/\/F#/g, " / F").replace(/\/Gb/g, " / F")
  .replace(/\/G#/g, " / G").replace(/\/Ab/g, " / G")
  .replace(/\/A#/g, " / A").replace(/\/Bb/g, " / A")      
  
  .replace(/\/D/g, " / C#")
  .replace(/\/E/g, " / D#")
  .replace(/\/F/g, " / E")
  .replace(/\/G/g, " / F#")
  .replace(/\/A/g, " / G#")
  .replace(/\/B/g, " / A#")
  .replace(/\/C/g, " / B")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
mimi(v){
  return v.replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
}
mifa(v){
  return v
  .replace(/>C#/g, "> D").replace(/>Db/g, "> D")   
  .replace(/>D#/g, "> E").replace(/>Eb/g, "> E")   
  .replace(/>F#/g, "> G").replace(/>Gb/g, "> G")
  .replace(/>G#/g, "> A").replace(/>Ab/g, "> A")
  .replace(/>A#/g, "> B").replace(/>Bb/g, "> B")    

  .replace(/>D/g, "> D#")
  .replace(/>E/g, "> F")
  .replace(/>F/g, "> F#")
  .replace(/>G/g, "> G#")
  .replace(/>A/g, "> A#")
  .replace(/>B/g, "> C")
  .replace(/>C/g, "> C#")

  .replace(/\/C#/g, " / D").replace(/\/Db/g, " / D")
  .replace(/\/D#/g, " / E").replace(/\/Eb/g, " / E")
  .replace(/\/F#/g, " / G").replace(/\/Gb/g, " / G")
  .replace(/\/G#/g, " / A").replace(/\/Ab/g, " / A")
  .replace(/\/A#/g, " / B").replace(/\/Bb/g, " / B")      
  
  .replace(/\/D/g, " / D#")
  .replace(/\/E/g, " / F")
  .replace(/\/F/g, " / F#")
  .replace(/\/G/g, " / G#")
  .replace(/\/A/g, " / A#")
  .replace(/\/B/g, " / C")
  .replace(/\/C/g, " / C#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
mifas(v){
  return v
  .replace(/>C#/g, "> D#").replace(/>Db/g, "> D#")   
  .replace(/>D#/g, "> F").replace(/>Eb/g, "> F")   
  .replace(/>F#/g, "> G#").replace(/>Gb/g, "> G#")
  .replace(/>G#/g, "> A#").replace(/>Ab/g, "> A#")
  .replace(/>A#/g, "> C").replace(/>Bb/g, "> C")    

  .replace(/>D/g, "> E")
  .replace(/>E/g, "> F#")
  .replace(/>F/g, "> G")
  .replace(/>G/g, "> A")
  .replace(/>A/g, "> B")
  .replace(/>B/g, "> C#")
  .replace(/>C/g, "> D")

  .replace(/\/C#/g, " / D#").replace(/\/Db/g, " / D#")
  .replace(/\/D#/g, " / F").replace(/\/Eb/g, " / F")
  .replace(/\/F#/g, " / G#").replace(/\/Gb/g, " / G#")
  .replace(/\/G#/g, " / A#").replace(/\/Ab/g, " / A#")
  .replace(/\/A#/g, " / C").replace(/\/Bb/g, " / C")      
  
  .replace(/\/D/g, " / E")
  .replace(/\/E/g, " / F#")
  .replace(/\/F/g, " / G")
  .replace(/\/G/g, " / A")
  .replace(/\/A/g, " / B")
  .replace(/\/B/g, " / C#")
  .replace(/\/C/g, " / D")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
misol(v){
  return v
  .replace(/>C#/g, "> E").replace(/>Db/g, "> E")   
  .replace(/>D#/g, "> F#").replace(/>Eb/g, "> F#")   
  .replace(/>F#/g, "> A").replace(/>Gb/g, "> A")
  .replace(/>G#/g, "> B").replace(/>Ab/g, "> B")
  .replace(/>A#/g, "> C#").replace(/>Bb/g, "> C#")    

  .replace(/>D/g, "> F")
  .replace(/>E/g, "> G")
  .replace(/>F/g, "> G#")
  .replace(/>G/g, "> A#")
  .replace(/>A/g, "> C")
  .replace(/>B/g, "> D")
  .replace(/>C/g, "> D#")

  .replace(/\/C#/g, " / E").replace(/\/Db/g, " / E")
  .replace(/\/D#/g, " / F#").replace(/\/Eb/g, " / F#")
  .replace(/\/F#/g, " / A").replace(/\/Gb/g, " / A")
  .replace(/\/G#/g, " / B").replace(/\/Ab/g, " / B")
  .replace(/\/A#/g, " / C#").replace(/\/Bb/g, " / C#")      
  
  .replace(/\/D/g, " / F")
  .replace(/\/E/g, " / G")
  .replace(/\/F/g, " / G#")
  .replace(/\/G/g, " / A#")
  .replace(/\/A/g, " / C")
  .replace(/\/B/g, " / D")
  .replace(/\/C/g, " / D#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
misols(v){
  return v
  .replace(/>C#/g, "> F").replace(/>Db/g, "> F")   
  .replace(/>D#/g, "> G").replace(/>Eb/g, "> G")   
  .replace(/>F#/g, "> A#").replace(/>Gb/g, "> A#")
  .replace(/>G#/g, "> C").replace(/>Ab/g, "> C")
  .replace(/>A#/g, "> D").replace(/>Bb/g, "> D")    

  .replace(/>D/g, "> F#")
  .replace(/>E/g, "> G#")
  .replace(/>F/g, "> A")
  .replace(/>G/g, "> B")
  .replace(/>A/g, "> C#")
  .replace(/>B/g, "> D#")
  .replace(/>C/g, "> E")

  .replace(/\/C#/g, " / F").replace(/\/Db/g, " / F")
  .replace(/\/D#/g, " / G").replace(/\/Eb/g, " / G")
  .replace(/\/F#/g, " / A#").replace(/\/Gb/g, " / A#")
  .replace(/\/G#/g, " / C").replace(/\/Ab/g, " / C")
  .replace(/\/A#/g, " / D").replace(/\/Bb/g, " / D")      
  
  .replace(/\/D/g, " / F#")
  .replace(/\/E/g, " / G#")
  .replace(/\/F/g, " / A")
  .replace(/\/G/g, " / B")
  .replace(/\/A/g, " / C#")
  .replace(/\/B/g, " / D#")
  .replace(/\/C/g, " / E")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
mila(v){
  return v
  .replace(/>C#/g, "> F#").replace(/>Db/g, "> F#")   
  .replace(/>D#/g, "> G#").replace(/>Eb/g, "> G#")   
  .replace(/>F#/g, "> B").replace(/>Gb/g, "> B")
  .replace(/>G#/g, "> C#").replace(/>Ab/g, "> C#")
  .replace(/>A#/g, "> D#").replace(/>Bb/g, "> D#")    

  .replace(/>D/g, "> G")
  .replace(/>E/g, "> A")
  .replace(/>F/g, "> A#")
  .replace(/>G/g, "> C")
  .replace(/>A/g, "> D")
  .replace(/>B/g, "> E")
  .replace(/>C/g, "> F")

  .replace(/\/C#/g, " / F#").replace(/\/Db/g, " / F#")
  .replace(/\/D#/g, " / G#").replace(/\/Eb/g, " / G#")
  .replace(/\/F#/g, " / B").replace(/\/Gb/g, " / B")
  .replace(/\/G#/g, " / C#").replace(/\/Ab/g, " / C#")
  .replace(/\/A#/g, " / D#").replace(/\/Bb/g, " / D#")      
  
  .replace(/\/D/g, " / G")
  .replace(/\/E/g, " / A")
  .replace(/\/F/g, " / A#")
  .replace(/\/G/g, " / C")
  .replace(/\/A/g, " / D")
  .replace(/\/B/g, " / E")
  .replace(/\/C/g, " / F")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
milas(v){
  return v
  .replace(/>C#/g, "> G").replace(/>Db/g, "> G")   
  .replace(/>D#/g, "> A").replace(/>Eb/g, "> A")   
  .replace(/>F#/g, "> C").replace(/>Gb/g, "> C")
  .replace(/>G#/g, "> D").replace(/>Ab/g, "> D")
  .replace(/>A#/g, "> E").replace(/>Bb/g, "> E")    

  .replace(/>D/g, "> G#")
  .replace(/>E/g, "> A#")
  .replace(/>F/g, "> B")
  .replace(/>G/g, "> C#")
  .replace(/>A/g, "> D#")
  .replace(/>B/g, "> F")
  .replace(/>C/g, "> F#")

  .replace(/\/C#/g, " / G").replace(/\/Db/g, " / G")
  .replace(/\/D#/g, " / A").replace(/\/Eb/g, " / A")
  .replace(/\/F#/g, " / C").replace(/\/Gb/g, " / C")
  .replace(/\/G#/g, " / D").replace(/\/Ab/g, " / D")
  .replace(/\/A#/g, " / E").replace(/\/Bb/g, " / E")      
  
  .replace(/\/D/g, " / G#")
  .replace(/\/E/g, " / A#")
  .replace(/\/F/g, " / B")
  .replace(/\/G/g, " / C#")
  .replace(/\/A/g, " / D#")
  .replace(/\/B/g, " / F")
  .replace(/\/C/g, " / F#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
misi(v){
  return v
  .replace(/>C#/g, "> G#").replace(/>Db/g, "> G#")   
  .replace(/>D#/g, "> A#").replace(/>Eb/g, "> A#")   
  .replace(/>F#/g, "> C#").replace(/>Gb/g, "> C#")
  .replace(/>G#/g, "> D#").replace(/>Ab/g, "> D#")
  .replace(/>A#/g, "> F").replace(/>Bb/g, "> F")    

  .replace(/>D/g, "> A")
  .replace(/>E/g, "> B")
  .replace(/>F/g, "> C")
  .replace(/>G/g, "> D")
  .replace(/>A/g, "> E")
  .replace(/>B/g, "> F#")
  .replace(/>C/g, "> G")

  .replace(/\/C#/g, " / G#").replace(/\/Db/g, " / G#")
  .replace(/\/D#/g, " / A#").replace(/\/Eb/g, " / A#")
  .replace(/\/F#/g, " / C#").replace(/\/Gb/g, " / C#")
  .replace(/\/G#/g, " / D#").replace(/\/Ab/g, " / D#")
  .replace(/\/A#/g, " / F").replace(/\/Bb/g, " / F")      
  
  .replace(/\/D/g, " / A")
  .replace(/\/E/g, " / B")
  .replace(/\/F/g, " / C")
  .replace(/\/G/g, " / D")
  .replace(/\/A/g, " / E")
  .replace(/\/B/g, " / F#")
  .replace(/\/C/g, " / G")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
 /*=====================================================
                    F 
=====================================================*/
fado(v){
  return v
  .replace(/>C#/g, "> G#").replace(/>Db/g, "> Ab")   
  .replace(/>D#/g, "> A#").replace(/>Eb/g, "> Bb")   
  .replace(/>F#/g, "> C#").replace(/>Gb/g, "> Db")
  .replace(/>G#/g, "> Eb").replace(/>Ab/g, "> Eb")
  .replace(/>A#/g, "> F").replace(/>Bb/g, "> F")    

  .replace(/>D/g, "> A")
  .replace(/>E/g, "> B")
  .replace(/>F/g, "> C")
  .replace(/>G/g, "> D")
  .replace(/>A/g, "> E")
  .replace(/>B/g, "> F#")
  .replace(/>C/g, "> G")

  .replace(/\/C#/g, " / G#").replace(/\/Db/g, " / Ab")
  .replace(/\/D#/g, " / A#").replace(/\/Eb/g, " / Bb")
  .replace(/\/F#/g, " / C#").replace(/\/Gb/g, " / Db")
  .replace(/\/G#/g, " / Eb").replace(/\/Ab/g, " / Eb")
  .replace(/\/A#/g, " / F").replace(/\/Bb/g, " / F")      
  
  .replace(/\/D/g, " / A")
  .replace(/\/E/g, " / B")
  .replace(/\/F/g, " / C")
  .replace(/\/G/g, " / D")
  .replace(/\/A/g, " / E")
  .replace(/\/B/g, " / F#")
  .replace(/\/C/g, " / G")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}    
fados(v){
  return v
  .replace(/>C#/g, "> A").replace(/>Db/g, "> A")   
  .replace(/>D#/g, "> B").replace(/>Eb/g, "> B")   
  .replace(/>F#/g, "> D").replace(/>Gb/g, "> D")
  .replace(/>G#/g, "> E").replace(/>Ab/g, "> E")
  .replace(/>A#/g, "> F#").replace(/>Bb/g, "> F#")    

  .replace(/>D/g, "> A#")
  .replace(/>E/g, "> C")
  .replace(/>F/g, "> C#")
  .replace(/>G/g, "> D#")
  .replace(/>A/g, "> F")
  .replace(/>B/g, "> G")
  .replace(/>C/g, "> G#")

  .replace(/\/C#/g, " / A").replace(/\/Db/g, " / A")
  .replace(/\/D#/g, " / B").replace(/\/Eb/g, " / B")
  .replace(/\/F#/g, " / D").replace(/\/Gb/g, " / D")
  .replace(/\/G#/g, " / E").replace(/\/Ab/g, " / E")
  .replace(/\/A#/g, " / F#").replace(/\/Bb/g, " / F#")      
  
  .replace(/\/D/g, " / A#")
  .replace(/\/E/g, " / C")
  .replace(/\/F/g, " / C#")
  .replace(/\/G/g, " / D#")
  .replace(/\/A/g, " / F")
  .replace(/\/B/g, " / G")
  .replace(/\/C/g, " / G#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
fare(v){
  return v
  .replace(/>C#/g, "> A#").replace(/>Db/g, "> A#")   
  .replace(/>D#/g, "> C").replace(/>Eb/g, "> C")   
  .replace(/>F#/g, "> D#").replace(/>Gb/g, "> D#")
  .replace(/>G#/g, "> F").replace(/>Ab/g, "> F")
  .replace(/>A#/g, "> G").replace(/>Bb/g, "> G")    

  .replace(/>D/g, "> B")
  .replace(/>E/g, "> C#")
  .replace(/>F/g, "> D")
  .replace(/>G/g, "> E")
  .replace(/>A/g, "> F#")
  .replace(/>B/g, "> G#")
  .replace(/>C/g, "> A")

  .replace(/\/C#/g, " / A#").replace(/\/Db/g, " / A#")
  .replace(/\/D#/g, " / C").replace(/\/Eb/g, " / C")
  .replace(/\/F#/g, " / D#").replace(/\/Gb/g, " / D#")
  .replace(/\/G#/g, " / F").replace(/\/Ab/g, " / F")
  .replace(/\/A#/g, " / G").replace(/\/Bb/g, " / G")      
  
  .replace(/\/D/g, " / B")
  .replace(/\/E/g, " / C#")
  .replace(/\/F/g, " / D")
  .replace(/\/G/g, " / E")
  .replace(/\/A/g, " / F#")
  .replace(/\/B/g, " / G#")
  .replace(/\/C/g, " / A")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
fares(v){
  return v
  .replace(/>C#/g, "> B").replace(/>Db/g, "> B")   
  .replace(/>D#/g, "> C#").replace(/>Eb/g, "> C#")   
  .replace(/>F#/g, "> E").replace(/>Gb/g, "> E")
  .replace(/>G#/g, "> F#").replace(/>Ab/g, "> F#")
  .replace(/>A#/g, "> G#").replace(/>Bb/g, "> G#")    

  .replace(/>D/g, "> C")
  .replace(/>E/g, "> D")
  .replace(/>F/g, "> D#")
  .replace(/>G/g, "> F")
  .replace(/>A/g, "> G")
  .replace(/>B/g, "> A")
  .replace(/>C/g, "> A#")

  .replace(/\/C#/g, " / B").replace(/\/Db/g, " / B")
  .replace(/\/D#/g, " / C#").replace(/\/Eb/g, " / C#")
  .replace(/\/F#/g, " / E").replace(/\/Gb/g, " / E")
  .replace(/\/G#/g, " / F#").replace(/\/Ab/g, " / F#")
  .replace(/\/A#/g, " / G#").replace(/\/Bb/g, " / G#")      
  
  .replace(/\/D/g, " / C")
  .replace(/\/E/g, " / D")
  .replace(/\/F/g, " / D#")
  .replace(/\/G/g, " / F")
  .replace(/\/A/g, " / G")
  .replace(/\/B/g, " / A")
  .replace(/\/C/g, " / A#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
fami(v){
  return v
  .replace(/>C#/g, "> C").replace(/>Db/g, "> C")   
  .replace(/>D#/g, "> D").replace(/>Eb/g, "> D")   
  .replace(/>F#/g, "> F").replace(/>Gb/g, "> F")
  .replace(/>G#/g, "> G").replace(/>Ab/g, "> G")
  .replace(/>A#/g, "> A").replace(/>Bb/g, "> A")    

  .replace(/>D/g, "> C#")
  .replace(/>E/g, "> D#")
  .replace(/>F/g, "> E")
  .replace(/>G/g, "> F#")
  .replace(/>A/g, "> G#")
  .replace(/>B/g, "> A#")
  .replace(/>C/g, "> B")

  .replace(/\/C#/g, " / C").replace(/\/Db/g, " / C")
  .replace(/\/D#/g, " / D").replace(/\/Eb/g, " / D")
  .replace(/\/F#/g, " / F").replace(/\/Gb/g, " / F")
  .replace(/\/G#/g, " / G").replace(/\/Ab/g, " / G")
  .replace(/\/A#/g, " / A").replace(/\/Bb/g, " / A")      
  
  .replace(/\/D/g, " / C#")
  .replace(/\/E/g, " / D#")
  .replace(/\/F/g, " / E")
  .replace(/\/G/g, " / F#")
  .replace(/\/A/g, " / G#")
  .replace(/\/B/g, " / A#")
  .replace(/\/C/g, " / B")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
fafa(v){
  return v.replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")   
}
fafas(v){
  return v
  .replace(/>C#/g, "> D").replace(/>Db/g, "> D")   
  .replace(/>D#/g, "> E").replace(/>Eb/g, "> E")   
  .replace(/>F#/g, "> G").replace(/>Gb/g, "> G")
  .replace(/>G#/g, "> A").replace(/>Ab/g, "> A")
  .replace(/>A#/g, "> B").replace(/>Bb/g, "> B")    

  .replace(/>D/g, "> D#")
  .replace(/>E/g, "> F")
  .replace(/>F/g, "> F#")
  .replace(/>G/g, "> G#")
  .replace(/>A/g, "> A#")
  .replace(/>B/g, "> C")
  .replace(/>C/g, "> C#")

  .replace(/\/C#/g, " / D").replace(/\/Db/g, " / D")
  .replace(/\/D#/g, " / E").replace(/\/Eb/g, " / E")
  .replace(/\/F#/g, " / G").replace(/\/Gb/g, " / G")
  .replace(/\/G#/g, " / A").replace(/\/Ab/g, " / A")
  .replace(/\/A#/g, " / B").replace(/\/Bb/g, " / B")      
  
  .replace(/\/D/g, " / D#")
  .replace(/\/E/g, " / F")
  .replace(/\/F/g, " / F#")
  .replace(/\/G/g, " / G#")
  .replace(/\/A/g, " / A#")
  .replace(/\/B/g, " / C")
  .replace(/\/C/g, " / C#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
fasol(v){
  return v
  .replace(/>C#/g, "> D#").replace(/>Db/g, "> D#")   
  .replace(/>D#/g, "> F").replace(/>Eb/g, "> F")   
  .replace(/>F#/g, "> G#").replace(/>Gb/g, "> G#")
  .replace(/>G#/g, "> A#").replace(/>Ab/g, "> A#")
  .replace(/>A#/g, "> C").replace(/>Bb/g, "> C")    

  .replace(/>D/g, "> E")
  .replace(/>E/g, "> F#")
  .replace(/>F/g, "> G")
  .replace(/>G/g, "> A")
  .replace(/>A/g, "> B")
  .replace(/>B/g, "> C#")
  .replace(/>C/g, "> D")

  .replace(/\/C#/g, " / D#").replace(/\/Db/g, " / D#")
  .replace(/\/D#/g, " / F").replace(/\/Eb/g, " / F")
  .replace(/\/F#/g, " / G#").replace(/\/Gb/g, " / G#")
  .replace(/\/G#/g, " / A#").replace(/\/Ab/g, " / A#")
  .replace(/\/A#/g, " / C").replace(/\/Bb/g, " / C")      
  
  .replace(/\/D/g, " / E")
  .replace(/\/E/g, " / F#")
  .replace(/\/F/g, " / G")
  .replace(/\/G/g, " / A")
  .replace(/\/A/g, " / B")
  .replace(/\/B/g, " / C#")
  .replace(/\/C/g, " / D")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
fasols(v){
  return v
  .replace(/>C#/g, "> E").replace(/>Db/g, "> E")   
  .replace(/>D#/g, "> F#").replace(/>Eb/g, "> F#")   
  .replace(/>F#/g, "> A").replace(/>Gb/g, "> A")
  .replace(/>G#/g, "> B").replace(/>Ab/g, "> B")
  .replace(/>A#/g, "> C#").replace(/>Bb/g, "> C#")    

  .replace(/>D/g, "> F")
  .replace(/>E/g, "> G")
  .replace(/>F/g, "> G#")
  .replace(/>G/g, "> A#")
  .replace(/>A/g, "> C")
  .replace(/>B/g, "> D")
  .replace(/>C/g, "> D#")

  .replace(/\/C#/g, " / E").replace(/\/Db/g, " / E")
  .replace(/\/D#/g, " / F#").replace(/\/Eb/g, " / F#")
  .replace(/\/F#/g, " / A").replace(/\/Gb/g, " / A")
  .replace(/\/G#/g, " / B").replace(/\/Ab/g, " / B")
  .replace(/\/A#/g, " / C#").replace(/\/Bb/g, " / C#")      
  
  .replace(/\/D/g, " / F")
  .replace(/\/E/g, " / G")
  .replace(/\/F/g, " / G#")
  .replace(/\/G/g, " / A#")
  .replace(/\/A/g, " / C")
  .replace(/\/B/g, " / D")
  .replace(/\/C/g, " / D#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
fala(v){
  return v
  .replace(/>C#/g, "> F").replace(/>Db/g, "> F")   
  .replace(/>D#/g, "> G").replace(/>Eb/g, "> G")   
  .replace(/>F#/g, "> A#").replace(/>Gb/g, "> A#")
  .replace(/>G#/g, "> C").replace(/>Ab/g, "> C")
  .replace(/>A#/g, "> D").replace(/>Bb/g, "> D")    

  .replace(/>D/g, "> F#")
  .replace(/>E/g, "> G#")
  .replace(/>F/g, "> A")
  .replace(/>G/g, "> B")
  .replace(/>A/g, "> C#")
  .replace(/>B/g, "> D#")
  .replace(/>C/g, "> E")

  .replace(/\/C#/g, " / F").replace(/\/Db/g, " / F")
  .replace(/\/D#/g, " / G").replace(/\/Eb/g, " / G")
  .replace(/\/F#/g, " / A#").replace(/\/Gb/g, " / A#")
  .replace(/\/G#/g, " / C").replace(/\/Ab/g, " / C")
  .replace(/\/A#/g, " / D").replace(/\/Bb/g, " / D")      
  
  .replace(/\/D/g, " / F#")
  .replace(/\/E/g, " / G#")
  .replace(/\/F/g, " / A")
  .replace(/\/G/g, " / B")
  .replace(/\/A/g, " / C#")
  .replace(/\/B/g, " / D#")
  .replace(/\/C/g, " / E")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
falas(v){
  return v
  .replace(/>C#/g, "> F#").replace(/>Db/g, "> F#")   
  .replace(/>D#/g, "> G#").replace(/>Eb/g, "> G#")   
  .replace(/>F#/g, "> B").replace(/>Gb/g, "> B")
  .replace(/>G#/g, "> C#").replace(/>Ab/g, "> C#")
  .replace(/>A#/g, "> D#").replace(/>Bb/g, "> D#")    

  .replace(/>D/g, "> G")
  .replace(/>E/g, "> A")
  .replace(/>F/g, "> A#")
  .replace(/>G/g, "> C")
  .replace(/>A/g, "> D")
  .replace(/>B/g, "> E")
  .replace(/>C/g, "> F")

  .replace(/\/C#/g, " / F#").replace(/\/Db/g, " / F#")
  .replace(/\/D#/g, " / G#").replace(/\/Eb/g, " / G#")
  .replace(/\/F#/g, " / B").replace(/\/Gb/g, " / B")
  .replace(/\/G#/g, " / C#").replace(/\/Ab/g, " / C#")
  .replace(/\/A#/g, " / D#").replace(/\/Bb/g, " / D#")      
  
  .replace(/\/D/g, " / G")
  .replace(/\/E/g, " / A")
  .replace(/\/F/g, " / A#")
  .replace(/\/G/g, " / C")
  .replace(/\/A/g, " / D")
  .replace(/\/B/g, " / E")
  .replace(/\/C/g, " / F")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
fasi(v){
  return v
  .replace(/>C#/g, "> G").replace(/>Db/g, "> G")   
  .replace(/>D#/g, "> A").replace(/>Eb/g, "> A")   
  .replace(/>F#/g, "> C").replace(/>Gb/g, "> C")
  .replace(/>G#/g, "> D").replace(/>Ab/g, "> D")
  .replace(/>A#/g, "> E").replace(/>Bb/g, "> E")    

  .replace(/>D/g, "> G#")
  .replace(/>E/g, "> A#")
  .replace(/>F/g, "> B")
  .replace(/>G/g, "> C#")
  .replace(/>A/g, "> D#")
  .replace(/>B/g, "> F")
  .replace(/>C/g, "> F#")

  .replace(/\/C#/g, " / G").replace(/\/Db/g, " / G")
  .replace(/\/D#/g, " / A").replace(/\/Eb/g, " / A")
  .replace(/\/F#/g, " / C").replace(/\/Gb/g, " / C")
  .replace(/\/G#/g, " / D").replace(/\/Ab/g, " / D")
  .replace(/\/A#/g, " / E").replace(/\/Bb/g, " / E")      
  
  .replace(/\/D/g, " / G#")
  .replace(/\/E/g, " / A#")
  .replace(/\/F/g, " / B")
  .replace(/\/G/g, " / C#")
  .replace(/\/A/g, " / D#")
  .replace(/\/B/g, " / F")
  .replace(/\/C/g, " / F#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
 /*=====================================================
                    G
=====================================================*/
soldo(v){
  return v
  .replace(/>C#/g, "> F#").replace(/>Db/g, "> Gb")   
  .replace(/>D#/g, "> G#").replace(/>Eb/g, "> Ab")   
  .replace(/>F#/g, "> B").replace(/>Gb/g, "> B")
  .replace(/>G#/g, "> Db").replace(/>Ab/g, "> Db")
  .replace(/>A#/g, "> Eb").replace(/>Bb/g, "> Eb")    

  .replace(/>D/g, "> G")
  .replace(/>E/g, "> A")
  .replace(/>F/g, "> Bb")
  .replace(/>G/g, "> C")
  .replace(/>A/g, "> D")
  .replace(/>B/g, "> E")
  .replace(/>C/g, "> F")

  .replace(/\/C#/g, " / F#").replace(/\/Db/g, " / F#")
  .replace(/\/D#/g, " / G#").replace(/\/Eb/g, " / G#")
  .replace(/\/F#/g, " / B").replace(/\/Gb/g, " / B")
  .replace(/\/G#/g, " / Db").replace(/\/Ab/g, " / Db")
  .replace(/\/A#/g, " / Eb").replace(/\/Bb/g, " / Eb")      
  
  .replace(/\/D/g, " / G")
  .replace(/\/E/g, " / A")
  .replace(/\/F/g, " / Bb")
  .replace(/\/G/g, " / C")
  .replace(/\/A/g, " / D")
  .replace(/\/B/g, " / E")
  .replace(/\/C/g, " / F")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
soldos(v){
  return v
  .replace(/>C#/g, "> G").replace(/>Db/g, "> G")   
  .replace(/>D#/g, "> A").replace(/>Eb/g, "> A")   
  .replace(/>F#/g, "> C").replace(/>Gb/g, "> C")
  .replace(/>G#/g, "> D").replace(/>Ab/g, "> D")
  .replace(/>A#/g, "> E").replace(/>Bb/g, "> E")    

  .replace(/>D/g, "> G#")
  .replace(/>E/g, "> A#")
  .replace(/>F/g, "> B")
  .replace(/>G/g, "> C#")
  .replace(/>A/g, "> D#")
  .replace(/>B/g, "> F")
  .replace(/>C/g, "> F#")

  .replace(/\/C#/g, " / G").replace(/\/Db/g, " / G")
  .replace(/\/D#/g, " / A").replace(/\/Eb/g, " / A")
  .replace(/\/F#/g, " / C").replace(/\/Gb/g, " / C")
  .replace(/\/G#/g, " / D").replace(/\/Ab/g, " / D")
  .replace(/\/A#/g, " / E").replace(/\/Bb/g, " / E")      
  
  .replace(/\/D/g, " / G#")
  .replace(/\/E/g, " / A#")
  .replace(/\/F/g, " / B")
  .replace(/\/G/g, " / C#")
  .replace(/\/A/g, " / D#")
  .replace(/\/B/g, " / F")
  .replace(/\/C/g, " / F#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
solre(v){
  return v
  .replace(/>C#/g, "> G#").replace(/>Db/g, "> G#")   
  .replace(/>D#/g, "> A#").replace(/>Eb/g, "> A#")   
  .replace(/>F#/g, "> C#").replace(/>Gb/g, "> C#")
  .replace(/>G#/g, "> D#").replace(/>Ab/g, "> D#")
  .replace(/>A#/g, "> F").replace(/>Bb/g, "> F")    

  .replace(/>D/g, "> A")
  .replace(/>E/g, "> B")
  .replace(/>F/g, "> C")
  .replace(/>G/g, "> D")
  .replace(/>A/g, "> E")
  .replace(/>B/g, "> F#")
  .replace(/>C/g, "> G")

  .replace(/\/C#/g, " / G#").replace(/\/Db/g, " / G#")
  .replace(/\/D#/g, " / A#").replace(/\/Eb/g, " / A#")
  .replace(/\/F#/g, " / C#").replace(/\/Gb/g, " / C#")
  .replace(/\/G#/g, " / D#").replace(/\/Ab/g, " / D#")
  .replace(/\/A#/g, " / F").replace(/\/Bb/g, " / F")      
  
  .replace(/\/D/g, " / A")
  .replace(/\/E/g, " / B")
  .replace(/\/F/g, " / C")
  .replace(/\/G/g, " / D")
  .replace(/\/A/g, " / E")
  .replace(/\/B/g, " / F#")
  .replace(/\/C/g, " / G")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
solres(v){
  return v
  .replace(/>C#/g, "> A").replace(/>Db/g, "> A")   
  .replace(/>D#/g, "> B").replace(/>Eb/g, "> B")   
  .replace(/>F#/g, "> D").replace(/>Gb/g, "> D")
  .replace(/>G#/g, "> E").replace(/>Ab/g, "> E")
  .replace(/>A#/g, "> F#").replace(/>Bb/g, "> F#")    

  .replace(/>D/g, "> A#")
  .replace(/>E/g, "> C")
  .replace(/>F/g, "> C#")
  .replace(/>G/g, "> D#")
  .replace(/>A/g, "> F")
  .replace(/>B/g, "> G")
  .replace(/>C/g, "> G#")

  .replace(/\/C#/g, " / A").replace(/\/Db/g, " / A")
  .replace(/\/D#/g, " / B").replace(/\/Eb/g, " / B")
  .replace(/\/F#/g, " / D").replace(/\/Gb/g, " / D")
  .replace(/\/G#/g, " / E").replace(/\/Ab/g, " / E")
  .replace(/\/A#/g, " / F#").replace(/\/Bb/g, " / F#")      
  
  .replace(/\/D/g, " / A#")
  .replace(/\/E/g, " / C")
  .replace(/\/F/g, " / C#")
  .replace(/\/G/g, " / D#")
  .replace(/\/A/g, " / F")
  .replace(/\/B/g, " / G")
  .replace(/\/C/g, " / G#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
solmi(v){
  return v
  .replace(/>C#/g, "> A#").replace(/>Db/g, "> A#")   
  .replace(/>D#/g, "> C").replace(/>Eb/g, "> C")   
  .replace(/>F#/g, "> D#").replace(/>Gb/g, "> D#")
  .replace(/>G#/g, "> F").replace(/>Ab/g, "> F")
  .replace(/>A#/g, "> G").replace(/>Bb/g, "> G")    

  .replace(/>D/g, "> B")
  .replace(/>E/g, "> C#")
  .replace(/>F/g, "> D")
  .replace(/>G/g, "> E")
  .replace(/>A/g, "> F#")
  .replace(/>B/g, "> G#")
  .replace(/>C/g, "> A")

  .replace(/\/C#/g, " / A#").replace(/\/Db/g, " / A#")
  .replace(/\/D#/g, " / C").replace(/\/Eb/g, " / C")
  .replace(/\/F#/g, " / D#").replace(/\/Gb/g, " / D#")
  .replace(/\/G#/g, " / F").replace(/\/Ab/g, " / F")
  .replace(/\/A#/g, " / G").replace(/\/Bb/g, " / G")      
  
  .replace(/\/D/g, " / B")
  .replace(/\/E/g, " / C#")
  .replace(/\/F/g, " / D")
  .replace(/\/G/g, " / E")
  .replace(/\/A/g, " / F#")
  .replace(/\/B/g, " / G#")
  .replace(/\/C/g, " / A")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
solfa(v){
  return v
  .replace(/>C#/g, "> B").replace(/>Db/g, "> B")   
  .replace(/>D#/g, "> C#").replace(/>Eb/g, "> C#")   
  .replace(/>F#/g, "> E").replace(/>Gb/g, "> E")
  .replace(/>G#/g, "> F#").replace(/>Ab/g, "> F#")
  .replace(/>A#/g, "> G#").replace(/>Bb/g, "> G#")    

  .replace(/>D/g, "> C")
  .replace(/>E/g, "> D")
  .replace(/>F/g, "> D#")
  .replace(/>G/g, "> F")
  .replace(/>A/g, "> G")
  .replace(/>B/g, "> A")
  .replace(/>C/g, "> A#")

  .replace(/\/C#/g, " / B").replace(/\/Db/g, " / B")
  .replace(/\/D#/g, " / C#").replace(/\/Eb/g, " / C#")
  .replace(/\/F#/g, " / E").replace(/\/Gb/g, " / E")
  .replace(/\/G#/g, " / F#").replace(/\/Ab/g, " / F#")
  .replace(/\/A#/g, " / G#").replace(/\/Bb/g, " / G#")      
  
  .replace(/\/D/g, " / C")
  .replace(/\/E/g, " / D")
  .replace(/\/F/g, " / D#")
  .replace(/\/G/g, " / F")
  .replace(/\/A/g, " / G")
  .replace(/\/B/g, " / A")
  .replace(/\/C/g, " / A#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
solfas(v){
  return v
  .replace(/>C#/g, "> C").replace(/>Db/g, "> C")   
  .replace(/>D#/g, "> D").replace(/>Eb/g, "> D")   
  .replace(/>F#/g, "> F").replace(/>Gb/g, "> F")
  .replace(/>G#/g, "> G").replace(/>Ab/g, "> G")
  .replace(/>A#/g, "> A").replace(/>Bb/g, "> A")    

  .replace(/>D/g, "> C#")
  .replace(/>E/g, "> D#")
  .replace(/>F/g, "> E")
  .replace(/>G/g, "> F#")
  .replace(/>A/g, "> G#")
  .replace(/>B/g, "> A#")
  .replace(/>C/g, "> B")

  .replace(/\/C#/g, " / C").replace(/\/Db/g, " / C")
  .replace(/\/D#/g, " / D").replace(/\/Eb/g, " / D")
  .replace(/\/F#/g, " / F").replace(/\/Gb/g, " / F")
  .replace(/\/G#/g, " / G").replace(/\/Ab/g, " / G")
  .replace(/\/A#/g, " / A").replace(/\/Bb/g, " / A")      
  
  .replace(/\/D/g, " / C#")
  .replace(/\/E/g, " / D#")
  .replace(/\/F/g, " / E")
  .replace(/\/G/g, " / F#")
  .replace(/\/A/g, " / G#")
  .replace(/\/B/g, " / A#")
  .replace(/\/C/g, " / B")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
solsol(v){
  return v 
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  
}
solsols(v){
  return v
  .replace(/>C#/g, "> D").replace(/>Db/g, "> D")   
  .replace(/>D#/g, "> E").replace(/>Eb/g, "> E")   
  .replace(/>F#/g, "> G").replace(/>Gb/g, "> G")
  .replace(/>G#/g, "> A").replace(/>Ab/g, "> A")
  .replace(/>A#/g, "> B").replace(/>Bb/g, "> B")    

  .replace(/>D/g, "> D#")
  .replace(/>E/g, "> F")
  .replace(/>F/g, "> F#")
  .replace(/>G/g, "> G#")
  .replace(/>A/g, "> A#")
  .replace(/>B/g, "> C")
  .replace(/>C/g, "> C#")

  .replace(/\/C#/g, " / D").replace(/\/Db/g, " / D")
  .replace(/\/D#/g, " / E").replace(/\/Eb/g, " / E")
  .replace(/\/F#/g, " / G").replace(/\/Gb/g, " / G")
  .replace(/\/G#/g, " / A").replace(/\/Ab/g, " / A")
  .replace(/\/A#/g, " / B").replace(/\/Bb/g, " / B")      
  
  .replace(/\/D/g, " / D#")
  .replace(/\/E/g, " / E")
  .replace(/\/F/g, " / F#")
  .replace(/\/G/g, " / G#")
  .replace(/\/A/g, " / A#")
  .replace(/\/B/g, " / C")
  .replace(/\/C/g, " / C#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
solla(v){
  return v
  .replace(/>C#/g, "> D#").replace(/>Db/g, "> D#")   
  .replace(/>D#/g, "> F").replace(/>Eb/g, "> F")   
  .replace(/>F#/g, "> G#").replace(/>Gb/g, "> G#")
  .replace(/>G#/g, "> A#").replace(/>Ab/g, "> A#")
  .replace(/>A#/g, "> C").replace(/>Bb/g, "> C")    

  .replace(/>D/g, "> E")
  .replace(/>E/g, "> F#")
  .replace(/>F/g, "> G")
  .replace(/>G/g, "> A")
  .replace(/>A/g, "> B")
  .replace(/>B/g, "> C#")
  .replace(/>C/g, "> D")

  .replace(/\/C#/g, " / D#").replace(/\/Db/g, " / D#")
  .replace(/\/D#/g, " / F").replace(/\/Eb/g, " / F")
  .replace(/\/F#/g, " / G#").replace(/\/Gb/g, " / G#")
  .replace(/\/G#/g, " / A#").replace(/\/Ab/g, " / A#")
  .replace(/\/A#/g, " / C").replace(/\/Bb/g, " / C")      
  
  .replace(/\/D/g, " / E")
  .replace(/\/E/g, " / F#")
  .replace(/\/F/g, " / G")
  .replace(/\/G/g, " / A")
  .replace(/\/A/g, " / B")
  .replace(/\/B/g, " / C#")
  .replace(/\/C/g, " / D")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
sollas(v){
  return v
  .replace(/>C#/g, "> E").replace(/>Db/g, "> E")   
  .replace(/>D#/g, "> F#").replace(/>Eb/g, "> F#")   
  .replace(/>F#/g, "> A").replace(/>Gb/g, "> A")
  .replace(/>G#/g, "> B").replace(/>Ab/g, "> B")
  .replace(/>A#/g, "> C#").replace(/>Bb/g, "> C#")    

  .replace(/>D/g, "> F")
  .replace(/>E/g, "> G")
  .replace(/>F/g, "> G#")
  .replace(/>G/g, "> A#")
  .replace(/>A/g, "> C")
  .replace(/>B/g, "> D")
  .replace(/>C/g, "> D#")

  .replace(/\/C#/g, " / E").replace(/\/Db/g, " / E")
  .replace(/\/D#/g, " / F#").replace(/\/Eb/g, " / F#")
  .replace(/\/F#/g, " / A").replace(/\/Gb/g, " / A")
  .replace(/\/G#/g, " / B").replace(/\/Ab/g, " / B")
  .replace(/\/A#/g, " / C#").replace(/\/Bb/g, " / C#")      
  
  .replace(/\/D/g, " / F")
  .replace(/\/E/g, " / G")
  .replace(/\/F/g, " / G#")
  .replace(/\/G/g, " / A#")
  .replace(/\/A/g, " / C")
  .replace(/\/B/g, " / D")
  .replace(/\/C/g, " / D#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
solsi(v){
  return v
  .replace(/>C#/g, "> F").replace(/>Db/g, "> F")   
  .replace(/>D#/g, "> G").replace(/>Eb/g, "> G")   
  .replace(/>F#/g, "> A#").replace(/>Gb/g, "> A#")
  .replace(/>G#/g, "> C").replace(/>Ab/g, "> C")
  .replace(/>A#/g, "> D").replace(/>Bb/g, "> D")    

  .replace(/>D/g, "> F#")
  .replace(/>E/g, "> G#")
  .replace(/>F/g, "> A")
  .replace(/>G/g, "> B")
  .replace(/>A/g, "> C#")
  .replace(/>B/g, "> D#")
  .replace(/>C/g, "> E")

  .replace(/\/C#/g, " / F").replace(/\/Db/g, " / F")
  .replace(/\/D#/g, " / G").replace(/\/Eb/g, " / G")
  .replace(/\/F#/g, " / A#").replace(/\/Gb/g, " / A#")
  .replace(/\/G#/g, " / C").replace(/\/Ab/g, " / C")
  .replace(/\/A#/g, " / D").replace(/\/Bb/g, " / D")      
  
  .replace(/\/D/g, " / F#")
  .replace(/\/E/g, " / G#")
  .replace(/\/F/g, " / A")
  .replace(/\/G/g, " / B")
  .replace(/\/A/g, " / C#")
  .replace(/\/B/g, " / D#")
  .replace(/\/C/g, " / E")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
/*=====================================================
                    A
=====================================================*/
lado(v){
  return v
  .replace(/>C#/g, "> E").replace(/>Db/g, "> E")   
  .replace(/>D#/g, "> F#").replace(/>Eb/g, "> F#")   
  .replace(/>F#/g, "> A").replace(/>Gb/g, "> A")
  .replace(/>G#/g, "> B").replace(/>Ab/g, "> B")
  .replace(/>A#/g, "> C#").replace(/>Bb/g, "> C#")    

  .replace(/>D/g, "> F")
  .replace(/>E/g, "> G")
  .replace(/>F/g, "> Ab")
  .replace(/>G/g, "> Bb")
  .replace(/>A/g, "> C")
  .replace(/>B/g, "> D")
  .replace(/>C/g, "> Eb")

  .replace(/\/C#/g, " / E").replace(/\/Db/g, " / E")
  .replace(/\/D#/g, " / F#").replace(/\/Eb/g, " / F#")
  .replace(/\/F#/g, " / A").replace(/\/Gb/g, " / A")
  .replace(/\/G#/g, " / B").replace(/\/Ab/g, " / B")
  .replace(/\/A#/g, " / C#").replace(/\/Bb/g, " / C#")      
  
  .replace(/\/D/g, " / F")
  .replace(/\/E/g, " / G")
  .replace(/\/F/g, " / Ab")
  .replace(/\/G/g, " / Bb")
  .replace(/\/A/g, " / C")
  .replace(/\/B/g, " / D")
  .replace(/\/C/g, " / Eb")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
lados(v){
  return v
  .replace(/>C#/g, "> F").replace(/>Db/g, "> F")   
  .replace(/>D#/g, "> G").replace(/>Eb/g, "> G")   
  .replace(/>F#/g, "> A#").replace(/>Gb/g, "> A#")
  .replace(/>G#/g, "> C").replace(/>Ab/g, "> C")
  .replace(/>A#/g, "> D").replace(/>Bb/g, "> D")    

  .replace(/>D/g, "> F#")
  .replace(/>E/g, "> G#")
  .replace(/>F/g, "> A")
  .replace(/>G/g, "> B")
  .replace(/>A/g, "> C#")
  .replace(/>B/g, "> D#")
  .replace(/>C/g, "> E")

  .replace(/\/C#/g, " / F").replace(/\/Db/g, " / F")
  .replace(/\/D#/g, " / G").replace(/\/Eb/g, " / G")
  .replace(/\/F#/g, " / A#").replace(/\/Gb/g, " / A#")
  .replace(/\/G#/g, " / C").replace(/\/Ab/g, " / C")
  .replace(/\/A#/g, " / D").replace(/\/Bb/g, " / D")      
  
  .replace(/\/D/g, " / F#")
  .replace(/\/E/g, " / G#")
  .replace(/\/F/g, " / A")
  .replace(/\/G/g, " / B")
  .replace(/\/A/g, " / C#")
  .replace(/\/B/g, " / D#")
  .replace(/\/C/g, " / E")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
lare(v){
  return v
  .replace(/>C#/g, "> F#").replace(/>Db/g, "> F#")   
  .replace(/>D#/g, "> G#").replace(/>Eb/g, "> G#")   
  .replace(/>F#/g, "> B").replace(/>Gb/g, "> B")
  .replace(/>G#/g, "> C#").replace(/>Ab/g, "> C#")
  .replace(/>A#/g, "> D#").replace(/>Bb/g, "> D#")    

  .replace(/>D/g, "> G")
  .replace(/>E/g, "> A")
  .replace(/>F/g, "> A#")
  .replace(/>G/g, "> C")
  .replace(/>A/g, "> D")
  .replace(/>B/g, "> E")
  .replace(/>C/g, "> F")

  .replace(/\/C#/g, " / F#").replace(/\/Db/g, " / F#")
  .replace(/\/D#/g, " / G#").replace(/\/Eb/g, " / G#")
  .replace(/\/F#/g, " / B").replace(/\/Gb/g, " / B")
  .replace(/\/G#/g, " / C#").replace(/\/Ab/g, " / C#")
  .replace(/\/A#/g, " / D#").replace(/\/Bb/g, " / D#")      
  
  .replace(/\/D/g, " / G")
  .replace(/\/E/g, " / A")
  .replace(/\/F/g, " / A#")
  .replace(/\/G/g, " / C")
  .replace(/\/A/g, " / D")
  .replace(/\/B/g, " / E")
  .replace(/\/C/g, " / F")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
lares(v){
  return v
  .replace(/>C#/g, "> G").replace(/>Db/g, "> G")   
  .replace(/>D#/g, "> A").replace(/>Eb/g, "> A")   
  .replace(/>F#/g, "> C").replace(/>Gb/g, "> C")
  .replace(/>G#/g, "> D").replace(/>Ab/g, "> D")
  .replace(/>A#/g, "> E").replace(/>Bb/g, "> E")    

  .replace(/>D/g, "> G#")
  .replace(/>E/g, "> A#")
  .replace(/>F/g, "> B")
  .replace(/>G/g, "> C#")
  .replace(/>A/g, "> D#")
  .replace(/>B/g, "> F")
  .replace(/>C/g, "> F#")

  .replace(/\/C#/g, " / G").replace(/\/Db/g, " / G")
  .replace(/\/D#/g, " / A").replace(/\/Eb/g, " / A")
  .replace(/\/F#/g, " / C").replace(/\/Gb/g, " / C")
  .replace(/\/G#/g, " / D").replace(/\/Ab/g, " / D")
  .replace(/\/A#/g, " / E").replace(/\/Bb/g, " / E")      
  
  .replace(/\/D/g, " / G#")
  .replace(/\/E/g, " / A#")
  .replace(/\/F/g, " / B")
  .replace(/\/G/g, " / C#")
  .replace(/\/A/g, " / D#")
  .replace(/\/B/g, " / F")
  .replace(/\/C/g, " / F#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
lami(v){
  return v
  .replace(/>C#/g, "> G#").replace(/>Db/g, "> G#")   
  .replace(/>D#/g, "> A#").replace(/>Eb/g, "> A#")   
  .replace(/>F#/g, "> C#").replace(/>Gb/g, "> C#")
  .replace(/>G#/g, "> D#").replace(/>Ab/g, "> D#")
  .replace(/>A#/g, "> F").replace(/>Bb/g, "> F")    

  .replace(/>D/g, "> A")
  .replace(/>E/g, "> B")
  .replace(/>F/g, "> C")
  .replace(/>G/g, "> D")
  .replace(/>A/g, "> E")
  .replace(/>B/g, "> F#")
  .replace(/>C/g, "> G")

  .replace(/\/C#/g, " / G#").replace(/\/Db/g, " / G#")
  .replace(/\/D#/g, " / A#").replace(/\/Eb/g, " / A#")
  .replace(/\/F#/g, " / C#").replace(/\/Gb/g, " / C#")
  .replace(/\/G#/g, " / D#").replace(/\/Ab/g, " / D#")
  .replace(/\/A#/g, " / F").replace(/\/Bb/g, " / F")      
  
  .replace(/\/D/g, " / A")
  .replace(/\/E/g, " / B")
  .replace(/\/F/g, " / C")
  .replace(/\/G/g, " / D")
  .replace(/\/A/g, " / E")
  .replace(/\/B/g, " / F#")
  .replace(/\/C/g, " / G")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
lafa(v){
  return v
  .replace(/>C#/g, "> A").replace(/>Db/g, "> A")   
  .replace(/>D#/g, "> B").replace(/>Eb/g, "> B")   
  .replace(/>F#/g, "> D").replace(/>Gb/g, "> D")
  .replace(/>G#/g, "> E").replace(/>Ab/g, "> E")
  .replace(/>A#/g, "> F#").replace(/>Bb/g, "> F#")    

  .replace(/>D/g, "> A#")
  .replace(/>E/g, "> C")
  .replace(/>F/g, "> C#")
  .replace(/>G/g, "> D#")
  .replace(/>A/g, "> F")
  .replace(/>B/g, "> G")
  .replace(/>C/g, "> G#")

  .replace(/\/C#/g, " / A").replace(/\/Db/g, " / A")
  .replace(/\/D#/g, " / B").replace(/\/Eb/g, " / B")
  .replace(/\/F#/g, " / D").replace(/\/Gb/g, " / D")
  .replace(/\/G#/g, " / E").replace(/\/Ab/g, " / E")
  .replace(/\/A#/g, " / F#").replace(/\/Bb/g, " / F#")      
  
  .replace(/\/D/g, " / A#")
  .replace(/\/E/g, " / C")
  .replace(/\/F/g, " / C#")
  .replace(/\/G/g, " / D#")
  .replace(/\/A/g, " / F")
  .replace(/\/B/g, " / G")
  .replace(/\/C/g, " / G#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
lafas(v){
  return v
  .replace(/>C#/g, "> A#").replace(/>Db/g, "> A#")   
  .replace(/>D#/g, "> C").replace(/>Eb/g, "> C")   
  .replace(/>F#/g, "> D#").replace(/>Gb/g, "> D#")
  .replace(/>G#/g, "> F").replace(/>Ab/g, "> F")
  .replace(/>A#/g, "> G").replace(/>Bb/g, "> G")    

  .replace(/>D/g, "> B")
  .replace(/>E/g, "> C#")
  .replace(/>F/g, "> D")
  .replace(/>G/g, "> E")
  .replace(/>A/g, "> F#")
  .replace(/>B/g, "> G#")
  .replace(/>C/g, "> A")

  .replace(/\/C#/g, " / A#").replace(/\/Db/g, " / A#")
  .replace(/\/D#/g, " / C").replace(/\/Eb/g, " / C")
  .replace(/\/F#/g, " / D#").replace(/\/Gb/g, " / D#")
  .replace(/\/G#/g, " / F").replace(/\/Ab/g, " / F")
  .replace(/\/A#/g, " / G").replace(/\/Bb/g, " / G")      
  
  .replace(/\/D/g, " / B")
  .replace(/\/E/g, " / C#")
  .replace(/\/F/g, " / D")
  .replace(/\/G/g, " / E")
  .replace(/\/A/g, " / F#")
  .replace(/\/B/g, " / G#")
  .replace(/\/C/g, " / A")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
lasol(v){
  return v
  .replace(/>C#/g, "> B").replace(/>Db/g, "> B")   
  .replace(/>D#/g, "> C#").replace(/>Eb/g, "> C#")   
  .replace(/>F#/g, "> E").replace(/>Gb/g, "> E")
  .replace(/>G#/g, "> F#").replace(/>Ab/g, "> F#")
  .replace(/>A#/g, "> G#").replace(/>Bb/g, "> G#")    

  .replace(/>D/g, "> C")
  .replace(/>E/g, "> D")
  .replace(/>F/g, "> D#")
  .replace(/>G/g, "> F")
  .replace(/>A/g, "> G")
  .replace(/>B/g, "> A")
  .replace(/>C/g, "> A#")

  .replace(/\/C#/g, " / B").replace(/\/Db/g, " / B")
  .replace(/\/D#/g, " / C#").replace(/\/Eb/g, " / C#")
  .replace(/\/F#/g, " / E").replace(/\/Gb/g, " / E")
  .replace(/\/G#/g, " / F#").replace(/\/Ab/g, " / F#")
  .replace(/\/A#/g, " / G#").replace(/\/Bb/g, " / G#")      
  
  .replace(/\/D/g, " / C")
  .replace(/\/E/g, " / D")
  .replace(/\/F/g, " / D#")
  .replace(/\/G/g, " / F")
  .replace(/\/A/g, " / G")
  .replace(/\/B/g, " / A")
  .replace(/\/C/g, " / A#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
lasols(v){
  return v
  .replace(/>C#/g, "> C").replace(/>Db/g, "> C")   
  .replace(/>D#/g, "> D").replace(/>Eb/g, "> D")   
  .replace(/>F#/g, "> F").replace(/>Gb/g, "> F")
  .replace(/>G#/g, "> G").replace(/>Ab/g, "> G")
  .replace(/>A#/g, "> A").replace(/>Bb/g, "> A")    

  .replace(/>D/g, "> C#")
  .replace(/>E/g, "> D#")
  .replace(/>F/g, "> E")
  .replace(/>G/g, "> F#")
  .replace(/>A/g, "> G#")
  .replace(/>B/g, "> A#")
  .replace(/>C/g, "> B")

  .replace(/\/C#/g, " / C").replace(/\/Db/g, " / C")
  .replace(/\/D#/g, " / D").replace(/\/Eb/g, " / D")
  .replace(/\/F#/g, " / F").replace(/\/Gb/g, " / F")
  .replace(/\/G#/g, " / G").replace(/\/Ab/g, " / G")
  .replace(/\/A#/g, " / A").replace(/\/Bb/g, " / A")      
  
  .replace(/\/D/g, " / C#")
  .replace(/\/E/g, " / D#")
  .replace(/\/F/g, " / E")
  .replace(/\/G/g, " / F#")
  .replace(/\/A/g, " / G#")
  .replace(/\/B/g, " / A#")
  .replace(/\/C/g, " / B")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
lala(v){
 return v.replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
 
}
lalas(v){
  return v
  .replace(/>C#/g, "> D").replace(/>Db/g, "> D")   
  .replace(/>D#/g, "> E").replace(/>Eb/g, "> E")   
  .replace(/>F#/g, "> G").replace(/>Gb/g, "> G")
  .replace(/>G#/g, "> A").replace(/>Ab/g, "> A")
  .replace(/>A#/g, "> B").replace(/>Bb/g, "> B")    

  .replace(/>D/g, "> D#")
  .replace(/>E/g, "> F")
  .replace(/>F/g, "> F#")
  .replace(/>G/g, "> G#")
  .replace(/>A/g, "> A#")
  .replace(/>B/g, "> C")
  .replace(/>C/g, "> C#")

  .replace(/\/C#/g, " / D").replace(/\/Db/g, " / D")
  .replace(/\/D#/g, " / E").replace(/\/Eb/g, " / E")
  .replace(/\/F#/g, " / G").replace(/\/Gb/g, " / G")
  .replace(/\/G#/g, " / A").replace(/\/Ab/g, " / A")
  .replace(/\/A#/g, " / B").replace(/\/Bb/g, " / B")      
  
  .replace(/\/D/g, " / D#")
  .replace(/\/E/g, " / F")
  .replace(/\/F/g, " / F#")
  .replace(/\/G/g, " / G#")
  .replace(/\/A/g, " / A#")
  .replace(/\/B/g, " / C")
  .replace(/\/C/g, " / C#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
lasi(v){
  return v
  .replace(/>C#/g, "> D#").replace(/>Db/g, "> D#")   
  .replace(/>D#/g, "> F").replace(/>Eb/g, "> F")   
  .replace(/>F#/g, "> G#").replace(/>Gb/g, "> G#")
  .replace(/>G#/g, "> A#").replace(/>Ab/g, "> A#")
  .replace(/>A#/g, "> C").replace(/>Bb/g, "> C")    

  .replace(/>D/g, "> E")
  .replace(/>E/g, "> F#")
  .replace(/>F/g, "> G")
  .replace(/>G/g, "> A")
  .replace(/>A/g, "> B")
  .replace(/>B/g, "> C#")
  .replace(/>C/g, "> D")

  .replace(/\/C#/g, " / D#").replace(/\/Db/g, " / D#")
  .replace(/\/D#/g, " / F").replace(/\/Eb/g, " / F")
  .replace(/\/F#/g, " / G#").replace(/\/Gb/g, " / G#")
  .replace(/\/G#/g, " / A#").replace(/\/Ab/g, " / A#")
  .replace(/\/A#/g, " / C").replace(/\/Bb/g, " / C")      
  
  .replace(/\/D/g, " / E")
  .replace(/\/E/g, " / F#")
  .replace(/\/F/g, " / G")
  .replace(/\/G/g, " / A")
  .replace(/\/A/g, " / B")
  .replace(/\/B/g, " / C#")
  .replace(/\/C/g, " / D")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
/*=====================================================
                    B
=====================================================*/
sido(v){
  return v
  .replace(/>C#/g, "> D").replace(/>Db/g, "> D")   
  .replace(/>D#/g, "> E").replace(/>Eb/g, "> E")   
  .replace(/>F#/g, "> G").replace(/>Gb/g, "> G")
  .replace(/>G#/g, "> A").replace(/>Ab/g, "> A")
  .replace(/>A#/g, "> B").replace(/>Bb/g, "> B")    

  .replace(/>D/g, "> Eb")
  .replace(/>E/g, "> F")
  .replace(/>F/g, "> F#")
  .replace(/>G/g, "> G#")
  .replace(/>A/g, "> A#")
  .replace(/>B/g, "> C")
  .replace(/>C/g, "> C#")

  .replace(/\/C#/g, " / D").replace(/\/Db/g, " / D")
  .replace(/\/D#/g, " / E").replace(/\/Eb/g, " / E")
  .replace(/\/F#/g, " / G").replace(/\/Gb/g, " / G")
  .replace(/\/G#/g, " / A").replace(/\/Ab/g, " / A")
  .replace(/\/A#/g, " / B").replace(/\/Bb/g, " / B")      
  
  .replace(/\/D/g, " / Eb")
  .replace(/\/E/g, " / F")
  .replace(/\/F/g, " / F#")
  .replace(/\/G/g, " / G#")
  .replace(/\/A/g, " / A#")
  .replace(/\/B/g, " / C")
  .replace(/\/C/g, " / C#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
sidos(v){
  return v
  .replace(/>C#/g, "> D#").replace(/>Db/g, "> D#")   
  .replace(/>D#/g, "> F").replace(/>Eb/g, "> F")   
  .replace(/>F#/g, "> G#").replace(/>Gb/g, "> G#")
  .replace(/>G#/g, "> A#").replace(/>Ab/g, "> A#")
  .replace(/>A#/g, "> C").replace(/>Bb/g, "> C")    

  .replace(/>D/g, "> E")
  .replace(/>E/g, "> F#")
  .replace(/>F/g, "> G")
  .replace(/>G/g, "> A")
  .replace(/>A/g, "> B")
  .replace(/>B/g, "> C#")
  .replace(/>C/g, "> D")

  .replace(/\/C#/g, " / D#").replace(/\/Db/g, " / D#")
  .replace(/\/D#/g, " / F").replace(/\/Eb/g, " / F")
  .replace(/\/F#/g, " / G#").replace(/\/Gb/g, " / G#")
  .replace(/\/G#/g, " / A#").replace(/\/Ab/g, " / A#")
  .replace(/\/A#/g, " / C").replace(/\/Bb/g, " / C")      
  
  .replace(/\/D/g, " / E")
  .replace(/\/E/g, " / F#")
  .replace(/\/F/g, " / G")
  .replace(/\/G/g, " / A")
  .replace(/\/A/g, " / B")
  .replace(/\/B/g, " / C#")
  .replace(/\/C/g, " / D")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
sire(v){
  return v
  .replace(/>C#/g, "> E").replace(/>Db/g, "> E")   
  .replace(/>D#/g, "> F#").replace(/>Eb/g, "> F#")   
  .replace(/>F#/g, "> A").replace(/>Gb/g, "> A")
  .replace(/>G#/g, "> B").replace(/>Ab/g, "> B")
  .replace(/>A#/g, "> C#").replace(/>Bb/g, "> C#")    

  .replace(/>D/g, "> F")
  .replace(/>E/g, "> G")
  .replace(/>F/g, "> G#")
  .replace(/>G/g, "> A#")
  .replace(/>A/g, "> C")
  .replace(/>B/g, "> D")
  .replace(/>C/g, "> D#")

  .replace(/\/C#/g, " / E").replace(/\/Db/g, " / E")
  .replace(/\/D#/g, " / F#").replace(/\/Eb/g, " / F#")
  .replace(/\/F#/g, " / A").replace(/\/Gb/g, " / A")
  .replace(/\/G#/g, " / B").replace(/\/Ab/g, " / B")
  .replace(/\/A#/g, " / C#").replace(/\/Bb/g, " / C#")      
  
  .replace(/\/D/g, " / F")
  .replace(/\/E/g, " / G")
  .replace(/\/F/g, " / G#")
  .replace(/\/G/g, " / A#")
  .replace(/\/A/g, " / C")
  .replace(/\/B/g, " / D")
  .replace(/\/C/g, " / D#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
sires(v){
  return v
  .replace(/>C#/g, "> F").replace(/>Db/g, "> F")   
  .replace(/>D#/g, "> G").replace(/>Eb/g, "> G")   
  .replace(/>F#/g, "> A#").replace(/>Gb/g, "> A#")
  .replace(/>G#/g, "> C").replace(/>Ab/g, "> C")
  .replace(/>A#/g, "> D").replace(/>Bb/g, "> D")    

  .replace(/>D/g, "> F#")
  .replace(/>E/g, "> G#")
  .replace(/>F/g, "> A")
  .replace(/>G/g, "> B")
  .replace(/>A/g, "> C#")
  .replace(/>B/g, "> D#")
  .replace(/>C/g, "> E")

  .replace(/\/C#/g, " / F").replace(/\/Db/g, " / F")
  .replace(/\/D#/g, " / G").replace(/\/Eb/g, " / G")
  .replace(/\/F#/g, " / A#").replace(/\/Gb/g, " / A#")
  .replace(/\/G#/g, " / C").replace(/\/Ab/g, " / C")
  .replace(/\/A#/g, " / D").replace(/\/Bb/g, " / D")      
  
  .replace(/\/D/g, " / F#")
  .replace(/\/E/g, " / G#")
  .replace(/\/F/g, " / A")
  .replace(/\/G/g, " / B")
  .replace(/\/A/g, " / C#")
  .replace(/\/B/g, " / D#")
  .replace(/\/C/g, " / E")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
simi(v){
  return v
  .replace(/>C#/g, "> F#").replace(/>Db/g, "> F#")   
  .replace(/>D#/g, "> G#").replace(/>Eb/g, "> G#")   
  .replace(/>F#/g, "> B").replace(/>Gb/g, "> B")
  .replace(/>G#/g, "> C#").replace(/>Ab/g, "> C#")
  .replace(/>A#/g, "> D#").replace(/>Bb/g, "> D#")    

  .replace(/>D/g, "> G")
  .replace(/>E/g, "> A")
  .replace(/>F/g, "> A#")
  .replace(/>G/g, "> C")
  .replace(/>A/g, "> D")
  .replace(/>B/g, "> E")
  .replace(/>C/g, "> F")

  .replace(/\/C#/g, " / F#").replace(/\/Db/g, " / F#")
  .replace(/\/D#/g, " / G#").replace(/\/Eb/g, " / G#")
  .replace(/\/F#/g, " / B").replace(/\/Gb/g, " / B")
  .replace(/\/G#/g, " / C#").replace(/\/Ab/g, " / C#")
  .replace(/\/A#/g, " / D#").replace(/\/Bb/g, " / D#")      
  
  .replace(/\/D/g, " / G")
  .replace(/\/E/g, " / A")
  .replace(/\/F/g, " / A#")
  .replace(/\/G/g, " / C")
  .replace(/\/A/g, " / D")
  .replace(/\/B/g, " / E")
  .replace(/\/C/g, " / F")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
sifa(v){
  return v
  .replace(/>C#/g, "> G").replace(/>Db/g, "> G")   
  .replace(/>D#/g, "> A").replace(/>Eb/g, "> A")   
  .replace(/>F#/g, "> C").replace(/>Gb/g, "> C")
  .replace(/>G#/g, "> D").replace(/>Ab/g, "> D")
  .replace(/>A#/g, "> E").replace(/>Bb/g, "> E")    

  .replace(/>D/g, "> G#")
  .replace(/>E/g, "> A#")
  .replace(/>F/g, "> B")
  .replace(/>G/g, "> C#")
  .replace(/>A/g, "> D#")
  .replace(/>B/g, "> F")
  .replace(/>C/g, "> F#")

  .replace(/\/C#/g, " / G").replace(/\/Db/g, " / G")
  .replace(/\/D#/g, " / A").replace(/\/Eb/g, " / A")
  .replace(/\/F#/g, " / C").replace(/\/Gb/g, " / C")
  .replace(/\/G#/g, " / D").replace(/\/Ab/g, " / D")
  .replace(/\/A#/g, " / E").replace(/\/Bb/g, " / E")      
  
  .replace(/\/D/g, " / G#")
  .replace(/\/E/g, " / A#")
  .replace(/\/F/g, " / B")
  .replace(/\/G/g, " / C#")
  .replace(/\/A/g, " / D#")
  .replace(/\/B/g, " / F")
  .replace(/\/C/g, " / F#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
sifas(v){
  return v
  .replace(/>C#/g, "> G#").replace(/>Db/g, "> G#")   
  .replace(/>D#/g, "> A#").replace(/>Eb/g, "> A#")   
  .replace(/>F#/g, "> C#").replace(/>Gb/g, "> C#")
  .replace(/>G#/g, "> D#").replace(/>Ab/g, "> D#")
  .replace(/>A#/g, "> F").replace(/>Bb/g, "> F")    

  .replace(/>D/g, "> A")
  .replace(/>E/g, "> B")
  .replace(/>F/g, "> C")
  .replace(/>G/g, "> D")
  .replace(/>A/g, "> E")
  .replace(/>B/g, "> F#")
  .replace(/>C/g, "> G")

  .replace(/\/C#/g, " / G#").replace(/\/Db/g, " / G#")
  .replace(/\/D#/g, " / A#").replace(/\/Eb/g, " / A#")
  .replace(/\/F#/g, " / C#").replace(/\/Gb/g, " / C#")
  .replace(/\/G#/g, " / D#").replace(/\/Ab/g, " / D#")
  .replace(/\/A#/g, " / F").replace(/\/Bb/g, " / F")      
  
  .replace(/\/D/g, " / A")
  .replace(/\/E/g, " / B")
  .replace(/\/F/g, " / C")
  .replace(/\/G/g, " / D")
  .replace(/\/A/g, " / E")
  .replace(/\/B/g, " / F#")
  .replace(/\/C/g, " / G")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
sisol(v){
  return v
  .replace(/>C#/g, "> A").replace(/>Db/g, "> A")   
  .replace(/>D#/g, "> B").replace(/>Eb/g, "> B")   
  .replace(/>F#/g, "> D").replace(/>Gb/g, "> D")
  .replace(/>G#/g, "> E").replace(/>Ab/g, "> E")
  .replace(/>A#/g, "> F#").replace(/>Bb/g, "> F#")    

  .replace(/>D/g, "> A#")
  .replace(/>E/g, "> C")
  .replace(/>F/g, "> C#")
  .replace(/>G/g, "> D#")
  .replace(/>A/g, "> F")
  .replace(/>B/g, "> G")
  .replace(/>C/g, "> G#")

  .replace(/\/C#/g, " / A").replace(/\/Db/g, " / A")
  .replace(/\/D#/g, " / B").replace(/\/Eb/g, " / B")
  .replace(/\/F#/g, " / D").replace(/\/Gb/g, " / D")
  .replace(/\/G#/g, " / E").replace(/\/Ab/g, " / E")
  .replace(/\/A#/g, " / F#").replace(/\/Bb/g, " / F#")      
  
  .replace(/\/D/g, " / A#")
  .replace(/\/E/g, " / C")
  .replace(/\/F/g, " / C#")
  .replace(/\/G/g, " / D#")
  .replace(/\/A/g, " / F")
  .replace(/\/B/g, " / G")
  .replace(/\/C/g, " / G#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
sisols(v){
  return v
  .replace(/>C#/g, "> A#").replace(/>Db/g, "> A#")   
  .replace(/>D#/g, "> C").replace(/>Eb/g, "> C")   
  .replace(/>F#/g, "> D#").replace(/>Gb/g, "> D#")
  .replace(/>G#/g, "> F").replace(/>Ab/g, "> F")
  .replace(/>A#/g, "> G").replace(/>Bb/g, "> G")    

  .replace(/>D/g, "> B")
  .replace(/>E/g, "> C#")
  .replace(/>F/g, "> D")
  .replace(/>G/g, "> E")
  .replace(/>A/g, "> F#")
  .replace(/>B/g, "> G#")
  .replace(/>C/g, "> A")

  .replace(/\/C#/g, " / A#").replace(/\/Db/g, " / A#")
  .replace(/\/D#/g, " / C").replace(/\/Eb/g, " / C")
  .replace(/\/F#/g, " / D#").replace(/\/Gb/g, " / D#")
  .replace(/\/G#/g, " / F").replace(/\/Ab/g, " / F")
  .replace(/\/A#/g, " / G").replace(/\/Bb/g, " / G")      
  
  .replace(/\/D/g, " / B")
  .replace(/\/E/g, " / C#")
  .replace(/\/F/g, " / D")
  .replace(/\/G/g, " / E")
  .replace(/\/A/g, " / F#")
  .replace(/\/B/g, " / G#")
  .replace(/\/C/g, " / A")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
sila(v){
  return v
  .replace(/>C#/g, "> B").replace(/>Db/g, "> B")   
  .replace(/>D#/g, "> C#").replace(/>Eb/g, "> C#")   
  .replace(/>F#/g, "> E").replace(/>Gb/g, "> E")
  .replace(/>G#/g, "> F#").replace(/>Ab/g, "> F#")
  .replace(/>A#/g, "> G#").replace(/>Bb/g, "> G#")    

  .replace(/>D/g, "> C")
  .replace(/>E/g, "> D")
  .replace(/>F/g, "> D#")
  .replace(/>G/g, "> F")
  .replace(/>A/g, "> G")
  .replace(/>B/g, "> A")
  .replace(/>C/g, "> A#")

  .replace(/\/C#/g, " / B").replace(/\/Db/g, " / B")
  .replace(/\/D#/g, " / C#").replace(/\/Eb/g, " / C#")
  .replace(/\/F#/g, " / E").replace(/\/Gb/g, " / E")
  .replace(/\/G#/g, " / F#").replace(/\/Ab/g, " / F#")
  .replace(/\/A#/g, " / G#").replace(/\/Bb/g, " / G#")      
  
  .replace(/\/D/g, " / C")
  .replace(/\/E/g, " / D")
  .replace(/\/F/g, " / D#")
  .replace(/\/G/g, " / F")
  .replace(/\/A/g, " / G")
  .replace(/\/B/g, " / A")
  .replace(/\/C/g, " / A#")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
silas(v){
  return v
  .replace(/>C#/g, "> C").replace(/>Db/g, "> C")   
  .replace(/>D#/g, "> D").replace(/>Eb/g, "> D")   
  .replace(/>F#/g, "> F").replace(/>Gb/g, "> F")
  .replace(/>G#/g, "> G").replace(/>Ab/g, "> G")
  .replace(/>A#/g, "> A").replace(/>Bb/g, "> A")    

  .replace(/>D/g, "> C#")
  .replace(/>E/g, "> D#")
  .replace(/>F/g, "> E")
  .replace(/>G/g, "> F#")
  .replace(/>A/g, "> G#")
  .replace(/>B/g, "> A#")
  .replace(/>C/g, "> B")

  .replace(/\/C#/g, " / C").replace(/\/Db/g, " / C")
  .replace(/\/D#/g, " / D").replace(/\/Eb/g, " / D")
  .replace(/\/F#/g, " / F").replace(/\/Gb/g, " / F")
  .replace(/\/G#/g, " / G").replace(/\/Ab/g, " / G")
  .replace(/\/A#/g, " / A").replace(/\/Bb/g, " / A")      
  
  .replace(/\/D/g, " / C#")
  .replace(/\/E/g, " / D#")
  .replace(/\/F/g, " / E")
  .replace(/\/G/g, " / F#")
  .replace(/\/A/g, " / G#")
  .replace(/\/B/g, " / A#")
  .replace(/\/C/g, " / B")
  
  .replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
  .replace(/[\s]\/[\s]/g, "/"); // Espaço da barra ;
}
sisi(v){
  return v.replace(/<b>/g, "<b><font color='red'>")
  .replace(/<\/b>/g, "</font></b>")
}

}
