import { TestBed, async } from '@angular/core/testing';

import { UserProfileService } from './user-profile.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserProfileService', () => {
  let service: UserProfileService;
  const GIT_USERNAME = '';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserProfileService]
    });
    service = TestBed.inject(UserProfileService);
  });

  it('should be created', async(() => {
    // it('should return available users', () => {
    service.getGitDetails().subscribe(x => {
      expect(x['name']).toEqual('Gautam Kochar');
    });
  }));
});
