import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../../../models/pokemon.model';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    pokemon?: Pokemon;
    isLoading = true;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.data.subscribe((data) => {
            this.pokemon = data['pokemon'];
            this.isLoading = false;
        });
    }

    hasSprites(): boolean {
        return !!this.pokemon && !!this.pokemon.sprites && !!this.pokemon.sprites.other && !!this.pokemon.sprites.other.dream_world;
    }

    goBack(): void {
        this.router.navigate(['/exos/pokedex']);
    }

    navigateTo(direction: string): void {
        const currentId = Number(this.route.snapshot.paramMap.get('id'));
        let newId = direction === 'next' ? currentId + 1 : currentId - 1;

        if (newId >= 1 && newId <= 151) {
            this.isLoading = true;
            this.router.navigate(['/exos/pokemon', newId]).then(() => {
                this.route.data.subscribe((data) => {
                    this.pokemon = data['pokemon'];
                    this.isLoading = false;
                });
            });
        }
    }
}