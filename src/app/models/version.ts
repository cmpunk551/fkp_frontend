import {GeneralInfo} from './generalInfo';
import {Project} from './project';
import { GoalObjective} from './goalObjective';
import {WorkEvent} from './workEvent';
import {Spacecraft} from './spacecraft';
import {TargetIndicator} from './targetIndicator';
import {FinanceLimit} from './financeLimit';
import {Finance} from './finance';
import {FinanceWorkplace} from './financeWorkplace';
import {ChartData} from './chartData';

export class Version {
  public rid: string;
  public code: string;
  public name: string;
  public projectProjects: Project[];
  public indicatorNum: string;
  public f1: string;
  public laborCost: string;
  public priority: string;
  public description: string;
  public generalInfo: GeneralInfo;
  public goalsObjectives: GoalObjective[];
  public work_events: WorkEvent[];
  public spacecrafts: Spacecraft[];
  public targetIndicators: TargetIndicator[];
  public financeWorkPlaces: FinanceWorkplace[];
  public financeLimits: ChartData[];
  public finances: ChartData[];
}
