import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-table-management',
  templateUrl: './table-management.component.html',
  styleUrls: ['./table-management.component.scss'],
})
export class TableManagementComponent  implements OnInit {

  ngOnInit() {
    this.app.leftSide  = true;
    this.app.topHeader = true;
  }

  constructor(public app: AppComponent, public api: ApiService) { }

  dummy: any = [
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    }
  ];

  // createNewTable: any;
  tableData: any = {};
  availableTables: any = [];
  newTable: boolean = false;
  editTable: boolean = false;
  deleteTable: boolean = false;
  editableData: any = []
  deleteTableData: any = {}


  ionViewWillEnter() {
    this.app.leftSide = true
    this.app.topHeader = true
    // this.app.anotherLeftMenu = true
    // this.app.leftSelectedMenu = 5;
    this.tableData = {};
    this.newTable = false;
    this.editTable = false;
    this.deleteTable = false;
    this.getallTablesAssignments();
  }

  getallTablesAssignments() {
    this.editTable = false;
    this.newTable = false;
    this.availableTables = [];
    this.api.getallTables(this.app.adminId).subscribe({
      next: (res: any) => {
        const tables = res.data;
        tables.map((table: any) => {
          if (table.rooms && table.rooms.length > 0) {
            const combinedTable = {
              ...table.rooms[0],
              _id: table._id,
              Admin_id: table.Admin_id,
              org_id: table.org_id
            };
            this.availableTables.push(combinedTable);
          }
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  validateTableData(tableData: any, fields: string[]): boolean {
    for (const field of fields) {
      if (!tableData[field]) {
        // alert(Please fill out the ${field} field.);
        return false;
      }
    }
    return true;
  }

  createTable() {
    const requiredFields = ['Type', 'TableName', 'Floor', 'Status'];
    if (!this.validateTableData(this.tableData, requiredFields)) {
      return;
    }

    this.newTable = false
    let post = {
      "Admin_id": this.app.adminId,
      "org_id": this.app.OrgId,
      "rooms": [
        {
          "category": this.tableData.Type,
          "Tablename": this.tableData.TableName,
          "floor": this.tableData.Floor,
          "status": this.tableData.Status,
          "TableStatus": "Blank"
        }
      ]
    }

    this.api.CreateTable(post).subscribe({
      next: (res => {
        console.log(res);
        this.tableData = {}
        this.availableTables = []
        this.getallTablesAssignments()
      }), error: (error => {
        console.log(error);
      })
    })
  }

  closeNewTable() {
    this.newTable = false;
    this.tableData = {};
  }

  EditTableAlert(data: any) {
    this.editTable = true;
    this.editableData = data;
  }

  EditTable() {
    const requiredFields = ['_id', 'category', 'Tablename', 'floor', 'status'];
    if (!this.validateTableData(this.editableData, requiredFields)) {
      return;
    }


    this.editTable = false;
    let post = {
      "tablerooms_id": this.editableData._id,
      "Admin_id": this.app.adminId,
      "org_id": this.app.OrgId,
      "rooms": [
        {
          "category": this.editableData.category,
          "Tablename": this.editableData.Tablename,
          "floor": this.editableData.floor,
          "status": this.editableData.status,
          "TableStatus": this.editableData.TableStatus
        }]
    }

    this.api.EditTable(post).subscribe({
      next: ((res: any) => {
        console.log(res);
        this.availableTables = []
        this.getallTablesAssignments()
      }), error: (err => {
        console.log(err);
      })
    })
  }

  deleteTableAlert(data: any) {
    this.deleteTable = true;
    this.deleteTableData = {};
    this.deleteTableData = data;
    console.log(data);
  }

  DeleteTableById() {
    if (!this.validateTableData(this.deleteTableData, ['_id'])) {
      return;
    }

    this.api.deleteTableById(this.deleteTableData._id).subscribe({
      next: ((res: any) => {
        console.log(res);
        this.deleteTableData = {};
        this.availableTables = []
        this.getallTablesAssignments()
      }), error: (err => {
        console.log(err);
      })
    })
  }

  cancelDeleteAlert() {
    this.deleteTable = false;
    this.deleteTableData = {};
  }
}
