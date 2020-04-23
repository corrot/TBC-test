import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss'],
})
export class UpdateClientComponent implements OnInit {
  id: number;
  client: Client;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.client = new Client();

    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id).subscribe(
      (data) => {
        console.log(data);
        this.client = data;
      },
      (error) => console.log(error)
    );
  }

  updateClient() {
    this.clientService.updateClient(this.id, this.client).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.client = new Client();
    this.submitted = false;
    this.gotoList();
  }

  onSubmit() {
    this.updateClient();
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['/clients']);
  }
}
