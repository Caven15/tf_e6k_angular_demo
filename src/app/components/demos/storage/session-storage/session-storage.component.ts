import { Component } from '@angular/core';
import { StorageService } from '../../../../tools/services/storage.service';

@Component({
    selector: 'app-session-storage',
    templateUrl: './session-storage.component.html',
    styleUrl: './session-storage.component.scss'
})
export class SessionStorageComponent {

    constructor(private storageService: StorageService) { }
    sessionStorageValue: any

    saveToSession(): void {
        const user = {
            userId: 156,
            roleId: 1
        }

        this.storageService.setSessionStorage('utilisateur', user)
    }

    loadFromSession(): void {
        this.sessionStorageValue = this.storageService.getSessionStorage('utilisateur')
    }

    clear(): void {
        this.storageService.clearSessionStorage()
        this.sessionStorageValue = null
    }
}
