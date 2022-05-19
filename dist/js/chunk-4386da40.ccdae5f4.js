(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4386da40"],{"1ca5":function(e,t,a){"use strict";a("4bac")},4553:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-header-wrapper",[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("div",[a("a-button",{staticStyle:{width:"120px","margin-bottom":"20px"},attrs:{type:"dashed",icon:"plus"},on:{click:function(t){return e.newMember()}}},[e._v("新增批次")])],1)])],1),a("s-table",{ref:"table",attrs:{size:"default",rowKey:"id",columns:e.columns,data:e.loadData,showPagination:"auto"},scopedSlots:e._u([{key:"category",fn:function(t){return[a("span",[e._v(e._s(e.categorylist.find((function(e){return e.value===t}))&&e.categorylist.find((function(e){return e.value===t})).label))])]}},{key:"operation",fn:function(t,r){return a("span",{},[a("a-popconfirm",{attrs:{title:"是否要删除该批次?",okText:"确定",cancelText:"取消"},on:{confirm:function(){return e.onDelete(r.id)}}},[a("a",{attrs:{href:"javascript:;"}},[e._v("删除")])]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"是否要结束该批次?",okText:"确定",cancelText:"取消"},on:{confirm:function(){return e.onFinish(r.id)}}},[a("a",{attrs:{href:"javascript:;"}},[e._v("结束")])]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"是否要核销该批次所有发票?",okText:"确定",cancelText:"取消"},on:{confirm:function(){return e.onVerify(r.id)}}},[a("a",{attrs:{href:"javascript:;"}},[e._v("批次核销")])])],1)}}])}),a("a-modal",{attrs:{title:e.title,visible:e.visible,"confirm-loading":e.confirmLoading,cancelText:"取消",okText:"确定"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-form",{attrs:{form:e.form,"label-col":{span:6},"wrapper-col":{span:12}}},[a("a-form-item",{attrs:{label:"报销批次"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["batch_name",{rules:[{required:!0,message:"请输入批次号!"}]}],expression:"['batch_name', { rules: [{ required: true, message: '请输入批次号!' }] }]"}]})],1),a("a-form-item",{attrs:{label:"发票类型",required:""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["category",{rules:[{required:!0,message:"请选择发票类型！"}]}],expression:"['category', { rules: [{ required: true, message: '请选择发票类型！' }] }]"}],staticStyle:{width:"120px"}},e._l(e.categorylist,(function(t){return a("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),1)],1),a("a-form-item",{attrs:{label:"默认结束时间"}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["date",{rules:[{type:"object",required:!0,message:"请选择默认结束时间!"}]}],expression:"['date', { rules: [{ type: 'object', required: true, message: '请选择默认结束时间!' }] }]"}],attrs:{placeholder:"选择默认结束时间"}})],1)],1)],1)],1)],1)},i=[],n=a("5530"),s=a("c1df"),o=a.n(s),c=a("2af9"),l=a("0fea"),d=[{title:"报销批次",dataIndex:"batch_name",width:"15%"},{title:"发票类型",dataIndex:"category",width:"10%",scopedSlots:{customRender:"category"}},{title:"创建时间",dataIndex:"start_time",width:"15%"},{title:"默认结束时间",dataIndex:"end_date",width:"15%"},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],u={AL:{status:"default",text:"全部"},CO:{status:"default",text:"交通补贴"},TO:{status:"success",text:"疗休养"},RE:{status:"error",text:"亲属供养"},ME:{status:"processing",text:"补充医疗"},OT:{status:"default",text:"其他"}},f={name:"BillCheck",components:{STable:c["b"],Ellipsis:c["a"]},data:function(){var e=this;return this.columns=d,{loading:!1,memberLoading:!1,visible:!1,confirmLoading:!1,title:"",formLayout:"horizontal",form:this.$form.createForm(this,{name:""}),id:"",queryParam:{},pageNo:"",pageSize:"",loadData:function(t){var a=Object.assign({page:t.pageNo,size:t.pageSize},e.queryParam);return e.pageNo=t.pageNo,e.pageSize=t.pageSize,Object(l["r"])(a).then((function(e){var a={data:[],pageNo:"",totalPage:"",totalCount:"",pageSize:""};return a.pageNo=t.pageNo,a.pageSize=t.pageSize,a.totalPage=Math.ceil(e.data.count/t.pageSize),a.totalCount=e.data.count,a.data=e.data.results,a}))},timer:"",categorylist:[{value:"CO",label:"交通补助"},{value:"TO",label:"疗休养"},{value:"RE",label:"亲属供养"}]}},filters:{categoryFilter:function(e){return u[e].status}},created:function(){},computed:{},methods:{onDelete:function(e){var t=this;Object(l["g"])(e).then((function(e){t.$message.success("成功删除批次")})),this.$refs.table.refresh()},onFinish:function(e){var t=this;Object(l["h"])(e).then((function(e){t.$message.error("已结束该批次")})),this.$refs.table.refresh()},editBatch:function(e){var t=this;Object(l["a"])(e).then((function(e){t.visible=!1,t.$message.info(e.statusText),t.params.pageNo=1})).catch((function(e){t.$message.info(e)}))},newMember:function(e){var t=this;this.form.resetFields(),this.visible=!0,e?(this.title="编辑批次",this.id=e.id,this.$nextTick((function(){t.form.setFieldsValue({batch_name:e.batch_name,category:e.category,date:o()(e["end_date"])})}))):(this.id="",this.title="新增批次")},handleOk:function(){var e=this;this.form.validateFields((function(t,a){if(!t){var r=a["date"].format("YYYY-MM-DD"),i=Object(n["a"])({},a);i["end_date"]=r,e.id&&(i.id=e.id),delete i.date,e.editBatch(i),e.$refs.table.refresh()}}))},handleCancel:function(){this.visible=!1},onVerify:function(e){var t=this;Object(l["x"])({batch_id:e}).then((function(e){t.$message.info(e.data.message)}))}}},m=f,p=(a("1ca5"),a("2877")),h=Object(p["a"])(m,r,i,!1,null,"71d40b74",null);t["default"]=h.exports},"4bac":function(e,t,a){}}]);