import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artwork-page',
  templateUrl: './artwork-page.component.html',
  styleUrls: ['./artwork-page.component.scss']
})
export class ArtworkPageComponent implements OnInit {

  private sub: any;
  private id: string;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {

        this.id = params['id'];

       // // Retrieve Pet with Id route param
       //  this.petService.findPetById(id).subscribe(dog => this.dog = dog);
    });
  }

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }

}
