import{o as g,q as C,i as b,r as D,s as F,u,t as N,v as w,x,c as O,w as l,_ as j,a as e,b as q,d as r,f,y as S,z,A as i,B as p,h as v,C as E,j as h,D as M,k as T,E as $,F as G}from"./index.3184a146.js";import{_}from"./FormCheckRadioGroup.f74738c4.js";import{_ as Y}from"./FormFilePicker.ab2f20d2.js";import{_ as s}from"./FormField.0472861f.js";import{_ as y}from"./SectionTitle.bac54835.js";const A={class:"flex flex-col mb-6 -mt-6 -mr-6 -ml-6 animate-fade-in"},H={__name:"NotificationBarInCard",props:{color:{type:String,required:!0}},setup(V){return(d,t)=>(g(),C("div",A,[b("div",{class:F([[u(N)[V.color]],"rounded-t-2xl flex flex-col p-6 transition-colors"])},[D(d.$slots,"default")],2)]))}},I=h("Custom elements"),L=h("Form with status example"),R={class:"capitalize"},W=h(" state"),ee={__name:"FormsView",setup(V){const d=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],t=w({name:"John Doe",email:"john.doe@example.com",phone:"",department:d[0],subject:"",question:""}),n=w({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),k=()=>{},U=x(!0),m=x(0),c=["info","success","danger","warning"],B=()=>{m.value=c[m.value+1]?m.value+1:0};return(J,o)=>(g(),O(j,null,{default:l(()=>[e(v,null,{default:l(()=>[e(q,{icon:u(M),title:"Forms example",main:""},{default:l(()=>[e(r,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:u(T),label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(f,{form:"",onSubmit:S(k,["prevent"])},{footer:l(()=>[e(z,null,{default:l(()=>[e(r,{type:"submit",color:"info",label:"Submit"}),e(r,{type:"reset",color:"info",outline:"",label:"Reset"})]),_:1})]),default:l(()=>[e(s,{label:"Grouped with icons"},{default:l(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":o[0]||(o[0]=a=>t.name=a),icon:u($)},null,8,["modelValue","icon"]),e(i,{modelValue:t.email,"onUpdate:modelValue":o[1]||(o[1]=a=>t.email=a),type:"email",icon:u(G)},null,8,["modelValue","icon"])]),_:1}),e(s,{label:"With help line",help:"Do not enter the leading zero"},{default:l(()=>[e(i,{modelValue:t.phone,"onUpdate:modelValue":o[2]||(o[2]=a=>t.phone=a),type:"tel",placeholder:"Your phone number"},null,8,["modelValue"])]),_:1}),e(s,{label:"Dropdown"},{default:l(()=>[e(i,{modelValue:t.department,"onUpdate:modelValue":o[3]||(o[3]=a=>t.department=a),options:d},null,8,["modelValue"])]),_:1}),e(p),e(s,{label:"Question",help:"Your question. Max 255 characters"},{default:l(()=>[e(i,{type:"textarea",placeholder:"Explain how we can help you"})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(y,null,{default:l(()=>[I]),_:1}),e(v,null,{default:l(()=>[e(f,null,{default:l(()=>[e(s,{label:"Checkbox","wrap-body":""},{default:l(()=>[e(_,{modelValue:n.checkbox,"onUpdate:modelValue":o[4]||(o[4]=a=>n.checkbox=a),name:"sample-checkbox",options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])]),_:1}),e(p),e(s,{label:"Radio","wrap-body":""},{default:l(()=>[e(_,{modelValue:n.radio,"onUpdate:modelValue":o[5]||(o[5]=a=>n.radio=a),name:"sample-radio",type:"radio",options:{one:"One",two:"Two"}},null,8,["modelValue"])]),_:1}),e(p),e(s,{label:"Switch"},{default:l(()=>[e(_,{modelValue:n.switch,"onUpdate:modelValue":o[6]||(o[6]=a=>n.switch=a),name:"sample-switch",type:"switch",options:{one:"One",two:"Two"}},null,8,["modelValue"])]),_:1}),e(p),e(Y,{modelValue:n.file,"onUpdate:modelValue":o[7]||(o[7]=a=>n.file=a),label:"Upload"},null,8,["modelValue"])]),_:1}),e(y,null,{default:l(()=>[L]),_:1}),e(f,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto","is-form":"","is-hoverable":"",onSubmit:S(B,["prevent"])},{footer:l(()=>[e(r,{label:"Trigger",type:"submit",color:"info"})]),default:l(()=>[e(H,{color:c[m.value],"is-placed-with-header":U.value},{default:l(()=>[b("span",null,[b("b",R,E(c[m.value]),1),W])]),_:1},8,["color","is-placed-with-header"]),e(s,{label:"Fields"},{default:l(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":o[8]||(o[8]=a=>t.name=a),"icon-left":u($),help:"Your full name",placeholder:"Name"},null,8,["modelValue","icon-left"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}};export{ee as default};
