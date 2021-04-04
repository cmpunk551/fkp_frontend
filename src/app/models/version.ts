import {GeneralInfo} from './generalInfo';
import {Project} from './project';
import {Goal} from './goal';
import {WorkEvent} from './workEvent';
import {Spacecraft} from './spacecraft';
import {TargetIndicator} from './targetIndicator';
import {FinanceLimit} from './financeLimit';

export class Version {
  public rid: string;
  public code: string;
  public name: string;
  public projectProjects: Project[];
  public laborCost: string;
  public priority: string;
  public description: string;
  public generalInfo: GeneralInfo;
  public goals: Goal[];
  public work_events: WorkEvent[];
  public spacecrafts: Spacecraft[];
  public targetIndicators: TargetIndicator[];
  public financeWorkPlaces: any;
  public financeLimits: FinanceLimit[];
}
