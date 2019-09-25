import { BranchmanagerModule } from './branchmanager.module';

describe('BranchmanagerModule', () => {
  let branchmanagerModule: BranchmanagerModule;

  beforeEach(() => {
    branchmanagerModule = new BranchmanagerModule();
  });

  it('should create an instance', () => {
    expect(branchmanagerModule).toBeTruthy();
  });
});
