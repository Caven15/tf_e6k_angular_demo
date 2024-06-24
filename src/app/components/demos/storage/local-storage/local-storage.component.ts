import { Component } from '@angular/core';
import { StorageService } from '../../../../tools/services/storage.service';

@Component({
    selector: 'app-local-storage',
    templateUrl: './local-storage.component.html',
    styleUrl: './local-storage.component.scss'
})
export class LocalStorageComponent {
    constructor(private storageService: StorageService) { }
    localStorageValue: any

    saveToLocal(): void {
        const user = {
            userId: 156,
            roleId: 1
        }

        this.storageService.setLocalStorage('utilisateur', user)
    }

    loadFromLocal(): void {
        this.localStorageValue = this.storageService.getLocalStorage('utilisateur')
    }

    clear(): void {
        this.storageService.clearLocalStorage()
        this.localStorageValue = null
    }
}
