import { TestBed, async, inject } from '@angular/core/testing';

import { UserProfileService } from './user-profile.service';
import { HttpClientJsonpModule, HttpBackend, HttpResponse, HttpClientModule } from '@angular/common/http';


xdescribe('MockBackend: UserProfileMockService', () => {
    let mockbackend, service;           

    //setup
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientJsonpModule, HttpClientModule],
            providers: [
                UserProfileService,
                { provide: HttpBackend, useExisting: HttpClientJsonpModule }

            ]
        })
    });

    beforeEach(inject([UserProfileService], (_service, _mockbackend) => {
        service = _service;
        mockbackend = _mockbackend;
    }));

    //specs
    it('should return mocked response (sync)', () => {
        let response = ["ru", "es"];
        mockbackend.connections.subscribe(connection => {
            connection.mockRespond(new HttpResponse({
                body: JSON.stringify(response)
            }));
        });
        service.get().subscribe(languages => {
            expect(languages).toContain('ru');
            expect(languages).toContain('es');
            expect(languages.length).toBe(2);
        });
    });
})