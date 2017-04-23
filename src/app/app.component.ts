import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    routerItems: any[];
    currRouterItem: any;
    selectedType: string;
    
     constructor(private router: Router) {
        this.routerItems = [];
        this.routerItems.push({ label: '首页', url: '' });
        this.routerItems.push({ label: '最近问题（62）', url: 'x' });
        this.routerItems.push({
            label: '我发起的', url: '',
            items: [
                { label: '发起的问题', url: '' },
                { label: '自建任务', url: '' }
            ]
        });
        this.routerItems.push({ label: '待处理的（4）', url: '/questionDetail' });
        this.routerItems.push({ label: '我完成的（0）', url: '' });
        this.routerItems.push({ label: '汇总筛选', url: '' });
        this.routerItems.push({
            label: '问题输入', url: '',
            items: [
                { label: 'IPR问题输入', url: '/cqcrQuestionInput' },
                { label: 'CQCR问题输入', url: '' },
                { label: '自建任务输入', url: '' },
                { label: '软件使用问题反馈', url: '' },
            ]
        });
        this.routerItems.push({
            label: '基础数据', url: '',
            items: [{ label: '地区', url: '/adminregion' },
                { label: '附件', url: '/attachment' },
                { label: 'AuthProcess', url: '/authprocess' },
                { label: '自动编码设置', url: '/autoincrementrule' },
                { label: '血型', url: '/bloodtypeenum' },
                { label: '事故发生地', url: '/accidenthappen' },
                { label: '行动描述', url: '/actiondescription' },
                { label: '行动描述条目', url: '/actiondescriptionitem' },
                { label: '围堵信息', url: '/aroundinfo' },
                { label: '结论', url: '/conclude' },
                { label: '应急围堵', url: '/emergencyaround' },
                { label: '针对流出原因的永久措施', url: '/escapeforevermeasure' },
                { label: '逃出的根本原因', url: '/escaperootcause' },
                { label: '措施条目', url: '/measureitem' },
                { label: '针对发生原因的永久措施', url: '/occurforevermeasure' },
                { label: '发生的根本原因', url: '/occurrootcause' },
                { label: '预防措施', url: '/preventivemeasure' },
                { label: '处理方法', url: '/processmethod' },
                { label: '问题', url: '/question' },
                { label: '问题关闭', url: '/questionclose' },
                { label: '问题明细', url: '/questiondetail' },
                { label: '问题跟踪', url: '/questionfollow' },
                { label: '问题解决小组', url: '/questionsolvegroup' },
                { label: '自建任务', url: '/task' },
                { label: '临时措施', url: '/tempmeasure' },
                { label: '仓库', url: '/warehouse' },
                { label: '地址管理', url: '/address' },
                { label: '客户管理', url: '/customer' },
                { label: '客户联系人管理', url: '/customercontact' },
                { label: '产品管理', url: '/material' },
                { label: '职位管理', url: '/position' },
                { label: '生产线管理', url: '/productionline' },
                { label: '问题权限分类管理', url: '/questionauthcategory' },
                { label: '问题原因分类管理', url: '/questioncausecategory' },
                { label: '问题状态分类管理', url: '/questionstatuscategory' },
                { label: '供应商管理', url: '/supplier' },
                { label: '证件类型', url: '/documentenum' },
                { label: '学历', url: '/eduenum' },
                { label: '登录信息', url: '/logininfo' },
                { label: '通知', url: '/notice' },
                { label: '行政级别', url: '/regionlevelenum' },
                { label: '性别', url: '/sexenum' },
                { label: '用户管理', url: '/staff' }
            ]
        });
        this.routerItems.push({
            label: '报表生成', url: '',
            items: [
                { label: 'Q 表', url: '' },
                { label: '8D报告', url: '' },
                { label: '问题清单', url: '' },
                { label: '行动计划', url: '' },
            ]
        });

    }

    onSelectItem(item: any) {
        this.currRouterItem = item;
        if (item.items == undefined || item.items == null) {
            this.router.navigate([item.url + '']);
        }
    }

    onSelectSubItem(item: any) {
        this.router.navigate([item.url + '']);
    }
}
