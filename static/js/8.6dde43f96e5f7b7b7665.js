webpackJsonp([8],{QjXk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("P9l9"),o={data:function(){return{loading:!0,Categorys:[],AddCategoryVisible:!1,Categroy:{name:"",remark:"",id:0},AddOrUpdate:0}},methods:{GetCatetory:function(){var e=this;Object(r.r)().then(function(t){t.IsSuccess&&(e.Categorys=t.TModel,e.loading=!1)})},AddCateGroy:function(){var e=this;0==this.AddOrUpdate?Object(r.c)(this.Categroy).then(function(t){t.IsSuccess?(e.$notify({title:"成功",message:"新增成功",type:"success"}),e.AddCategoryVisible=!1,e.GetCatetory()):e.$notify({title:"失败",message:t.Message,type:"error"})}):Object(r.G)(this.Categroy).then(function(t){t.IsSuccess?(e.$notify({title:"成功",message:"修改成功",type:"success"}),e.AddCategoryVisible=!1,e.GetCatetory()):e.$notify({title:"失败",message:t.Message,type:"error"})})},handleDelete:function(e,t){var a=this;Object(r.j)({id:parseInt(t.id)}).then(function(e){e.IsSuccess?a.$notify({title:"成功",message:"删除成功",type:"success"}):a.$notify({title:"失败",message:e.message,type:"error"})}),this.GetCatetory()},handleEdit:function(e,t){this.Categroy=t,this.AddOrUpdate=1,this.AddCategoryVisible=!0}},created:function(){this.GetCatetory()},computed:{CategroyOperateType:function(){return 0==this.AddOrUpdate?"新增":"编辑"}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.AddOrUpdate=0,e.Categroy={},e.AddCategoryVisible=!0}}},[e._v("\n        新增\n    ")]),e._v(" "),a("el-dialog",{attrs:{title:e.CategroyOperateType,visible:e.AddCategoryVisible,width:"30%","close-on-click-modal":!1},on:{"update:visible":function(t){e.AddCategoryVisible=t}}},[a("el-input",{attrs:{type:"text",placeholder:"名称"},model:{value:e.Categroy.name,callback:function(t){e.$set(e.Categroy,"name",t)},expression:"Categroy.name"}}),e._v(" "),a("div",{staticStyle:{margin:"20px 0"}}),e._v(" "),a("el-input",{attrs:{type:"textarea",placeholder:"备注"},model:{value:e.Categroy.remark,callback:function(t){e.$set(e.Categroy,"remark",t)},expression:"Categroy.remark"}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.AddCateGroy}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.AddCategoryVisible=!1}}},[e._v("取 消")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.Categorys,size:"mini"}},[a("el-table-column",{attrs:{prop:"name",label:"名称",width:"500"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popconfirm",{attrs:{title:"确认执行删除操作吗"},on:{onConfirm:function(a){return e.handleDelete(t.$index,t.row)}}},[a("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("删除")])],1)]}}])})],1)],1)},staticRenderFns:[]};var i=a("VU/8")(o,n,!1,function(e){a("hsGW")},null,null);t.default=i.exports},hsGW:function(e,t){}});
//# sourceMappingURL=8.6dde43f96e5f7b7b7665.js.map