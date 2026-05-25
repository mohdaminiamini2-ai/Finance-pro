/* FinanceERP v8 - Complete with Vouchers, Cheques In/Out, Cashier, Denominations */
const SB_URL="https://wxjuhlfrnbrlqxetldrl.supabase.co";
const SB_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4anVobGZybmJybHF4ZXRsZHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MzIwMzMsImV4cCI6MjA5NTEwODAzM30.ZUk0giKEhhRCxkbwbZjYMYNWQqENT-BFAWA0IK1eIQg";
const sb=supabase.createClient(SB_URL,SB_KEY);

// i18n
const L={
  en:{app:"FinanceERP",dashboard:"Dashboard",cashier:"Cashier",pos:"POS",accounts:"Accounts",transactions:"Transactions",invoices:"Invoices",vouchers:"Vouchers",chequesIn:"Cheques In",chequesOut:"Cheques Out",inventory:"Inventory",customers:"Customers",suppliers:"Suppliers",reports:"Reports",budgets:"Budgets",goals:"Goals",settings:"Settings",ai:"AI Assistant",denominations:"Cash Notes",
  netWorth:"Net Worth",assets:"Assets",liabilities:"Liabilities",todayRev:"Today Revenue",todayExp:"Today Expenses",outstanding:"Outstanding",cashOnHand:"Cash on Hand",
  add:"Add",edit:"Edit",delete:"Delete",save:"Save",cancel:"Cancel",close:"Close",confirm:"Confirm",refresh:"Refresh",
  receiptVoucher:"Receipt Voucher",paymentVoucher:"Payment Voucher",receipt:"Receipt",payment:"Payment",
  chequeIn:"Cheque Received",chequeOut:"Cheque Issued",
  bank:"Bank",debit:"Debit",cash:"Cash",card:"Card",cheque:"Cheque",credit:"Credit",
  name:"Name",balance:"Balance",currency:"Currency",amount:"Amount",desc:"Description",date:"Date",type:"Type",category:"Category",account:"Account",note:"Note",customer:"Customer",supplier:"Supplier",dueDate:"Due Date",status:"Status",party:"Party",paymentMode:"Payment Mode",
  income:"Income",expense:"Expense",
  paid:"Paid",pending:"Pending",overdue:"Overdue",draft:"Draft",submitted:"Submitted",cleared:"Cleared",bounced:"Bounced",
  confirmDel:"Delete this?",saved:"Saved ✓",deleted:"Deleted",noRecords:"No records",loading:"Loading...",
  signIn:"Sign In",signUp:"Sign Up",signOut:"Sign Out",email:"Email",password:"Password",forgotPass:"Forgot password?",resetPass:"Reset Password",resetSent:"Reset email sent!",confirmPass:"Confirm Password",passMismatch:"Passwords don't match",passShort:"Min 6 characters",authErr:"Invalid email or password",
  lang:"Language",defCurrency:"Default Currency",
  sku:"SKU",qty:"Qty",unitPrice:"Unit Price",costPrice:"Cost",sellPrice:"Sell Price",stock:"Stock",
  invoiceNo:"Invoice #",voucherNo:"Voucher #",chequeNo:"Cheque #",subtotal:"Subtotal",tax:"Tax %",discount:"Discount %",grandTotal:"Total",items:"Items",addItem:"Add Item",
  drawer:"Drawer (From)",payee:"Payee (To)",issueDate:"Issue Date",bankName:"Bank",
  phone:"Phone",address:"Address",
  search:"Search",
  aiKey:"Claude AI API Key",aiPlaceholder:"Ask anything...",send:"Send",
  profile:"Profile",companyName:"Company Name",
  backup:"Backup",exportCSV:"Export CSV",
  print:"Print",pdf:"PDF",
  listSalesInv:"Sales Invoices",listIncome:"Income List",listExpenses:"Expense List",listPaymentVoucher:"Payment Vouchers",listReceiptVoucher:"Receipt Vouchers",
  cashIn:"Cash In",cashOut:"Cash Out",total:"Total",
  receivedFrom:"Received From",paidTo:"Paid To",
  newReceipt:"New Receipt",newPayment:"New Payment",newChequeIn:"New Cheque In",newChequeOut:"New Cheque Out",
  cashNotes:"Cash Notes Count",
  cashBalance:"Cash Balance",totalNotes:"Total Notes",
  lowFunds:"⚠️ Low funds warning",
  enterToSave:"Press Enter to save",
  smartAlerts:"Smart Alerts",
  aiAnalysis:"AI Analysis",
  weekly:"7 Days",monthly:"30 Days",
  productImg:"Image URL",
  reorderLevel:"Reorder Level",
  cashSale:"Cash",cardSale:"Card",creditSale:"Credit",
  recentTx:"Recent Transactions",quickActions:"Quick Actions",
  cashRegister:"Cash Register",cashFlow:"Cash Flow",
  openingBalance:"Opening Balance",closingBalance:"Closing Balance",
  fromAccount:"From Account",toAccount:"To Account",
  thisMonth:"This Month",lastMonth:"Last Month",
  data:"Data",accountEmail:"Account",
  },
  fa:{app:"حسابدار",dashboard:"داشبورد",cashier:"کاشیر",pos:"صندوق POS",accounts:"حساب‌ها",transactions:"تراکنش‌ها",invoices:"فاکتورها",vouchers:"وچرها",chequesIn:"چک‌های دریافتی",chequesOut:"چک‌های پرداختی",inventory:"موجودی",customers:"مشتریان",suppliers:"تامین‌کنندگان",reports:"گزارش‌ها",budgets:"بودجه‌ها",goals:"اهداف",settings:"تنظیمات",ai:"هوش مصنوعی",denominations:"اسکناس‌ها",
  netWorth:"دارایی خالص",assets:"دارایی‌ها",liabilities:"بدهی‌ها",todayRev:"درآمد امروز",todayExp:"هزینه امروز",outstanding:"معوقات",cashOnHand:"موجودی نقدی",
  add:"افزودن",edit:"ویرایش",delete:"حذف",save:"ذخیره",cancel:"انصراف",close:"بستن",confirm:"تایید",refresh:"بروزرسانی",
  receiptVoucher:"وچر دریافت",paymentVoucher:"وچر پرداخت",receipt:"دریافت",payment:"پرداخت",
  chequeIn:"چک دریافتی",chequeOut:"چک پرداختی",
  bank:"بانکی",debit:"دبیت",cash:"نقد",card:"کارت",cheque:"چک",credit:"اعتباری",
  name:"نام",balance:"موجودی",currency:"ارز",amount:"مبلغ",desc:"توضیحات",date:"تاریخ",type:"نوع",category:"دسته",account:"حساب",note:"یادداشت",customer:"مشتری",supplier:"تامین‌کننده",dueDate:"سررسید",status:"وضعیت",party:"طرف حساب",paymentMode:"روش پرداخت",
  income:"درآمد",expense:"هزینه",
  paid:"پرداخت شده",pending:"در انتظار",overdue:"سررسید گذشته",draft:"پیش‌نویس",submitted:"صادر شده",cleared:"وصول شده",bounced:"برگشت خورده",
  confirmDel:"حذف شود؟",saved:"ذخیره شد ✓",deleted:"حذف شد",noRecords:"رکوردی نیست",loading:"در حال بارگذاری...",
  signIn:"ورود",signUp:"ثبت نام",signOut:"خروج",email:"ایمیل",password:"رمز",forgotPass:"رمز فراموش شده؟",resetPass:"بازیابی",resetSent:"ایمیل ارسال شد!",confirmPass:"تکرار رمز",passMismatch:"رمزها یکسان نیستند",passShort:"حداقل ۶ کاراکتر",authErr:"ایمیل یا رمز اشتباه",
  lang:"زبان",defCurrency:"ارز پیش‌فرض",
  sku:"کد",qty:"تعداد",unitPrice:"قیمت",costPrice:"قیمت خرید",sellPrice:"قیمت فروش",stock:"موجودی",
  invoiceNo:"شماره فاکتور",voucherNo:"شماره وچر",chequeNo:"شماره چک",subtotal:"جمع",tax:"مالیات %",discount:"تخفیف %",grandTotal:"جمع کل",items:"اقلام",addItem:"افزودن قلم",
  drawer:"صادرکننده (از)",payee:"گیرنده (به)",issueDate:"تاریخ صدور",bankName:"بانک",
  phone:"تلفن",address:"آدرس",
  search:"جستجو",
  aiKey:"کلید Claude AI",aiPlaceholder:"بپرس...",send:"ارسال",
  profile:"پروفایل",companyName:"نام شرکت",
  backup:"بک‌آپ",exportCSV:"خروجی CSV",
  print:"چاپ",pdf:"PDF",
  listSalesInv:"لیست فاکتورهای فروش",listIncome:"لیست درآمدها",listExpenses:"لیست هزینه‌ها",listPaymentVoucher:"لیست وچرهای پرداخت",listReceiptVoucher:"لیست وچرهای دریافت",
  cashIn:"دریافتی",cashOut:"پرداختی",total:"جمع",
  receivedFrom:"دریافت از",paidTo:"پرداخت به",
  newReceipt:"وچر دریافت جدید",newPayment:"وچر پرداخت جدید",newChequeIn:"چک دریافتی جدید",newChequeOut:"چک پرداختی جدید",
  cashNotes:"شمارش اسکناس",
  cashBalance:"موجودی صندوق",totalNotes:"جمع اسکناس‌ها",
  lowFunds:"⚠️ هشدار: موجودی کم است",
  enterToSave:"Enter برای ذخیره",
  smartAlerts:"هشدارهای هوشمند",
  aiAnalysis:"تحلیل هوش مصنوعی",
  weekly:"۷ روز",monthly:"۳۰ روز",
  productImg:"آدرس عکس",
  reorderLevel:"حداقل موجودی",
  cashSale:"نقدی",cardSale:"کارت",creditSale:"اعتباری",
  recentTx:"آخرین تراکنش‌ها",quickActions:"اقدامات سریع",
  cashRegister:"صندوق کاشیر",cashFlow:"جریان نقدی",
  openingBalance:"موجودی اولیه",closingBalance:"موجودی پایانی",
  fromAccount:"از حساب",toAccount:"به حساب",
  thisMonth:"این ماه",lastMonth:"ماه قبل",
  data:"داده‌ها",accountEmail:"حساب",
  }
};

const CURS=[{code:"AED",sym:"AED"},{code:"USD",sym:"$"},{code:"EUR",sym:"€"},{code:"GBP",sym:"£"},{code:"IRR",sym:"﷼"},{code:"IRT",sym:"T"},{code:"TRY",sym:"₺"},{code:"CAD",sym:"C$"},{code:"CHF",sym:"Fr"}];
const ATYPES=["bank","debit","cash","credit","crypto"];
const AICONS={bank:"🏦",debit:"💳",cash:"💵",credit:"⚠️",crypto:"₿"};
const TCATS=["salary","sales","investment","rent","food","housing","transport","utilities","health","entertainment","shopping","tax","other"];
const AED_DENOMS=[1000,500,200,100,50,20,10,5,1,0.5,0.25];

const S={
  lang:localStorage.getItem("lang")||"en",
  theme:localStorage.getItem("theme")||"dark",
  currency:localStorage.getItem("currency")||"AED",
  aiKey:localStorage.getItem("aiKey")||"",
  page:"dashboard",
  user:null,
  accounts:[],transactions:[],invoices:[],products:[],customers:[],suppliers:[],budgets:[],goals:[],vouchers:[],cheques_in:[],cheques_out:[],denominations:{},
  profile:JSON.parse(localStorage.getItem("profile")||"{}"),
  invItems:[],cart:[],searchQ:"",pillFilter:"all",
  lowBalanceThreshold:parseFloat(localStorage.getItem("lowBalThr"))||100,
};

const t=k=>L[S.lang][k]||k;
const $=id=>document.getElementById(id);
const fmN=n=>Number(n||0).toLocaleString(S.lang==="fa"?"fa-IR":"en-US",{maximumFractionDigits:2});
const fmA=(n,c)=>{const cur=CURS.find(x=>x.code===(c||S.currency));return `${fmN(n)} ${cur?cur.sym:c||""}`;};
const today=()=>new Date().toISOString().split("T")[0];
const fmD=d=>d?new Date(d).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—";

function toast(msg,type="info"){
  let c=$("toasts");if(!c){c=document.createElement("div");c.id="toasts";document.body.appendChild(c);}
  const d=document.createElement("div");d.className=`toast ${type}`;
  d.innerHTML=`<span>${type==="ok"?"✓":type==="err"?"✕":"ℹ"}</span><span>${msg}</span>`;
  c.appendChild(d);setTimeout(()=>d.remove(),3000);
}

function modal(title,body,foot,large){
  closeModal(true);
  const ov=document.createElement("div");ov.className="mo";ov.id="mo";
  ov.innerHTML=`<div class="mb${large?" mb-lg":""}"><div class="mh"><span class="mt">${title}</span><button class="mx" onclick="closeModal()">×</button></div><div class="mbody">${body}</div><div class="mfoot">${foot}</div></div>`;
  ov.addEventListener("click",e=>{if(e.target===ov)closeModal();});
  document.body.appendChild(ov);
  // Enable Enter key in all inputs
  setTimeout(()=>{
    document.querySelectorAll(".mbody input,.mbody select").forEach(el=>{
      el.addEventListener("keydown",e=>{
        if(e.key==="Enter"&&el.tagName!=="TEXTAREA"){
          e.preventDefault();
          const btn=document.querySelector(".mfoot .btn-primary");
          if(btn)btn.click();
        }
      });
    });
  },50);
}
function closeModal(force){
  const mo=$("mo");if(!mo)return;
  if(!force){
    // Check if any form has data
    const inputs=mo.querySelectorAll(".mbody input:not([type=date]):not([readonly]), .mbody textarea, .mbody select");
    let hasData=false;
    inputs.forEach(inp=>{
      const v=inp.value?.trim();
      if(!v||v==="0"||v==="")return;
      // Check if it's a default value
      const def=inp.defaultValue;
      if(v!==def&&v!=="")hasData=true;
    });
    if(hasData&&!confirm("Discard changes and close?"))return;
  }
  mo.remove();
}

// Auth
function renderAuth(mode="signin"){
  applyLang();
  const isIn=mode==="signin";
  $("app").innerHTML=`
  <div class="auth-wrap"><div class="auth-box">
    <div style="text-align:center;margin-bottom:28px;">
      <div style="width:64px;height:64px;background:linear-gradient(135deg,#3b82f6,#a855f7);border-radius:18px;display:inline-flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:#fff;margin-bottom:14px;box-shadow:0 8px 32px rgba(59,130,246,.4);">F</div>
      <div style="font-size:24px;font-weight:700;">${t("app")}</div>
    </div>
    <div class="auth-card">
      <div class="fg"><label class="fl">${t("email")}</label><input class="fc" type="email" id="ae" autocapitalize="none" placeholder="you@example.com"/></div>
      <div class="fg"><label class="fl">${t("password")}</label><input class="fc" type="password" id="ap" placeholder="••••••••"/></div>
      ${!isIn?`<div class="fg"><label class="fl">${t("confirmPass")}</label><input class="fc" type="password" id="ap2"/></div>`:""}
      <div id="aerr" style="color:var(--red);font-size:12px;min-height:18px;margin-bottom:8px;"></div>
      <button class="btn btn-primary btn-fullwidth" style="padding:13px;" onclick="doAuth('${mode}')" id="abtn">${t(isIn?"signIn":"signUp")}</button>
      ${isIn?`<div style="text-align:center;margin-top:12px;"><span style="color:var(--accent);cursor:pointer;font-size:12px;" onclick="showReset()">${t("forgotPass")}</span></div>`:""}
      <div style="text-align:center;margin-top:18px;padding-top:18px;border-top:1px solid var(--border);font-size:12px;color:var(--text3);"><span style="color:var(--accent);cursor:pointer;" onclick="renderAuth('${isIn?"signup":"signin"}')">${t(isIn?"signUp":"signIn")}</span></div>
    </div>
    <div style="text-align:center;margin-top:16px;">
      <div class="lang-tog" style="display:inline-flex;">
        <button class="lang-btn ${S.lang==="en"?"on":""}" onclick="S.lang='en';localStorage.setItem('lang','en');renderAuth('${mode}')">EN</button>
        <button class="lang-btn ${S.lang==="fa"?"on":""}" onclick="S.lang='fa';localStorage.setItem('lang','fa');renderAuth('${mode}')">FA</button>
      </div>
    </div>
  </div></div><div id="toasts"></div>`;
  // Enter key on auth
  setTimeout(()=>{
    ["ae","ap","ap2"].forEach(id=>{
      const el=$(id);if(el)el.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();doAuth(mode);}});
    });
  },50);
}
function showReset(){
  modal(t("resetPass"),`<div class="fg"><label class="fl">${t("email")}</label><input class="fc" type="email" id="re"/></div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="doReset()">${t("resetPass")}</button>`);
}
async function doReset(){
  const email=$("re")?.value?.trim();if(!email){toast("Enter email","err");return;}
  const {error}=await sb.auth.resetPasswordForEmail(email,{redirectTo:window.location.origin});
  if(error){toast(error.message,"err");return;}
  closeModal(true);toast(t("resetSent"),"ok");
}
async function doAuth(mode){
  const email=$("ae")?.value?.trim(),pass=$("ap")?.value;
  const errEl=$("aerr"),btn=$("abtn");
  if(!email||!pass){errEl.textContent="Required";return;}
  if(mode==="signup"){
    if(pass!==$("ap2")?.value){errEl.textContent=t("passMismatch");return;}
    if(pass.length<6){errEl.textContent=t("passShort");return;}
  }
  btn.disabled=true;btn.textContent=t("loading");
  const {data,error}=mode==="signin"?await sb.auth.signInWithPassword({email,password:pass}):await sb.auth.signUp({email,password:pass});
  if(error){errEl.textContent=t("authErr");btn.disabled=false;btn.textContent=t(mode==="signin"?"signIn":"signUp");return;}
  S.user=data.user;await loadAll();buildShell();render(S.page);
}
async function signOut(){await sb.auth.signOut();S.user=null;["accounts","transactions","invoices","products","customers","suppliers","budgets","goals","vouchers","cheques_in","cheques_out"].forEach(k=>S[k]=[]);S.denominations={};renderAuth();}

async function loadAll(){
  if(!S.user)return;
  const uid=S.user.id;
  try{
    const tabs=["accounts","transactions","invoices","products","customers","suppliers","budgets","goals","vouchers","cheques_in","cheques_out"];
    const res=await Promise.all(tabs.map(tn=>sb.from(tn).select("*").eq("user_id",uid).order("created_at",{ascending:false})));
    tabs.forEach((tn,i)=>{S[tn]=res[i].data||[];});
    // Load denominations
    const dn=await sb.from("cash_denominations").select("*").eq("user_id",uid);
    S.denominations={};(dn.data||[]).forEach(d=>{S.denominations[d.denomination]=d.count;});
  }catch(e){toast("Load: "+e.message,"err");}
}
async function ins(table,row){const {data,error}=await sb.from(table).insert({...row,user_id:S.user.id}).select().single();if(error){toast(error.message,"err");return null;}return data;}
async function upd(table,id,row){const {error}=await sb.from(table).update(row).eq("id",id).eq("user_id",S.user.id);if(error)toast(error.message,"err");}
async function del(table,id){const {error}=await sb.from(table).delete().eq("id",id).eq("user_id",S.user.id);if(error)toast(error.message,"err");}

// Nav
function nav(page){
  S.page=page;S.searchQ="";S.pillFilter="all";
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("on"));
  $("p-"+page)?.classList.add("on");
  document.querySelectorAll(".nav-item,.mob-btn").forEach(b=>b.classList.toggle("on",b.dataset.page===page));
  closeSidebar();render(page);window.scrollTo(0,0);
}
function render(page){
  const map={dashboard:rDash,cashier:rCashier,pos:rPOS,accounts:rAcc,transactions:rTx,invoices:rInv,vouchers:rVouchers,chequesIn:rChIn,chequesOut:rChOut,inventory:rProd,customers:rCust,suppliers:rSupp,reports:rRep,budgets:rBud,goals:rGoal,ai:rAI,settings:rSet};
  map[page]?.();
}
async function refreshApp(){toast("Refreshing...","info");await loadAll();render(S.page);toast("Refreshed ✓","ok");}

// Helpers
function nextInvoiceNo(){
  const nums=S.invoices.map(i=>{
    const m=String(i.invoice_no||"").match(/INV-(\d+)/);
    return m?parseInt(m[1]):0;
  });
  const max=Math.max(0,...nums);
  return "INV-"+String(max+1).padStart(4,"0");
}
function nextVoucherNo(type){
  const prefix=type==="receipt"?"RV":"PV";
  const nums=S.vouchers.filter(v=>v.type===type).map(v=>{
    const m=String(v.voucher_no||"").match(new RegExp(prefix+"-(\\d+)"));
    return m?parseInt(m[1]):0;
  });
  const max=Math.max(0,...nums);
  return prefix+"-"+String(max+1).padStart(4,"0");
}
function calcNW(){let a=0,l=0;S.accounts.forEach(x=>x.type==="credit"?l+=(x.balance||0):a+=(x.balance||0));return {assets:a,liab:l,net:a-l};}
// Multi-currency: returns {USD: {assets, liab, net}, AED: {...}}
function calcNWByCurrency(){
  const map={};
  S.accounts.forEach(x=>{
    const c=x.currency||S.currency;
    if(!map[c])map[c]={assets:0,liab:0,net:0};
    if(x.type==="credit")map[c].liab+=(x.balance||0);
    else map[c].assets+=(x.balance||0);
  });
  Object.keys(map).forEach(c=>{map[c].net=map[c].assets-map[c].liab;});
  return map;
}
function getAcc(id){return S.accounts.find(x=>x.id===id);}
function getAccName(id){return getAcc(id)?.name||"—";}
function getCust(id){return S.customers.find(x=>x.id===id);}
function getCustName(id){return getCust(id)?.name||"—";}
function todayTx(type){return S.transactions.filter(tx=>tx.date===today()&&tx.type===type).reduce((s,tx)=>s+tx.amount,0);}
function outstandingTotal(){return S.invoices.filter(i=>i.status==="submitted").reduce((s,i)=>s+(i.grand_total||0),0);}
function cashOnHand(){return S.accounts.filter(a=>a.type==="cash").reduce((s,a)=>s+(a.balance||0),0);}
function denominationsTotal(){return AED_DENOMS.reduce((s,d)=>s+(d*(S.denominations[d]||0)),0);}

// Dashboard
function rDash(){
  const {assets,liab,net}=calcNW();
  const inc=todayTx("income"),exp=todayTx("expense");
  const cash=cashOnHand();
  const nwByCur=calcNWByCurrency();
  const currencies=Object.keys(nwByCur);
  const hasMultiCur=currencies.length>1;
  
  let heroHTML;
  if(hasMultiCur){
    // Show per-currency breakdown
    const curRows=currencies.map(c=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.1);"><span style="font-size:13px;opacity:.85;">${c}</span><span style="font-family:var(--mono);font-weight:600;font-size:14px;">${fmA(nwByCur[c].net,c)}</span></div>`).join("");
    heroHTML=`<div class="hero">
      <div class="hero-label">${t("netWorth")} (Multi-Currency)</div>
      <div style="margin-top:8px;">${curRows}</div>
      <div class="hero-row">
        <div class="hero-item"><div class="hero-item-label">${t("todayRev")}</div><div class="hero-item-val" style="color:#4ade80;">${fmA(inc)}</div></div>
        <div class="hero-item"><div class="hero-item-label">${t("todayExp")}</div><div class="hero-item-val" style="color:#fda4af;">${fmA(exp)}</div></div>
        <div class="hero-item"><div class="hero-item-label">${t("cashOnHand")}</div><div class="hero-item-val">${fmA(cash)}</div></div>
      </div>
    </div>`;
  }else{
    heroHTML=`<div class="hero">
      <div class="hero-label">${t("netWorth")}</div>
      <div class="hero-value">${fmA(net)}</div>
      <div class="hero-row">
        <div class="hero-item"><div class="hero-item-label">${t("assets")}</div><div class="hero-item-val">${fmA(assets)}</div></div>
        <div class="hero-item"><div class="hero-item-label">${t("liabilities")}</div><div class="hero-item-val">${fmA(liab)}</div></div>
        <div class="hero-item"><div class="hero-item-label">${t("cashOnHand")}</div><div class="hero-item-val">${fmA(cash)}</div></div>
      </div>
    </div>`;
  }
  const ovd=S.invoices.filter(i=>{const dt=new Date();dt.setHours(0,0,0,0);return i.status==="submitted"&&i.due_date&&new Date(i.due_date)<dt;}).length;
  const chIn=S.cheques_in.filter(c=>c.status==="pending").reduce((s,c)=>s+(c.amount||0),0);
  const chOut=S.cheques_out.filter(c=>c.status==="pending").reduce((s,c)=>s+(c.amount||0),0);
  const lowBal=S.accounts.filter(a=>a.type!=="credit"&&(a.balance||0)>0&&(a.balance||0)<S.lowBalanceThreshold);

  const alerts=[];
  if(S.accounts.length>0&&net>0&&net<S.lowBalanceThreshold)alerts.push(`<div class="alert alert-red">${t("lowFunds")} ${fmA(net)}</div>`);
  if(S.accounts.length===0)alerts.push(`<div class="alert alert-blue">👋 Welcome! Start by <span style="cursor:pointer;text-decoration:underline;" onclick="nav('accounts')">adding an account</span></div>`);
  if(lowBal.length>0&&S.accounts.length>0)alerts.push(`<div class="alert alert-amber">⚠️ ${lowBal.length} account${lowBal.length>1?"s":""} low: ${lowBal.map(a=>`<b>${a.name}</b>`).join(", ")}</div>`);
  if(ovd>0)alerts.push(`<div class="alert alert-red">⏰ ${ovd} overdue invoices</div>`);

  // Smart insights
  const insights=generateInsights();
  if(insights)alerts.push(`<div class="alert alert-purple">💡 ${insights}</div>`);

  // 7-day chart
  const last7=[];
  for(let i=6;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const ds=d.toISOString().split("T")[0];
    const v=S.transactions.filter(tx=>tx.date===ds&&tx.type==="income").reduce((s,tx)=>s+tx.amount,0);
    last7.push({d:d.toLocaleDateString("en-US",{weekday:"short"})[0],v});
  }
  const maxV=Math.max(...last7.map(x=>x.v),1);
  const chartHTML=`<div class="chart-bar">${last7.map(x=>`<div class="chart-col"><div class="chart-col-bar" style="height:${(x.v/maxV)*100}%;"></div><div class="chart-col-label">${x.d}</div></div>`).join("")}</div>`;

  const recentHTML=S.transactions.slice(0,5).map(tx=>`
    <div class="list-item" onclick="nav('transactions')">
      <div class="list-icon" style="background:${tx.type==="income"?"var(--green-dim)":"var(--red-dim)"};color:${tx.type==="income"?"var(--green)":"var(--red)"};">${tx.type==="income"?"↑":"↓"}</div>
      <div class="list-content"><div class="list-title">${tx.note||tx.category||"—"}</div><div class="list-sub">${getAccName(tx.account_id)} · ${fmD(tx.date)}</div></div>
      <div class="list-right"><div class="list-amount" style="color:${tx.type==="income"?"var(--green)":"var(--red)"};">${tx.type==="income"?"+":"−"}${fmA(tx.amount,tx.currency)}</div></div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">📋</div><p>${t("noRecords")}</p></div>`;

  $("p-dashboard").innerHTML=`
    ${heroHTML}
    ${alerts.join("")}
    <div class="stat-grid">
      <div class="stat-card green"><div class="sc-icon">↑</div><div class="sc-label">${t("todayRev")}</div><div class="sc-value" style="color:var(--green);">${fmA(inc)}</div></div>
      <div class="stat-card red"><div class="sc-icon">↓</div><div class="sc-label">${t("todayExp")}</div><div class="sc-value" style="color:var(--red);">${fmA(exp)}</div></div>
      <div class="stat-card teal" onclick="nav('chequesIn')" style="cursor:pointer;"><div class="sc-icon">📥</div><div class="sc-label">${t("chequesIn")}</div><div class="sc-value" style="font-size:14px;color:var(--teal);">${fmA(chIn)}</div></div>
      <div class="stat-card amber" onclick="nav('chequesOut')" style="cursor:pointer;"><div class="sc-icon">📤</div><div class="sc-label">${t("chequesOut")}</div><div class="sc-value" style="font-size:14px;color:var(--amber);">${fmA(chOut)}</div></div>
    </div>
    <div class="card"><div class="card-head"><span class="card-title">7-Day Revenue</span></div><div class="card-body">${chartHTML}</div></div>
    <div class="card"><div class="card-head"><span class="card-title">${t("quickActions")}</span></div><div class="card-body" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
      <button class="btn btn-success" onclick="showVoucher('receipt')">📥 ${t("newReceipt")}</button>
      <button class="btn btn-danger" onclick="showVoucher('payment')">📤 ${t("newPayment")}</button>
      <button class="btn btn-secondary" onclick="showAddTx()">⇄ ${t("transactions")}</button>
      <button class="btn btn-secondary" onclick="showAddInv()">🧾 ${t("invoices")}</button>
    </div></div>
    <div class="card"><div class="card-head"><span class="card-title">${t("recentTx")}</span><button class="btn btn-xs btn-ghost" onclick="nav('transactions')">→</button></div>${recentHTML}</div>`;
}

function generateInsights(){
  const now=new Date();
  const ms=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-01`;
  const lm=new Date(now.getFullYear(),now.getMonth()-1,1);
  const lms=`${lm.getFullYear()}-${String(lm.getMonth()+1).padStart(2,"0")}-01`;
  const lme=ms;
  const thisME=S.transactions.filter(tx=>tx.type==="expense"&&tx.date>=ms).reduce((s,tx)=>s+tx.amount,0);
  const lastME=S.transactions.filter(tx=>tx.type==="expense"&&tx.date>=lms&&tx.date<lme).reduce((s,tx)=>s+tx.amount,0);
  if(lastME>0&&thisME>lastME*1.3)return `Expenses ${((thisME-lastME)/lastME*100).toFixed(0)}% higher than last month`;
  if(lastME>0&&thisME<lastME*0.7)return `Great! Expenses ${((lastME-thisME)/lastME*100).toFixed(0)}% lower than last month`;
  return "";
}

// ── CASHIER ──
function rCashier(){
  const cashAccs=S.accounts.filter(a=>a.type==="cash");
  const totalCash=cashAccs.reduce((s,a)=>s+(a.balance||0),0);
  const denomTotal=denominationsTotal();
  const todayRcpt=S.vouchers.filter(v=>v.type==="receipt"&&v.date===today()).reduce((s,v)=>s+v.amount,0);
  const todayPmnt=S.vouchers.filter(v=>v.type==="payment"&&v.date===today()).reduce((s,v)=>s+v.amount,0);

  // Denomination rows
  const denomHTML=AED_DENOMS.map(d=>{
    const id=String(d).replace(".","_");
    const label=d>=1?d+" AED":d===0.5?"50 Fils":"25 Fils";
    return `<div class="denom-item">
      <div>
        <div class="denom-label">${label}</div>
        <div style="font-size:10px;color:var(--text3);">= ${fmN(d*(S.denominations[d]||0))}</div>
      </div>
      <input type="number" class="denom-input" id="dn-${id}" value="${S.denominations[d]||0}" min="0" step="1" oninput="updateDenomTotal()"/>
    </div>`;
  }).join("");

  // Today's vouchers
  const todayVouchers=S.vouchers.filter(v=>v.date===today()).slice(0,8);
  const vList=todayVouchers.map(v=>`
    <div class="list-item" onclick="showVoucherDetail('${v.id}')">
      <div class="list-icon" style="background:${v.type==="receipt"?"var(--green-dim)":"var(--red-dim)"};color:${v.type==="receipt"?"var(--green)":"var(--red)"};">${v.type==="receipt"?"📥":"📤"}</div>
      <div class="list-content"><div class="list-title">${v.party||v.voucher_no}</div><div class="list-sub">${v.note||v.payment_mode}</div></div>
      <div class="list-right"><div class="list-amount" style="color:${v.type==="receipt"?"var(--green)":"var(--red)"};">${v.type==="receipt"?"+":"−"}${fmA(v.amount,v.currency)}</div></div>
    </div>`).join("")||`<div class="empty"><p>${t("noRecords")}</p></div>`;

  $("p-cashier").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("cashier")}</div><div class="page-sub">${t("cashRegister")} · ${fmA(totalCash)}</div></div></div>
    
    <div class="hero" style="background:linear-gradient(135deg,rgba(16,185,129,.25),rgba(20,184,166,.25));">
      <div class="hero-label">${t("cashBalance")}</div>
      <div class="hero-value">${fmA(totalCash)}</div>
      <div class="hero-row">
        <div class="hero-item"><div class="hero-item-label">${t("cashIn")} (Today)</div><div class="hero-item-val" style="color:#4ade80;">+${fmA(todayRcpt)}</div></div>
        <div class="hero-item"><div class="hero-item-label">${t("cashOut")} (Today)</div><div class="hero-item-val" style="color:#fda4af;">-${fmA(todayPmnt)}</div></div>
      </div>
    </div>

    <div class="stat-grid">
      <button class="stat-card green" onclick="showVoucher('receipt')" style="cursor:pointer;border:none;text-align:left;width:100%;font-family:inherit;color:inherit;"><div class="sc-icon">📥</div><div class="sc-label">${t("newReceipt")}</div><div class="sc-value" style="font-size:14px;color:var(--green);">+ ${t("receipt")}</div></button>
      <button class="stat-card red" onclick="showVoucher('payment')" style="cursor:pointer;border:none;text-align:left;width:100%;font-family:inherit;color:inherit;"><div class="sc-icon">📤</div><div class="sc-label">${t("newPayment")}</div><div class="sc-value" style="font-size:14px;color:var(--red);">+ ${t("payment")}</div></button>
    </div>

    <div class="card">
      <div class="card-head"><span class="card-title">${t("cashNotes")} (AED)</span><button class="btn btn-xs btn-primary" onclick="saveDenominations()">${t("save")}</button></div>
      <div class="card-body">
        <div class="denom-grid">${denomHTML}</div>
        <div class="denom-total">
          <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${t("totalNotes")}</div>
          <div style="font-size:24px;font-weight:300;font-family:var(--mono);color:var(--accent);" id="denomTotal">${fmA(denomTotal)}</div>
          ${(totalCash>0||denomTotal>0)&&Math.abs(denomTotal-totalCash)>0.01?`<div style="font-size:11px;color:var(--amber);margin-top:6px;">⚠️ Mismatch: ${fmA(denomTotal-totalCash)}</div>`:""}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-head"><span class="card-title">Today's Vouchers</span><button class="btn btn-xs btn-ghost" onclick="nav('vouchers')">→</button></div>
      ${vList}
    </div>`;
}

function updateDenomTotal(){
  let tot=0;
  AED_DENOMS.forEach(d=>{
    const id=String(d).replace(".","_");
    const v=parseInt($("dn-"+id)?.value)||0;
    tot+=d*v;
  });
  if($("denomTotal"))$("denomTotal").textContent=fmA(tot);
}

async function saveDenominations(){
  for(const d of AED_DENOMS){
    const id=String(d).replace(".","_");
    const count=parseInt($("dn-"+id)?.value)||0;
    const ex=await sb.from("cash_denominations").select("id").eq("user_id",S.user.id).eq("denomination",d).maybeSingle();
    if(ex.data){await sb.from("cash_denominations").update({count,updated_at:new Date().toISOString()}).eq("id",ex.data.id);}
    else{await sb.from("cash_denominations").insert({user_id:S.user.id,denomination:d,count});}
    S.denominations[d]=count;
  }
  toast(t("saved"),"ok");rCashier();
}

// ── VOUCHERS ──
function showVoucher(type,editId){
  const v=editId?S.vouchers.find(x=>x.id===editId):null;
  const accOpts=S.accounts.map(a=>`<option value="${a.id}" ${v?.account_id===a.id?"selected":""}>${AICONS[a.type]} ${a.name}</option>`).join("");
  const curOpts=CURS.map(c=>`<option value="${c.code}" ${(v?v.currency:S.currency)===c.code?"selected":""}>${c.code} ${c.sym}</option>`).join("");
  const vNo=v?.voucher_no||nextVoucherNo(type);
  const title=type==="receipt"?t("receiptVoucher"):t("paymentVoucher");
  const partyLabel=type==="receipt"?t("receivedFrom"):t("paidTo");
  modal(title,`
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("voucherNo")}</label><input class="fc" id="vno" value="${vNo}"/></div>
      <div class="fg"><label class="fl">${t("date")}</label><input class="fc" type="date" id="vdate" value="${v?.date||today()}"/></div>
      <div class="fg"><label class="fl">${partyLabel}</label><input class="fc" id="vparty" value="${v?.party||""}" placeholder="Name / Company"/></div>
      <div class="fg"><label class="fl">${t("amount")}</label><input class="fc" type="number" id="vamt" value="${v?.amount||""}" step="0.01" placeholder="0.00"/></div>
      <div class="fg"><label class="fl">${t("currency")}</label><select class="fc" id="vcur">${curOpts}</select></div>
      <div class="fg"><label class="fl">${t("paymentMode")}</label><select class="fc" id="vpm">
        <option value="cash" ${v?.payment_mode==="cash"?"selected":""}>${t("cash")}</option>
        <option value="card" ${v?.payment_mode==="card"?"selected":""}>${t("card")}</option>
        <option value="bank" ${v?.payment_mode==="bank"?"selected":""}>${t("bank")} Transfer</option>
        <option value="cheque" ${v?.payment_mode==="cheque"?"selected":""}>${t("cheque")}</option>
      </select></div>
      <div class="fg"><label class="fl">${t("account")}</label><select class="fc" id="vacc">${accOpts}</select></div>
      <div class="fg"><label class="fl">${t("note")}</label><input class="fc" id="vnote" value="${v?.note||""}"/></div>
    </div>`,
    `${editId?`<button class="btn btn-danger btn-sm" onclick="delVoucher('${editId}')">✕</button>`:""}
     <button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="saveVoucher('${type}','${editId||""}')">${t("save")}</button>`);
}

async function saveVoucher(type,eid){
  const amt=parseFloat($("vamt")?.value);if(!amt||amt<=0){toast("Amount required","err");return;}
  let accountId=$("vacc")?.value||null;
  // Auto-create default cash account if user has none
  if(!accountId&&S.accounts.length===0){
    const newAcc=await ins("accounts",{type:"cash",name:"Cash Register",bank_name:"",card_no:"",balance:0,currency:"AED",credit_limit:0});
    if(newAcc){S.accounts.unshift(newAcc);accountId=newAcc.id;toast("Cash account created","info");}
  }
  // Account is now required
  if(!accountId){toast("Please select an account","err");return;}
  const row={voucher_no:$("vno")?.value||"",type,date:$("vdate")?.value||today(),party:$("vparty")?.value||"",amount:amt,currency:$("vcur")?.value||"AED",payment_mode:$("vpm")?.value||"cash",account_id:accountId,note:$("vnote")?.value||""};
  if(eid){
    await upd("vouchers",eid,row);
    const i=S.vouchers.findIndex(x=>x.id===eid);if(i>=0)S.vouchers[i]={...S.vouchers[i],...row};
  }else{
    const d=await ins("vouchers",row);if(!d)return;
    S.vouchers.unshift(d);
    // Update account balance & create transaction
    if(accountId){
      const acc=getAcc(accountId);
      if(acc){
        const newBal=(acc.balance||0)+(type==="receipt"?amt:-amt);
        await upd("accounts",accountId,{balance:newBal});
        acc.balance=newBal;
      }
    }
    const tx=await ins("transactions",{type:type==="receipt"?"income":"expense",amount:amt,currency:row.currency,account_id:accountId,category:type==="receipt"?"sales":"other",note:`${row.voucher_no} - ${row.party}`,date:row.date});
    if(tx)S.transactions.unshift(tx);
  }
  closeModal(true);toast(t("saved"),"ok");render(S.page);
}

async function delVoucher(id){
  if(!confirm(t("confirmDel")))return;
  await del("vouchers",id);S.vouchers=S.vouchers.filter(x=>x.id!==id);
  closeModal(true);toast(t("deleted"),"info");render(S.page);
}

function rVouchers(){
  let vs=S.vouchers;
  if(S.pillFilter==="receipt")vs=vs.filter(v=>v.type==="receipt");
  if(S.pillFilter==="payment")vs=vs.filter(v=>v.type==="payment");
  const q=S.searchQ.toLowerCase();
  if(q)vs=vs.filter(v=>(v.party||"").toLowerCase().includes(q)||(v.voucher_no||"").toLowerCase().includes(q));
  
  const list=vs.map(v=>`
    <div class="list-item" onclick="showVoucherDetail('${v.id}')">
      <div class="list-icon" style="background:${v.type==="receipt"?"var(--green-dim)":"var(--red-dim)"};color:${v.type==="receipt"?"var(--green)":"var(--red)"};">${v.type==="receipt"?"📥":"📤"}</div>
      <div class="list-content"><div class="list-title">${v.party||v.voucher_no}</div><div class="list-sub">${v.voucher_no} · ${fmD(v.date)} · ${v.payment_mode}</div></div>
      <div class="list-right"><div class="list-amount" style="color:${v.type==="receipt"?"var(--green)":"var(--red)"};">${v.type==="receipt"?"+":"−"}${fmA(v.amount,v.currency)}</div></div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">📋</div><p>${t("noRecords")}</p></div>`;

  const totRcpt=S.vouchers.filter(v=>v.type==="receipt").reduce((s,v)=>s+v.amount,0);
  const totPmnt=S.vouchers.filter(v=>v.type==="payment").reduce((s,v)=>s+v.amount,0);
  
  $("p-vouchers").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("vouchers")}</div><div class="page-sub">In: ${fmA(totRcpt)} · Out: ${fmA(totPmnt)}</div></div>
      <div style="display:flex;gap:6px;"><button class="btn btn-success btn-sm" onclick="showVoucher('receipt')">+ ${t("receipt")}</button><button class="btn btn-danger btn-sm" onclick="showVoucher('payment')">+ ${t("payment")}</button></div>
    </div>
    <div class="search-box"><span class="search-icon">🔍</span><input class="fc" placeholder="${t("search")}..." oninput="S.searchQ=this.value;rVouchers()" value="${S.searchQ}"/></div>
    <div class="pills">
      <button class="pill ${S.pillFilter==="all"?"on":""}" onclick="S.pillFilter='all';rVouchers()">All</button>
      <button class="pill ${S.pillFilter==="receipt"?"on":""}" onclick="S.pillFilter='receipt';rVouchers()">${t("receipt")}</button>
      <button class="pill ${S.pillFilter==="payment"?"on":""}" onclick="S.pillFilter='payment';rVouchers()">${t("payment")}</button>
    </div>
    <div class="card">${list}</div>`;
}

function showVoucherDetail(id){
  const v=S.vouchers.find(x=>x.id===id);if(!v)return;
  modal(v.type==="receipt"?t("receiptVoucher"):t("paymentVoucher"),`
    <div style="text-align:center;padding:20px;background:var(--glass);border-radius:14px;margin-bottom:14px;">
      <div style="font-size:34px;font-weight:300;font-family:var(--mono);color:${v.type==="receipt"?"var(--green)":"var(--red)"};">${v.type==="receipt"?"+":"−"}${fmA(v.amount,v.currency)}</div>
      <div style="font-size:13px;color:var(--text3);margin-top:6px;">${v.voucher_no}</div>
    </div>
    <div class="card">
      ${[[v.type==="receipt"?t("receivedFrom"):t("paidTo"),v.party||"—"],[t("date"),fmD(v.date)],[t("paymentMode"),v.payment_mode],[t("account"),getAccName(v.account_id)],[t("note"),v.note||"—"]].map(([k,vv])=>`<div class="list-item"><div class="list-content"><div class="list-sub">${k}</div><div class="list-title" style="font-size:13px;">${vv}</div></div></div>`).join("")}
    </div>`,
    `<button class="btn btn-danger btn-sm" onclick="delVoucher('${id}')">✕</button>
     <button class="btn btn-ghost btn-sm" onclick="printVoucher('${id}')">🖨</button>
     <button class="btn btn-ghost btn-sm" onclick="pdfVoucher('${id}')">📄</button>
     <button class="btn btn-ghost btn-sm" onclick="closeModal(true);showVoucher('${v.type}','${id}')">✎</button>
     <button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`);
}

function printVoucher(id){
  const v=S.vouchers.find(x=>x.id===id);if(!v)return;
  const win=window.open("","_blank");
  const title=v.type==="receipt"?"RECEIPT VOUCHER":"PAYMENT VOUCHER";
  win.document.write(`<html><head><title>${v.voucher_no}</title><style>body{font-family:Arial,sans-serif;padding:30px;color:#000;max-width:600px;margin:0 auto;} h1{color:${v.type==="receipt"?"#10b981":"#ef4444"};border-bottom:2px solid #ddd;padding-bottom:10px;} .row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #eee;} .label{color:#666;font-size:14px;} .val{font-weight:bold;} .amt{font-size:36px;text-align:center;padding:20px;background:#f5f5f5;border-radius:8px;margin:20px 0;color:${v.type==="receipt"?"#10b981":"#ef4444"};} .company{margin-bottom:20px;text-align:center;color:#666;}</style></head><body>
    ${S.profile.name?`<div class="company"><h2>${S.profile.name}</h2><div>${S.profile.address||""}</div><div>${S.profile.phone||""}</div></div>`:""}
    <h1>${title}</h1>
    <div class="row"><span class="label">Voucher No:</span><span class="val">${v.voucher_no}</span></div>
    <div class="row"><span class="label">Date:</span><span class="val">${fmD(v.date)}</span></div>
    <div class="row"><span class="label">${v.type==="receipt"?"Received From":"Paid To"}:</span><span class="val">${v.party}</span></div>
    <div class="row"><span class="label">Payment Mode:</span><span class="val">${v.payment_mode}</span></div>
    <div class="row"><span class="label">Note:</span><span class="val">${v.note||"—"}</span></div>
    <div class="amt">${fmA(v.amount,v.currency)}</div>
    <div style="margin-top:50px;display:flex;justify-content:space-between;"><div>____________<br>Prepared By</div><div>____________<br>Received By</div></div>
  </body></html>`);
  win.document.close();setTimeout(()=>win.print(),400);
}

function pdfVoucher(id){
  const v=S.vouchers.find(x=>x.id===id);if(!v)return;
  try{
    const {jsPDF}=window.jspdf;const doc=new jsPDF();let y=20;
    if(S.profile.name){doc.setFontSize(14);doc.setFont("helvetica","bold");doc.text(S.profile.name,20,y);y+=8;}
    doc.setFontSize(22);doc.setTextColor(v.type==="receipt"?16:239,v.type==="receipt"?185:68,v.type==="receipt"?129:68);
    doc.text(v.type==="receipt"?"RECEIPT VOUCHER":"PAYMENT VOUCHER",20,y);y+=12;
    doc.setFontSize(11);doc.setTextColor(0,0,0);
    [["Voucher No",v.voucher_no],["Date",fmD(v.date)],[v.type==="receipt"?"Received From":"Paid To",v.party],["Mode",v.payment_mode],["Note",v.note||"-"]].forEach(([k,vv])=>{doc.text(`${k}: ${vv}`,20,y);y+=8;});
    y+=8;doc.setFontSize(18);doc.setFont("helvetica","bold");doc.text(`Amount: ${fmA(v.amount,v.currency)}`,20,y);
    doc.save(`${v.voucher_no}.pdf`);toast("PDF saved","ok");
  }catch(e){toast("PDF error","err");}
}

// ── CHEQUES IN (received) ──
function rChIn(){
  const list=S.cheques_in.map(c=>{
    const sb={pending:"b-amber",cleared:"b-green",bounced:"b-red"};
    return `<div class="list-item" onclick="showChInDetail('${c.id}')">
      <div class="list-icon" style="background:var(--teal-dim);color:var(--teal);">📥</div>
      <div class="list-content"><div class="list-title">${c.drawer||"—"}</div><div class="list-sub">#${c.cheque_no||"—"} · ${fmD(c.due_date)}</div></div>
      <div class="list-right"><div class="list-amount" style="color:var(--green);">${fmA(c.amount,c.currency)}</div><div class="list-meta"><span class="badge ${sb[c.status]}">${t(c.status)||c.status}</span></div></div>
    </div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">📥</div><p>${t("noRecords")}</p></div>`;
  const tot=S.cheques_in.filter(c=>c.status==="pending").reduce((s,c)=>s+c.amount,0);
  $("p-chequesIn").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("chequesIn")}</div><div class="page-sub">${t("pending")}: ${fmA(tot)}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showChIn()">+ ${t("newChequeIn")}</button>
    </div>
    <div class="card">${list}</div>`;
}

function showChIn(eid){
  const c=eid?S.cheques_in.find(x=>x.id===eid):null;
  const curOpts=CURS.map(cu=>`<option value="${cu.code}" ${(c?c.currency:"AED")===cu.code?"selected":""}>${cu.code}</option>`).join("");
  modal(t("newChequeIn"),`
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("chequeNo")}</label><input class="fc" id="cino" value="${c?.cheque_no||""}"/></div>
      <div class="fg"><label class="fl">${t("drawer")}</label><input class="fc" id="cidr" value="${c?.drawer||""}" placeholder="Customer name"/></div>
      <div class="fg"><label class="fl">${t("amount")}</label><input class="fc" type="number" id="ciamt" value="${c?.amount||""}"/></div>
      <div class="fg"><label class="fl">${t("currency")}</label><select class="fc" id="cicur">${curOpts}</select></div>
      <div class="fg"><label class="fl">${t("bankName")}</label><input class="fc" id="cibank" value="${c?.bank||""}"/></div>
      <div class="fg"><label class="fl">${t("issueDate")}</label><input class="fc" type="date" id="ciid" value="${c?.issue_date||today()}"/></div>
      <div class="fg"><label class="fl">${t("dueDate")}</label><input class="fc" type="date" id="cidd" value="${c?.due_date||""}"/></div>
      <div class="fg"><label class="fl">${t("status")}</label><select class="fc" id="cistat">
        <option value="pending" ${c?.status==="pending"?"selected":""}>${t("pending")}</option>
        <option value="cleared" ${c?.status==="cleared"?"selected":""}>${t("cleared")}</option>
        <option value="bounced" ${c?.status==="bounced"?"selected":""}>${t("bounced")}</option>
      </select></div>
      <div class="fg"><label class="fl">${t("note")}</label><input class="fc" id="cinote" value="${c?.note||""}"/></div>
    </div>`,
    `${eid?`<button class="btn btn-danger btn-sm" onclick="delChIn('${eid}')">✕</button>`:""}
     <button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="saveChIn('${eid||""}')">${t("save")}</button>`);
}

async function saveChIn(eid){
  const amt=parseFloat($("ciamt")?.value);if(!amt){toast("Amount?","err");return;}
  const row={cheque_no:$("cino")?.value||"",drawer:$("cidr")?.value||"",amount:amt,currency:$("cicur")?.value||"AED",bank:$("cibank")?.value||"",issue_date:$("ciid")?.value||null,due_date:$("cidd")?.value||null,status:$("cistat")?.value||"pending",note:$("cinote")?.value||""};
  if(eid){await upd("cheques_in",eid,row);const i=S.cheques_in.findIndex(x=>x.id===eid);if(i>=0)S.cheques_in[i]={...S.cheques_in[i],...row};}
  else{const d=await ins("cheques_in",row);if(!d)return;S.cheques_in.unshift(d);}
  closeModal(true);toast(t("saved"),"ok");render("chequesIn");
}

function showChInDetail(id){
  const c=S.cheques_in.find(x=>x.id===id);if(!c)return;
  showChIn(id);
}

async function delChIn(id){
  if(!confirm(t("confirmDel")))return;
  await del("cheques_in",id);S.cheques_in=S.cheques_in.filter(x=>x.id!==id);
  closeModal(true);toast(t("deleted"),"info");render("chequesIn");
}

// ── CHEQUES OUT (issued) ──
function rChOut(){
  const list=S.cheques_out.map(c=>{
    const sb={pending:"b-amber",cleared:"b-green",bounced:"b-red"};
    return `<div class="list-item" onclick="showChOut('${c.id}')">
      <div class="list-icon" style="background:var(--amber-dim);color:var(--amber);">📤</div>
      <div class="list-content"><div class="list-title">${c.payee||"—"}</div><div class="list-sub">#${c.cheque_no||"—"} · ${fmD(c.due_date)}</div></div>
      <div class="list-right"><div class="list-amount" style="color:var(--red);">${fmA(c.amount,c.currency)}</div><div class="list-meta"><span class="badge ${sb[c.status]}">${t(c.status)||c.status}</span></div></div>
    </div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">📤</div><p>${t("noRecords")}</p></div>`;
  const tot=S.cheques_out.filter(c=>c.status==="pending").reduce((s,c)=>s+c.amount,0);
  $("p-chequesOut").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("chequesOut")}</div><div class="page-sub">${t("pending")}: ${fmA(tot)}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showChOut()">+ ${t("newChequeOut")}</button>
    </div>
    <div class="card">${list}</div>`;
}

function showChOut(eid){
  const c=eid?S.cheques_out.find(x=>x.id===eid):null;
  const curOpts=CURS.map(cu=>`<option value="${cu.code}" ${(c?c.currency:"AED")===cu.code?"selected":""}>${cu.code}</option>`).join("");
  modal(t("newChequeOut"),`
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("chequeNo")}</label><input class="fc" id="cono" value="${c?.cheque_no||""}"/></div>
      <div class="fg"><label class="fl">${t("payee")}</label><input class="fc" id="copay" value="${c?.payee||""}" placeholder="Supplier name"/></div>
      <div class="fg"><label class="fl">${t("amount")}</label><input class="fc" type="number" id="coamt" value="${c?.amount||""}"/></div>
      <div class="fg"><label class="fl">${t("currency")}</label><select class="fc" id="cocur">${curOpts}</select></div>
      <div class="fg"><label class="fl">${t("bankName")}</label><input class="fc" id="cobank" value="${c?.bank||""}"/></div>
      <div class="fg"><label class="fl">${t("issueDate")}</label><input class="fc" type="date" id="coid" value="${c?.issue_date||today()}"/></div>
      <div class="fg"><label class="fl">${t("dueDate")}</label><input class="fc" type="date" id="codd" value="${c?.due_date||""}"/></div>
      <div class="fg"><label class="fl">${t("status")}</label><select class="fc" id="costat">
        <option value="pending" ${c?.status==="pending"?"selected":""}>${t("pending")}</option>
        <option value="cleared" ${c?.status==="cleared"?"selected":""}>${t("cleared")}</option>
        <option value="bounced" ${c?.status==="bounced"?"selected":""}>${t("bounced")}</option>
      </select></div>
      <div class="fg"><label class="fl">${t("note")}</label><input class="fc" id="conote" value="${c?.note||""}"/></div>
    </div>`,
    `${eid?`<button class="btn btn-danger btn-sm" onclick="delChOut('${eid}')">✕</button>`:""}
     <button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="saveChOut('${eid||""}')">${t("save")}</button>`);
}

async function saveChOut(eid){
  const amt=parseFloat($("coamt")?.value);if(!amt){toast("Amount?","err");return;}
  const row={cheque_no:$("cono")?.value||"",payee:$("copay")?.value||"",amount:amt,currency:$("cocur")?.value||"AED",bank:$("cobank")?.value||"",issue_date:$("coid")?.value||null,due_date:$("codd")?.value||null,status:$("costat")?.value||"pending",note:$("conote")?.value||""};
  if(eid){await upd("cheques_out",eid,row);const i=S.cheques_out.findIndex(x=>x.id===eid);if(i>=0)S.cheques_out[i]={...S.cheques_out[i],...row};}
  else{const d=await ins("cheques_out",row);if(!d)return;S.cheques_out.unshift(d);}
  closeModal(true);toast(t("saved"),"ok");render("chequesOut");
}

async function delChOut(id){
  if(!confirm(t("confirmDel")))return;
  await del("cheques_out",id);S.cheques_out=S.cheques_out.filter(x=>x.id!==id);
  closeModal(true);toast(t("deleted"),"info");render("chequesOut");
}


// ── POS ──
function rPOS(){
  const cards=S.products.map(p=>`
    <div class="pos-card" onclick="addToCart('${p.id}')">
      <div class="pos-img">${p.image_url?`<img src="${p.image_url}">`:"📦"}</div>
      <div class="pos-name">${p.name}</div>
      <div class="pos-price">${fmA(p.sell_price||0)}</div>
      <div class="pos-stock">Stock: ${p.stock||0}</div>
    </div>`).join("")||`<div style="grid-column:1/-1;"><div class="empty"><div class="empty-icon">📦</div><p>${t("noRecords")}</p><button class="btn btn-primary btn-sm" onclick="showAddProduct()" style="margin-top:10px;">+ Product</button></div></div>`;
  const total=S.cart.reduce((s,it)=>s+it.price*it.qty,0);
  const count=S.cart.reduce((s,it)=>s+it.qty,0);
  $("p-pos").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("pos")}</div><div class="page-sub">${S.products.length} products</div></div>
      <button class="btn btn-secondary btn-sm" onclick="showAddProduct()">+ Product</button>
    </div>
    <div class="pos-grid">${cards}</div>
    ${S.cart.length>0?`<div style="position:fixed;bottom:calc(72px + env(safe-area-inset-bottom));left:0;right:0;background:rgba(16,23,42,.95);backdrop-filter:blur(20px);border-top:1px solid var(--glass-border);padding:14px;z-index:80;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div><div style="font-size:11px;color:var(--text3);">${count} items</div><div style="font-size:22px;font-family:var(--mono);font-weight:700;">${fmA(total)}</div></div>
        <div style="display:flex;gap:6px;"><button class="btn btn-ghost btn-sm" onclick="showCart()">View</button><button class="btn btn-primary" onclick="checkout()">Checkout →</button></div>
      </div></div>`:""}`;
}
function addToCart(pid){
  const p=S.products.find(x=>x.id===pid);if(!p)return;
  const ex=S.cart.find(c=>c.product_id===pid);
  if(ex)ex.qty++;else S.cart.push({product_id:pid,name:p.name,price:p.sell_price||0,qty:1});
  toast(`+ ${p.name}`,"ok");render("pos");
}
function showCart(){
  const items=S.cart.map((it,i)=>`<div class="list-item"><div class="list-content"><div class="list-title">${it.name}</div><div class="list-sub">${fmA(it.price)} × ${it.qty}</div></div><div class="list-right"><div style="display:flex;align-items:center;gap:8px;"><button class="btn btn-icon btn-ghost btn-sm" onclick="S.cart[${i}].qty=Math.max(1,S.cart[${i}].qty-1);showCart()">−</button><span style="font-weight:700;">${it.qty}</span><button class="btn btn-icon btn-ghost btn-sm" onclick="S.cart[${i}].qty++;showCart()">+</button></div><div class="list-amount">${fmA(it.price*it.qty)}</div></div></div>`).join("")||`<div class="empty"><p>Empty cart</p></div>`;
  const total=S.cart.reduce((s,it)=>s+it.price*it.qty,0);
  modal("Cart",`<div class="card">${items}</div><div style="background:var(--glass);padding:14px;border-radius:10px;margin-top:14px;"><div style="display:flex;justify-content:space-between;font-size:18px;font-weight:700;"><span>Total</span><span style="font-family:var(--mono);color:var(--accent);">${fmA(total)}</span></div></div>`,
    `<button class="btn btn-danger btn-sm" onclick="S.cart=[];closeModal(true);render('pos')">Clear</button><button class="btn btn-primary" onclick="closeModal(true);checkout()">Checkout →</button>`);
}
function checkout(){
  if(S.cart.length===0){toast("Cart empty","err");return;}
  const accOpts=S.accounts.map(a=>`<option value="${a.id}">${AICONS[a.type]} ${a.name}</option>`).join("");
  const total=S.cart.reduce((s,it)=>s+it.price*it.qty,0);
  modal("Checkout",`
    <div style="background:linear-gradient(135deg,var(--accent-dim),var(--purple-dim));padding:18px;border-radius:14px;margin-bottom:14px;text-align:center;">
      <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;">Total</div>
      <div style="font-size:32px;font-family:var(--mono);font-weight:300;color:var(--accent);">${fmA(total)}</div>
    </div>
    <div class="fg"><label class="fl">Account</label><select class="fc" id="poacc">${accOpts}</select></div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
      <button class="btn btn-success" onclick="completeCheckout('cash')">💵 ${t("cashSale")}</button>
      <button class="btn btn-primary" onclick="completeCheckout('card')">💳 ${t("cardSale")}</button>
      <button class="btn btn-amber" onclick="completeCheckout('credit')">📝 ${t("creditSale")}</button>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>`);
}
async function completeCheckout(method){
  const accId=$("poacc")?.value;
  const total=S.cart.reduce((s,it)=>s+it.price*it.qty,0);
  const items=S.cart.map(it=>({name:it.name,qty:it.qty,unit_price:it.price,total:it.price*it.qty,product_id:it.product_id}));
  const posNums=S.invoices.filter(i=>String(i.invoice_no||"").startsWith("POS-")).map(i=>{const m=String(i.invoice_no).match(/POS-(\d+)/);return m?parseInt(m[1]):0;});
  const invNo="POS-"+String(Math.max(0,...posNums)+1).padStart(4,"0");
  const status=method==="credit"?"submitted":"paid";
  const inv=await ins("invoices",{invoice_no:invNo,date:today(),customer_id:null,currency:S.currency,payment_method:method,subtotal:total,grand_total:total,tax_pct:0,disc_pct:0,tax_amount:0,disc_amount:0,note:"POS Sale",account_id:accId,status,items});
  if(!inv)return;
  S.invoices.unshift(inv);
  for(const it of S.cart){const p=S.products.find(x=>x.id===it.product_id);if(p){p.stock=Math.max(0,(p.stock||0)-it.qty);await upd("products",p.id,{stock:p.stock});}}
  if(method!=="credit"&&accId){
    const acc=getAcc(accId);if(acc){acc.balance=(acc.balance||0)+total;await upd("accounts",accId,{balance:acc.balance});}
    const tx=await ins("transactions",{type:"income",amount:total,currency:S.currency,account_id:accId,category:"sales",note:invNo,date:today()});
    if(tx)S.transactions.unshift(tx);
  }
  S.cart=[];closeModal(true);toast(`${t("saved")} ${invNo}`,"ok");render("pos");
}

// ── ACCOUNTS ──
function rAcc(){
  const cards=S.accounts.map(a=>`
    <div class="list-item" onclick="showAddAcc('${a.id}')">
      <div class="list-icon">${AICONS[a.type]}</div>
      <div class="list-content"><div class="list-title">${a.name}</div><div class="list-sub">${a.bank_name||t(a.type)}${a.card_no?" · ····"+a.card_no:""}</div></div>
      <div class="list-right"><div class="list-amount" style="color:${a.type==="credit"?"var(--red)":(a.balance||0)<S.lowBalanceThreshold?"var(--amber)":"var(--text)"};">${a.type==="credit"?"-":""}${fmA(a.balance||0,a.currency)}</div><div class="list-meta">${a.currency}</div></div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">🏦</div><p>${t("noRecords")}</p></div>`;
  $("p-accounts").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("accounts")}</div><div class="page-sub">${S.accounts.length} · Net: ${fmA(calcNW().net)}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddAcc()">+ ${t("add")}</button></div>
    <div class="card">${cards}</div>`;
}
function showAddAcc(eid){
  const a=eid?S.accounts.find(x=>x.id===eid):null;
  const typeOpts=ATYPES.map(tp=>`<option value="${tp}" ${(a?.type===tp)||(!a&&tp==="bank")?"selected":""}>${AICONS[tp]} ${t(tp)}</option>`).join("");
  const curOpts=CURS.map(c=>`<option value="${c.code}" ${(a?a.currency:S.currency)===c.code?"selected":""}>${c.code} ${c.sym}</option>`).join("");
  modal(eid?t("edit"):t("add")+" "+t("accounts"),`
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("type")}</label><select class="fc" id="at" onchange="togAcc()">${typeOpts}</select></div>
      <div class="fg"><label class="fl">${t("name")}</label><input class="fc" id="an" value="${a?.name||""}"/></div>
      <div class="fg"><label class="fl">Bank Name</label><input class="fc" id="ab" value="${a?.bank_name||""}"/></div>
      <div class="fg" id="fw-card"><label class="fl">Card last 4</label><input class="fc" id="acard" maxlength="4" value="${a?.card_no||""}"/></div>
      <div class="fg"><label class="fl">${t("balance")}</label><input class="fc" type="number" id="abal" value="${a?.balance||0}" step="0.01"/></div>
      <div class="fg"><label class="fl">${t("currency")}</label><select class="fc" id="acur">${curOpts}</select></div>
      <div class="fg" id="fw-lim"><label class="fl">Credit Limit</label><input class="fc" type="number" id="alim" value="${a?.credit_limit||0}"/></div>
    </div>`,
    `${eid?`<button class="btn btn-danger btn-sm" onclick="delAcc('${eid}')">✕</button>`:""}
     <button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="saveAcc('${eid||""}')">${t("save")}</button>`);
  togAcc();
}
function togAcc(){
  const tp=$("at")?.value;
  const sh=(id,v)=>{const e=$(id);if(e)e.style.display=v?"":"none";};
  sh("fw-card",["debit","credit"].includes(tp));sh("fw-lim",tp==="credit");
}
async function saveAcc(eid){
  const name=$("an")?.value?.trim();if(!name){toast("Name?","err");return;}
  const row={type:$("at")?.value,name,bank_name:$("ab")?.value||"",card_no:$("acard")?.value||"",balance:parseFloat($("abal")?.value)||0,currency:$("acur")?.value,credit_limit:parseFloat($("alim")?.value)||0};
  if(eid){await upd("accounts",eid,row);const i=S.accounts.findIndex(x=>x.id===eid);if(i>=0)S.accounts[i]={...S.accounts[i],...row};}
  else{const d=await ins("accounts",row);if(!d)return;S.accounts.unshift(d);}
  closeModal(true);toast(t("saved"),"ok");render("accounts");
}
async function delAcc(id){
  const acc=getAcc(id);if(!acc)return;
  const relatedTx=S.transactions.filter(x=>x.account_id===id).length;
  const relatedV=S.vouchers.filter(x=>x.account_id===id).length;
  const relatedInv=S.invoices.filter(x=>x.account_id===id).length;
  const total=relatedTx+relatedV+relatedInv;
  const msg=total>0?`Delete "${acc.name}" and its ${relatedTx} transactions, ${relatedV} vouchers, ${relatedInv} invoices?`:t("confirmDel");
  if(!confirm(msg))return;
  // Cascade delete
  if(relatedTx>0){await sb.from("transactions").delete().eq("account_id",id).eq("user_id",S.user.id);S.transactions=S.transactions.filter(x=>x.account_id!==id);}
  if(relatedV>0){await sb.from("vouchers").delete().eq("account_id",id).eq("user_id",S.user.id);S.vouchers=S.vouchers.filter(x=>x.account_id!==id);}
  if(relatedInv>0){await sb.from("invoices").delete().eq("account_id",id).eq("user_id",S.user.id);S.invoices=S.invoices.filter(x=>x.account_id!==id);}
  await del("accounts",id);S.accounts=S.accounts.filter(x=>x.id!==id);
  closeModal(true);toast(t("deleted"),"info");render("accounts");
}

// ── TRANSACTIONS ──
function rTx(){
  const q=S.searchQ.toLowerCase();
  let txs=S.transactions;
  if(q)txs=txs.filter(tx=>(tx.note||"").toLowerCase().includes(q)||(tx.category||"").toLowerCase().includes(q));
  if(S.pillFilter==="income")txs=txs.filter(t=>t.type==="income");
  if(S.pillFilter==="expense")txs=txs.filter(t=>t.type==="expense");
  const list=txs.map(tx=>`
    <div class="list-item" onclick="showTxDetail('${tx.id}')">
      <div class="list-icon" style="background:${tx.type==="income"?"var(--green-dim)":"var(--red-dim)"};color:${tx.type==="income"?"var(--green)":"var(--red)"};">${tx.type==="income"?"↑":"↓"}</div>
      <div class="list-content"><div class="list-title">${tx.note||tx.category||"—"}</div><div class="list-sub">${getAccName(tx.account_id)} · ${fmD(tx.date)}</div></div>
      <div class="list-right"><div class="list-amount" style="color:${tx.type==="income"?"var(--green)":"var(--red)"};">${tx.type==="income"?"+":"−"}${fmA(tx.amount,tx.currency)}</div></div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">💸</div><p>${t("noRecords")}</p></div>`;
  $("p-transactions").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("transactions")}</div><div class="page-sub">${txs.length} records</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddTx()">+ ${t("add")}</button></div>
    <div class="search-box"><span class="search-icon">🔍</span><input class="fc" placeholder="${t("search")}..." oninput="S.searchQ=this.value;rTx()" value="${S.searchQ}"/></div>
    <div class="pills">
      <button class="pill ${S.pillFilter==="all"?"on":""}" onclick="S.pillFilter='all';rTx()">All</button>
      <button class="pill ${S.pillFilter==="income"?"on":""}" onclick="S.pillFilter='income';rTx()">${t("income")}</button>
      <button class="pill ${S.pillFilter==="expense"?"on":""}" onclick="S.pillFilter='expense';rTx()">${t("expense")}</button>
    </div>
    <div class="card">${list}</div>`;
}
function showAddTx(){
  const accOpts=S.accounts.map(a=>`<option value="${a.id}">${AICONS[a.type]} ${a.name}</option>`).join("");
  const curOpts=CURS.map(c=>`<option value="${c.code}" ${c.code===S.currency?"selected":""}>${c.code}</option>`).join("");
  const catOpts=TCATS.map(c=>`<option value="${c}">${c}</option>`).join("");
  modal(t("add")+" "+t("transactions"),`
    <div style="display:flex;gap:6px;margin-bottom:14px;">
      <button class="btn btn-success btn-fullwidth" id="tbt-i" onclick="setTxT('income')">${t("income")}</button>
      <button class="btn btn-secondary btn-fullwidth" id="tbt-e" onclick="setTxT('expense')">${t("expense")}</button>
    </div>
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("amount")}</label><input class="fc" type="number" id="txamt" step="0.01"/></div>
      <div class="fg"><label class="fl">${t("currency")}</label><select class="fc" id="txcur">${curOpts}</select></div>
      <div class="fg"><label class="fl">${t("account")}</label><select class="fc" id="txacc">${accOpts||"<option value=''>None</option>"}</select></div>
      <div class="fg"><label class="fl">${t("category")}</label><select class="fc" id="txcat">${catOpts}</select></div>
      <div class="fg"><label class="fl">${t("date")}</label><input class="fc" type="date" id="txdate" value="${today()}"/></div>
      <div class="fg"><label class="fl">${t("note")}</label><input class="fc" id="txnote"/></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveTx()">${t("save")}</button>`);
  window._txType="income";
}
function setTxT(tp){window._txType=tp;$("tbt-i").className=`btn btn-fullwidth ${tp==="income"?"btn-success":"btn-secondary"}`;$("tbt-e").className=`btn btn-fullwidth ${tp==="expense"?"btn-danger":"btn-secondary"}`;}
async function saveTx(){
  const amt=parseFloat($("txamt")?.value);if(!amt||amt<=0){toast("Amount?","err");return;}
  const accId=$("txacc")?.value||null;const type=window._txType||"expense";
  const row={type,amount:amt,currency:$("txcur")?.value,account_id:accId,category:$("txcat")?.value,note:$("txnote")?.value||"",date:$("txdate")?.value||today()};
  const d=await ins("transactions",row);if(!d)return;S.transactions.unshift(d);
  if(accId){const acc=getAcc(accId);if(acc){const nb=(acc.balance||0)+(type==="income"?amt:-amt);await upd("accounts",accId,{balance:nb});acc.balance=nb;}}
  closeModal(true);toast(t("saved"),"ok");render(S.page);
}
async function delTx(id){if(!confirm(t("confirmDel")))return;await del("transactions",id);S.transactions=S.transactions.filter(x=>x.id!==id);toast(t("deleted"),"info");render("transactions");}
function showTxDetail(id){
  const tx=S.transactions.find(x=>x.id===id);if(!tx)return;
  modal("Transaction",`<div style="text-align:center;padding:20px;"><div style="font-size:32px;font-family:var(--mono);font-weight:300;color:${tx.type==="income"?"var(--green)":"var(--red)"};">${tx.type==="income"?"+":"−"}${fmA(tx.amount,tx.currency)}</div></div>
    <div class="card">${[["Category",tx.category],["Note",tx.note||"—"],["Account",getAccName(tx.account_id)],["Date",fmD(tx.date)]].map(([k,v])=>`<div class="list-item"><div class="list-content"><div class="list-sub">${k}</div><div class="list-title" style="font-size:13px;">${v}</div></div></div>`).join("")}</div>`,
    `<button class="btn btn-danger btn-sm" onclick="closeModal(true);delTx('${id}')">✕</button><button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`);
}

// ── INVOICES ──
function rInv(){
  let invs=S.invoices;
  if(S.pillFilter==="paid")invs=invs.filter(i=>i.status==="paid");
  if(S.pillFilter==="submitted")invs=invs.filter(i=>i.status==="submitted");
  const list=invs.map(inv=>{
    const sb={draft:"b-gray",submitted:"b-blue",paid:"b-green",cancelled:"b-red"};
    return `<div class="list-item" onclick="showInvDetail('${inv.id}')">
      <div class="list-icon">🧾</div>
      <div class="list-content"><div class="list-title">${inv.invoice_no||"—"}</div><div class="list-sub">${getCustName(inv.customer_id)} · ${fmD(inv.date)}</div></div>
      <div class="list-right"><div class="list-amount">${fmA(inv.grand_total||0,inv.currency)}</div><div class="list-meta"><span class="badge ${sb[inv.status]||"b-gray"}">${t(inv.status)||inv.status}</span></div></div>
    </div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">🧾</div><p>${t("noRecords")}</p></div>`;
  $("p-invoices").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("invoices")}</div><div class="page-sub">Outstanding: ${fmA(outstandingTotal())}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddInv()">+ ${t("add")}</button></div>
    <div class="pills">
      <button class="pill ${S.pillFilter==="all"?"on":""}" onclick="S.pillFilter='all';rInv()">All</button>
      <button class="pill ${S.pillFilter==="paid"?"on":""}" onclick="S.pillFilter='paid';rInv()">${t("paid")}</button>
      <button class="pill ${S.pillFilter==="submitted"?"on":""}" onclick="S.pillFilter='submitted';rInv()">${t("submitted")}</button>
    </div>
    <div class="card">${list}</div>`;
}
function showAddInv(){
  S.invItems=[{name:"",qty:1,unit_price:0,total:0}];
  const custOpts=S.customers.map(c=>`<option value="${c.id}">${c.name}</option>`).join("")||"<option value=''>None</option>";
  const accOpts=S.accounts.map(a=>`<option value="${a.id}">${AICONS[a.type]} ${a.name}</option>`).join("");
  const invNo=nextInvoiceNo();
  modal("New Invoice",`
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("invoiceNo")}</label><input class="fc" id="invno" value="${invNo}"/></div>
      <div class="fg"><label class="fl">${t("customer")}</label><select class="fc" id="invcust">${custOpts}</select></div>
      <div class="fg"><label class="fl">${t("date")}</label><input class="fc" type="date" id="invdate" value="${today()}"/></div>
      <div class="fg"><label class="fl">${t("dueDate")}</label><input class="fc" type="date" id="invdue"/></div>
    </div>
    <div style="font-size:11px;color:var(--text3);text-transform:uppercase;margin:14px 0 8px;">${t("items")}</div>
    <div id="iitems"></div>
    <button class="btn btn-ghost btn-sm btn-fullwidth" onclick="addII()">+ ${t("addItem")}</button>
    <div class="fgrid" style="margin-top:14px;">
      <div class="fg"><label class="fl">${t("tax")}</label><input class="fc" type="number" id="invtax" value="0" oninput="calcInv()"/></div>
      <div class="fg"><label class="fl">${t("discount")}</label><input class="fc" type="number" id="invdisc" value="0" oninput="calcInv()"/></div>
      <div class="fg"><label class="fl">${t("paymentMode")}</label><select class="fc" id="invpm"><option value="cash">${t("cash")}</option><option value="card">${t("card")}</option><option value="credit">${t("credit")}</option></select></div>
      <div class="fg"><label class="fl">${t("account")}</label><select class="fc" id="invacc">${accOpts}</select></div>
    </div>
    <div style="background:var(--glass);padding:14px;border-radius:10px;margin-top:12px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;color:var(--text3);"><span>${t("subtotal")}</span><span id="i-sub">0</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;color:var(--text3);"><span>${t("tax")}</span><span id="i-tax">0</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;color:var(--text3);"><span>${t("discount")}</span><span id="i-disc">0</span></div>
      <div style="display:flex;justify-content:space-between;padding-top:10px;border-top:1px solid var(--border);font-weight:700;font-size:17px;"><span>${t("grandTotal")}</span><span id="i-grand" style="color:var(--accent);font-family:var(--mono);">0</span></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-ghost" onclick="saveInv('draft')">${t("draft")}</button><button class="btn btn-primary" onclick="saveInv('submitted')">Submit</button>`,true);
  rII();calcInv();
}
function addII(){S.invItems.push({name:"",qty:1,unit_price:0,total:0});rII();calcInv();}
function rmII(i){S.invItems.splice(i,1);rII();calcInv();}
function rII(){
  const prodOpts=S.products.map(p=>`<option value="${p.id}" data-price="${p.sell_price}">${p.name}</option>`).join("");
  $("iitems").innerHTML=S.invItems.map((it,i)=>`
    <div style="background:var(--glass);padding:10px;border-radius:8px;margin-bottom:8px;">
      <div class="fgrid">
        <div class="fg" style="margin:0;"><select class="fc" onchange="selProd(${i},this)"><option value="">Custom</option>${prodOpts}</select></div>
        <div class="fg" style="margin:0;"><input class="fc" placeholder="Item" value="${it.name||""}" oninput="S.invItems[${i}].name=this.value"/></div>
        <div class="fg" style="margin:0;"><input class="fc" type="number" placeholder="Qty" value="${it.qty}" min="1" oninput="S.invItems[${i}].qty=+this.value;calcII(${i})"/></div>
        <div class="fg" style="margin:0;"><input class="fc" type="number" placeholder="Price" value="${it.unit_price}" step="0.01" oninput="S.invItems[${i}].unit_price=+this.value;calcII(${i})"/></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
        <span style="color:var(--accent);font-family:var(--mono);font-weight:700;">= ${fmA(it.total)}</span>
        <button class="btn btn-icon btn-danger btn-sm" onclick="rmII(${i})">✕</button>
      </div>
    </div>`).join("");
}
function selProd(i,sel){const o=sel.options[sel.selectedIndex];if(o.value){S.invItems[i].product_id=o.value;S.invItems[i].name=o.text;S.invItems[i].unit_price=+o.dataset.price||0;S.invItems[i].total=S.invItems[i].unit_price*S.invItems[i].qty;}rII();calcInv();}
function calcII(i){S.invItems[i].total=S.invItems[i].qty*S.invItems[i].unit_price;calcInv();}
function calcInv(){
  const sub=S.invItems.reduce((s,it)=>s+(it.total||0),0);
  const tax=sub*(+$("invtax")?.value||0)/100;const disc=sub*(+$("invdisc")?.value||0)/100;
  const grand=sub+tax-disc;
  if($("i-sub"))$("i-sub").textContent=fmA(sub);
  if($("i-tax"))$("i-tax").textContent=fmA(tax);
  if($("i-disc"))$("i-disc").textContent=fmA(disc);
  if($("i-grand"))$("i-grand").textContent=fmA(grand);
}
async function saveInv(status){
  const sub=S.invItems.reduce((s,it)=>s+(it.total||0),0);
  const taxP=+$("invtax")?.value||0,discP=+$("invdisc")?.value||0;
  const tax=sub*taxP/100,disc=sub*discP/100,grand=sub+tax-disc;
  const pm=$("invpm")?.value||"cash";
  const row={invoice_no:$("invno")?.value,date:$("invdate")?.value||today(),due_date:$("invdue")?.value||null,customer_id:$("invcust")?.value||null,currency:S.currency,payment_method:pm,tax_pct:taxP,disc_pct:discP,subtotal:sub,tax_amount:tax,disc_amount:disc,grand_total:grand,note:"",account_id:$("invacc")?.value||null,status,items:S.invItems};
  const d=await ins("invoices",row);if(!d)return;
  S.invoices.unshift(d);
  if(status==="submitted"&&pm!=="credit"&&row.account_id){
    const acc=getAcc(row.account_id);if(acc){acc.balance=(acc.balance||0)+grand;await upd("accounts",row.account_id,{balance:acc.balance});}
    const tx=await ins("transactions",{type:"income",amount:grand,currency:S.currency,account_id:row.account_id,category:"sales",note:row.invoice_no,date:row.date});
    if(tx)S.transactions.unshift(tx);
  }
  closeModal(true);toast(t("saved"),"ok");render("invoices");
}
async function markInvPaid(id){await upd("invoices",id,{status:"paid"});const i=S.invoices.find(x=>x.id===id);if(i)i.status="paid";toast(t("saved"),"ok");render(S.page);}
async function delInv(id){if(!confirm(t("confirmDel")))return;await del("invoices",id);S.invoices=S.invoices.filter(x=>x.id!==id);toast(t("deleted"),"info");render("invoices");}
function showInvDetail(id){
  const inv=S.invoices.find(x=>x.id===id);if(!inv)return;
  // Calculate profit per item if product_id linked
  let totalCost=0,totalProfit=0,hasProfit=false;
  const itemsHTML=(inv.items||[]).map(it=>{
    const p=it.product_id?S.products.find(x=>x.id===it.product_id):null;
    if(p&&p.cost_price>0){
      hasProfit=true;
      const itemCost=p.cost_price*it.qty;
      const itemProfit=it.total-itemCost;
      totalCost+=itemCost;totalProfit+=itemProfit;
      return `<div class="list-item"><div class="list-content"><div class="list-title">${it.name}</div><div class="list-sub">${it.qty} × ${fmA(it.unit_price)} · Cost ${fmA(p.cost_price)}/unit</div></div><div class="list-right"><div class="list-amount">${fmA(it.total)}</div><div class="list-meta" style="color:${itemProfit>=0?"var(--green)":"var(--red)"};">${itemProfit>=0?"+":""}${fmA(itemProfit)} profit</div></div></div>`;
    }
    return `<div class="list-item"><div class="list-content"><div class="list-title">${it.name}</div><div class="list-sub">${it.qty} × ${fmA(it.unit_price)}</div></div><div class="list-right"><div class="list-amount">${fmA(it.total)}</div></div></div>`;
  }).join("");
  const sb={draft:"b-gray",submitted:"b-blue",paid:"b-green",cancelled:"b-red"};
  const profitHTML=hasProfit?`<div style="background:var(--glass);padding:12px;border-radius:10px;margin-top:10px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
    <div><div style="font-size:10px;color:var(--text3);text-transform:uppercase;">Revenue</div><div style="font-family:var(--mono);font-weight:700;">${fmA(inv.grand_total)}</div></div>
    <div><div style="font-size:10px;color:var(--text3);text-transform:uppercase;">Cost</div><div style="font-family:var(--mono);font-weight:700;color:var(--red);">${fmA(totalCost)}</div></div>
    <div><div style="font-size:10px;color:var(--text3);text-transform:uppercase;">Profit</div><div style="font-family:var(--mono);font-weight:700;color:${totalProfit>=0?"var(--green)":"var(--red)"};">${fmA(totalProfit)}</div></div>
  </div>`:"";
  modal(inv.invoice_no,`
    <div style="text-align:center;padding:16px 0;">
      <div style="font-size:30px;font-weight:300;font-family:var(--mono);color:var(--accent);">${fmA(inv.grand_total||0,inv.currency)}</div>
      <div style="margin-top:8px;"><span class="badge ${sb[inv.status]}">${t(inv.status)||inv.status}</span></div>
    </div>
    <div class="card">${itemsHTML}</div>
    ${profitHTML}`,
    `<button class="btn btn-danger btn-sm" onclick="closeModal(true);delInv('${id}')">✕</button>
     <button class="btn btn-ghost btn-sm" onclick="printInv('${id}')">🖨</button>
     <button class="btn btn-ghost btn-sm" onclick="pdfInv('${id}')">📄</button>
     ${inv.status==="submitted"?`<button class="btn btn-success btn-sm" onclick="closeModal(true);markInvPaid('${id}')">✓ ${t("paid")}</button>`:""}
     <button class="btn btn-secondary btn-sm" onclick="closeModal(true)">${t("close")}</button>`);
}
function printInv(id){
  const inv=S.invoices.find(x=>x.id===id);if(!inv)return;
  const items=(inv.items||[]).map(it=>`<tr><td>${it.name}</td><td>${it.qty}</td><td>${fmN(it.unit_price)}</td><td>${fmN(it.total)}</td></tr>`).join("");
  const win=window.open("","_blank");
  win.document.write(`<html><head><title>${inv.invoice_no}</title><style>body{font-family:sans-serif;padding:30px;color:#000;}table{width:100%;border-collapse:collapse;margin-top:20px;}th,td{padding:10px;border-bottom:1px solid #ddd;text-align:left;}th{background:#f5f5f5;}h1{color:#3b82f6;}.total{font-size:20px;font-weight:bold;text-align:right;margin-top:20px;}</style></head><body>
    ${S.profile.name?`<div><h2>${S.profile.name}</h2><div>${S.profile.address||""}</div></div>`:""}
    <h1>INVOICE ${inv.invoice_no}</h1><p>Date: ${fmD(inv.date)} | Customer: ${getCustName(inv.customer_id)}</p>
    <table><thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead><tbody>${items}</tbody></table>
    <div class="total">Total: ${fmA(inv.grand_total||0,inv.currency)}</div></body></html>`);
  win.document.close();setTimeout(()=>win.print(),400);
}
function pdfInv(id){
  const inv=S.invoices.find(x=>x.id===id);if(!inv)return;
  try{
    const {jsPDF}=window.jspdf;const doc=new jsPDF();let y=20;
    if(S.profile.name){doc.setFontSize(14);doc.setFont("helvetica","bold");doc.text(S.profile.name,20,y);y+=8;}
    doc.setFontSize(20);doc.setTextColor(59,130,246);doc.text("INVOICE",20,y);y+=10;
    doc.setFontSize(11);doc.setTextColor(0,0,0);
    doc.text(`No: ${inv.invoice_no}`,20,y);doc.text(`Date: ${fmD(inv.date)}`,120,y);y+=8;
    doc.text(`Customer: ${getCustName(inv.customer_id)}`,20,y);y+=12;
    (inv.items||[]).forEach(it=>{doc.text(`${it.name} (${it.qty} × ${fmN(it.unit_price)})`,20,y);doc.text(fmN(it.total),165,y);y+=7;});
    y+=8;doc.setFontSize(14);doc.setFont("helvetica","bold");doc.text(`Total: ${fmA(inv.grand_total||0,inv.currency)}`,120,y);
    doc.save(`${inv.invoice_no}.pdf`);toast("PDF saved","ok");
  }catch(e){toast("PDF error","err");}
}

// ── PRODUCTS ──
function rProd(){
  const q=S.searchQ.toLowerCase();
  let prods=S.products;if(q)prods=prods.filter(p=>p.name.toLowerCase().includes(q));
  const list=prods.map(p=>`
    <div class="list-item" onclick="showAddProduct('${p.id}')">
      <div class="list-icon">${p.image_url?`<img src="${p.image_url}" style="width:100%;height:100%;object-fit:cover;border-radius:11px;">`:"📦"}</div>
      <div class="list-content"><div class="list-title">${p.name}</div><div class="list-sub">Stock: ${p.stock||0}${(p.stock||0)<=(p.reorder_level||5)?' <span class="badge b-red">LOW</span>':""}</div></div>
      <div class="list-right"><div class="list-amount" style="color:var(--accent);">${fmA(p.sell_price||0)}</div></div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">📦</div><p>${t("noRecords")}</p></div>`;
  $("p-inventory").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("inventory")}</div><div class="page-sub">${S.products.length} products</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddProduct()">+ ${t("add")}</button></div>
    <div class="search-box"><span class="search-icon">🔍</span><input class="fc" placeholder="${t("search")}..." oninput="S.searchQ=this.value;rProd()" value="${S.searchQ}"/></div>
    <div class="card">${list}</div>`;
}
function showAddProduct(eid){
  const p=eid?S.products.find(x=>x.id===eid):null;
  modal(eid?t("edit"):"New Product",`
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("name")}</label><input class="fc" id="pn" value="${p?.name||""}"/></div>
      <div class="fg"><label class="fl">${t("sku")}</label><input class="fc" id="psku" value="${p?.sku||""}"/></div>
      <div class="fg"><label class="fl">${t("sellPrice")}</label><input class="fc" type="number" id="psp" value="${p?.sell_price||0}" step="0.01"/></div>
      <div class="fg"><label class="fl">${t("costPrice")}</label><input class="fc" type="number" id="pcp" value="${p?.cost_price||0}" step="0.01"/></div>
      <div class="fg"><label class="fl">${t("stock")}</label><input class="fc" type="number" id="pstk" value="${p?.stock||0}"/></div>
      <div class="fg"><label class="fl">${t("reorderLevel")}</label><input class="fc" type="number" id="prl" value="${p?.reorder_level||5}"/></div>
      <div class="fg"><label class="fl">${t("productImg")}</label><input class="fc" id="pimg" value="${p?.image_url||""}"/></div>
    </div>`,
    `${eid?`<button class="btn btn-danger btn-sm" onclick="delProd('${eid}')">✕</button>`:""}
     <button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="saveProd('${eid||""}')">${t("save")}</button>`);
}
async function saveProd(eid){
  const name=$("pn")?.value?.trim();if(!name){toast("Name?","err");return;}
  const row={name,sku:$("psku")?.value||"",sell_price:+$("psp")?.value||0,cost_price:+$("pcp")?.value||0,stock:+$("pstk")?.value||0,reorder_level:+$("prl")?.value||5,image_url:$("pimg")?.value||""};
  if(eid){await upd("products",eid,row);const i=S.products.findIndex(x=>x.id===eid);if(i>=0)S.products[i]={...S.products[i],...row};}
  else{const d=await ins("products",row);if(!d)return;S.products.push(d);}
  closeModal(true);toast(t("saved"),"ok");render(S.page);
}
async function delProd(id){if(!confirm(t("confirmDel")))return;await del("products",id);S.products=S.products.filter(x=>x.id!==id);closeModal(true);toast(t("deleted"),"info");render("inventory");}

// ── CUSTOMERS / SUPPLIERS ──
function rCust(){
  const list=S.customers.map(c=>`<div class="list-item" onclick="showAddCustomer('${c.id}')"><div class="list-icon">👤</div><div class="list-content"><div class="list-title">${c.name}</div><div class="list-sub">${c.phone||c.email||""}</div></div></div>`).join("")||`<div class="empty"><div class="empty-icon">👥</div><p>${t("noRecords")}</p></div>`;
  $("p-customers").innerHTML=`<div class="page-header"><div><div class="page-title">${t("customers")}</div></div><button class="btn btn-primary btn-sm" onclick="showAddCustomer()">+ ${t("add")}</button></div><div class="card">${list}</div>`;
}
function showAddCustomer(eid){
  const c=eid?S.customers.find(x=>x.id===eid):null;
  modal(eid?t("edit"):"New Customer",`
    <div class="fg"><label class="fl">${t("name")}</label><input class="fc" id="cn" value="${c?.name||""}"/></div>
    <div class="fgrid"><div class="fg"><label class="fl">Email</label><input class="fc" id="ce" value="${c?.email||""}"/></div><div class="fg"><label class="fl">${t("phone")}</label><input class="fc" id="cph" value="${c?.phone||""}"/></div></div>
    <div class="fg"><label class="fl">${t("address")}</label><input class="fc" id="cadr" value="${c?.address||""}"/></div>`,
    `${eid?`<button class="btn btn-danger btn-sm" onclick="delCust('${eid}')">✕</button>`:""}<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveCust('${eid||""}')">${t("save")}</button>`);
}
async function saveCust(eid){
  const name=$("cn")?.value?.trim();if(!name){toast("Name?","err");return;}
  const row={name,email:$("ce")?.value||"",phone:$("cph")?.value||"",address:$("cadr")?.value||""};
  if(eid){await upd("customers",eid,row);const i=S.customers.findIndex(x=>x.id===eid);if(i>=0)S.customers[i]={...S.customers[i],...row};}
  else{const d=await ins("customers",row);if(!d)return;S.customers.push(d);}
  closeModal(true);toast(t("saved"),"ok");render("customers");
}
async function delCust(id){if(!confirm(t("confirmDel")))return;await del("customers",id);S.customers=S.customers.filter(x=>x.id!==id);closeModal(true);toast(t("deleted"),"info");render("customers");}

function rSupp(){
  const list=S.suppliers.map(s=>`<div class="list-item" onclick="showAddSupp('${s.id}')"><div class="list-icon">🏭</div><div class="list-content"><div class="list-title">${s.name}</div><div class="list-sub">${s.phone||s.email||""}</div></div></div>`).join("")||`<div class="empty"><div class="empty-icon">🏭</div><p>${t("noRecords")}</p></div>`;
  $("p-suppliers").innerHTML=`<div class="page-header"><div><div class="page-title">${t("suppliers")}</div></div><button class="btn btn-primary btn-sm" onclick="showAddSupp()">+ ${t("add")}</button></div><div class="card">${list}</div>`;
}
function showAddSupp(eid){
  const s=eid?S.suppliers.find(x=>x.id===eid):null;
  modal(eid?t("edit"):"New Supplier",`
    <div class="fg"><label class="fl">${t("name")}</label><input class="fc" id="sn" value="${s?.name||""}"/></div>
    <div class="fgrid"><div class="fg"><label class="fl">Email</label><input class="fc" id="seml" value="${s?.email||""}"/></div><div class="fg"><label class="fl">${t("phone")}</label><input class="fc" id="sph" value="${s?.phone||""}"/></div></div>`,
    `${eid?`<button class="btn btn-danger btn-sm" onclick="delSupp('${eid}')">✕</button>`:""}<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveSupp('${eid||""}')">${t("save")}</button>`);
}
async function saveSupp(eid){
  const name=$("sn")?.value?.trim();if(!name){toast("Name?","err");return;}
  const row={name,email:$("seml")?.value||"",phone:$("sph")?.value||""};
  if(eid){await upd("suppliers",eid,row);const i=S.suppliers.findIndex(x=>x.id===eid);if(i>=0)S.suppliers[i]={...S.suppliers[i],...row};}
  else{const d=await ins("suppliers",row);if(!d)return;S.suppliers.push(d);}
  closeModal(true);toast(t("saved"),"ok");render("suppliers");
}
async function delSupp(id){if(!confirm(t("confirmDel")))return;await del("suppliers",id);S.suppliers=S.suppliers.filter(x=>x.id!==id);closeModal(true);toast(t("deleted"),"info");render("suppliers");}

// ── REPORTS with LISTS ──
function rRep(){
  const now=new Date();
  const ms=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-01`;
  const mTx=S.transactions.filter(tx=>tx.date>=ms);
  const mI=mTx.filter(t=>t.type==="income").reduce((s,t)=>s+t.amount,0);
  const mE=mTx.filter(t=>t.type==="expense").reduce((s,t)=>s+t.amount,0);
  const totSales=S.invoices.reduce((s,i)=>s+(i.grand_total||0),0);
  const totIncome=S.transactions.filter(t=>t.type==="income").reduce((s,t)=>s+t.amount,0);
  const totExp=S.transactions.filter(t=>t.type==="expense").reduce((s,t)=>s+t.amount,0);
  const totRcpt=S.vouchers.filter(v=>v.type==="receipt").reduce((s,v)=>s+v.amount,0);
  const totPmnt=S.vouchers.filter(v=>v.type==="payment").reduce((s,v)=>s+v.amount,0);
  
  $("p-reports").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("reports")}</div></div><button class="btn btn-ghost btn-sm" onclick="exportJSON()">📦 ${t("backup")}</button></div>
    <div class="stat-grid">
      <div class="stat-card green"><div class="sc-icon">↑</div><div class="sc-label">${t("thisMonth")} Income</div><div class="sc-value" style="color:var(--green);">${fmA(mI)}</div></div>
      <div class="stat-card red"><div class="sc-icon">↓</div><div class="sc-label">${t("thisMonth")} Expense</div><div class="sc-value" style="color:var(--red);">${fmA(mE)}</div></div>
      <div class="stat-card blue"><div class="sc-icon">★</div><div class="sc-label">Net Profit</div><div class="sc-value" style="color:${mI-mE>=0?"var(--green)":"var(--red)"};">${fmA(mI-mE)}</div></div>
      <div class="stat-card purple"><div class="sc-icon">🧾</div><div class="sc-label">Total Sales</div><div class="sc-value" style="font-size:16px;">${fmA(totSales)}</div></div>
    </div>
    <div class="card"><div class="card-head"><span class="card-title">Reports</span></div>
      <button class="list-item" onclick="showDayBook()" style="width:100%;border:none;background:none;text-align:left;color:inherit;font-family:inherit;cursor:pointer;"><div class="list-icon">📅</div><div class="list-content"><div class="list-title">Day Book</div><div class="list-sub">Today's complete activity</div></div><div class="list-right">→</div></button>
      <button class="list-item" onclick="showCustStatement()" style="width:100%;border:none;background:none;text-align:left;color:inherit;font-family:inherit;cursor:pointer;"><div class="list-icon">📒</div><div class="list-content"><div class="list-title">Customer Statement</div><div class="list-sub">Balance per customer</div></div><div class="list-right">→</div></button>
    </div>
    <div class="card"><div class="card-head"><span class="card-title">Lists</span></div>
      <button class="list-item" onclick="showList('sales')" style="width:100%;border:none;background:none;text-align:left;color:inherit;font-family:inherit;cursor:pointer;"><div class="list-icon">🧾</div><div class="list-content"><div class="list-title">${t("listSalesInv")}</div><div class="list-sub">${S.invoices.length} invoices · ${fmA(totSales)}</div></div><div class="list-right">→</div></button>
      <button class="list-item" onclick="showList('income')" style="width:100%;border:none;background:none;text-align:left;color:inherit;font-family:inherit;cursor:pointer;"><div class="list-icon" style="color:var(--green);">↑</div><div class="list-content"><div class="list-title">${t("listIncome")}</div><div class="list-sub">${fmA(totIncome)}</div></div><div class="list-right">→</div></button>
      <button class="list-item" onclick="showList('expense')" style="width:100%;border:none;background:none;text-align:left;color:inherit;font-family:inherit;cursor:pointer;"><div class="list-icon" style="color:var(--red);">↓</div><div class="list-content"><div class="list-title">${t("listExpenses")}</div><div class="list-sub">${fmA(totExp)}</div></div><div class="list-right">→</div></button>
      <button class="list-item" onclick="showList('payment')" style="width:100%;border:none;background:none;text-align:left;color:inherit;font-family:inherit;cursor:pointer;"><div class="list-icon" style="color:var(--red);">📤</div><div class="list-content"><div class="list-title">${t("listPaymentVoucher")}</div><div class="list-sub">${fmA(totPmnt)}</div></div><div class="list-right">→</div></button>
      <button class="list-item" onclick="showList('receipt')" style="width:100%;border:none;background:none;text-align:left;color:inherit;font-family:inherit;cursor:pointer;"><div class="list-icon" style="color:var(--green);">📥</div><div class="list-content"><div class="list-title">${t("listReceiptVoucher")}</div><div class="list-sub">${fmA(totRcpt)}</div></div><div class="list-right">→</div></button>
    </div>`;
}

function showDayBook(){
  const d=today();
  const txs=S.transactions.filter(t=>t.date===d);
  const vouchers=S.vouchers.filter(v=>v.date===d);
  const invs=S.invoices.filter(i=>i.date===d);
  const cashIn=vouchers.filter(v=>v.type==="receipt").reduce((s,v)=>s+v.amount,0);
  const cashOut=vouchers.filter(v=>v.type==="payment").reduce((s,v)=>s+v.amount,0);
  const salesTotal=invs.reduce((s,i)=>s+(i.grand_total||0),0);
  
  const all=[
    ...vouchers.map(v=>({time:v.created_at,type:v.type==="receipt"?"📥 Receipt":"📤 Payment",ref:v.voucher_no,party:v.party,amount:(v.type==="receipt"?"+":"-")+fmA(v.amount,v.currency),color:v.type==="receipt"?"var(--green)":"var(--red)"})),
    ...invs.map(i=>({time:i.created_at,type:"🧾 Invoice",ref:i.invoice_no,party:getCustName(i.customer_id),amount:fmA(i.grand_total,i.currency),color:"var(--accent)"})),
    ...txs.filter(t=>!t.note?.match(/^(RV|PV|INV|POS)-/)).map(t=>({time:t.created_at,type:t.type==="income"?"↑ Income":"↓ Expense",ref:t.category,party:t.note,amount:(t.type==="income"?"+":"-")+fmA(t.amount,t.currency),color:t.type==="income"?"var(--green)":"var(--red)"})),
  ].sort((a,b)=>(b.time||"").localeCompare(a.time||""));
  
  const rows=all.map(item=>`<div class="list-item"><div class="list-content"><div class="list-title" style="font-size:13px;">${item.type} ${item.ref||""}</div><div class="list-sub">${item.party||"—"}</div></div><div class="list-right"><div class="list-amount" style="color:${item.color};">${item.amount}</div></div></div>`).join("")||`<div class="empty"><p>${t("noRecords")}</p></div>`;
  
  modal("📅 Day Book - "+fmD(d),`
    <div style="background:linear-gradient(135deg,var(--accent-dim),var(--purple-dim));padding:16px;border-radius:14px;margin-bottom:14px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div><div style="font-size:10px;color:var(--text3);text-transform:uppercase;">Cash In</div><div style="font-family:var(--mono);font-size:18px;color:var(--green);">+${fmA(cashIn)}</div></div>
        <div><div style="font-size:10px;color:var(--text3);text-transform:uppercase;">Cash Out</div><div style="font-family:var(--mono);font-size:18px;color:var(--red);">-${fmA(cashOut)}</div></div>
        <div><div style="font-size:10px;color:var(--text3);text-transform:uppercase;">Sales</div><div style="font-family:var(--mono);font-size:18px;color:var(--accent);">${fmA(salesTotal)}</div></div>
        <div><div style="font-size:10px;color:var(--text3);text-transform:uppercase;">Net</div><div style="font-family:var(--mono);font-size:18px;color:${cashIn-cashOut>=0?"var(--green)":"var(--red)"};">${fmA(cashIn-cashOut)}</div></div>
      </div>
    </div>
    <div class="card">${rows}</div>`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
}

function showCustStatement(){
  if(S.customers.length===0){toast("No customers yet","err");return;}
  const custOpts=S.customers.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");
  modal("Customer Statement",`
    <div class="fg"><label class="fl">Select Customer</label><select class="fc" id="cs-sel" onchange="renderCustStatement()">${custOpts}</select></div>
    <div id="cs-content"></div>`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
  setTimeout(renderCustStatement,50);
}

function renderCustStatement(){
  const cid=$("cs-sel")?.value;if(!cid)return;
  const cust=getCust(cid);
  const invs=S.invoices.filter(i=>i.customer_id===cid);
  const totSales=invs.reduce((s,i)=>s+(i.grand_total||0),0);
  const totPaid=invs.filter(i=>i.status==="paid").reduce((s,i)=>s+(i.grand_total||0),0);
  const outstanding=invs.filter(i=>i.status==="submitted").reduce((s,i)=>s+(i.grand_total||0),0);
  const rows=invs.map(i=>`<div class="list-item"><div class="list-content"><div class="list-title">${i.invoice_no}</div><div class="list-sub">${fmD(i.date)} · ${i.status}</div></div><div class="list-right"><div class="list-amount">${fmA(i.grand_total,i.currency)}</div></div></div>`).join("")||`<div class="empty"><p>No invoices</p></div>`;
  $("cs-content").innerHTML=`
    <div style="background:var(--glass);padding:14px;border-radius:12px;margin-bottom:12px;">
      <div style="font-weight:700;font-size:16px;margin-bottom:8px;">${cust?.name||"—"}</div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:8px;">${cust?.phone||""} ${cust?.email||""}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:10px;">
        <div><div style="font-size:10px;color:var(--text3);">Total</div><div style="font-family:var(--mono);font-weight:600;">${fmA(totSales)}</div></div>
        <div><div style="font-size:10px;color:var(--text3);">Paid</div><div style="font-family:var(--mono);color:var(--green);font-weight:600;">${fmA(totPaid)}</div></div>
        <div><div style="font-size:10px;color:var(--text3);">Outstanding</div><div style="font-family:var(--mono);color:var(--amber);font-weight:600;">${fmA(outstanding)}</div></div>
      </div>
    </div>
    <div class="card">${rows}</div>`;
}

function showList(type,from,to){
  let items=[],title="",totalLabel="";
  if(type==="sales"){items=S.invoices;title=t("listSalesInv");totalLabel="Total Sales";}
  if(type==="income"){items=S.transactions.filter(t=>t.type==="income");title=t("listIncome");totalLabel="Total";}
  if(type==="expense"){items=S.transactions.filter(t=>t.type==="expense");title=t("listExpenses");totalLabel="Total";}
  if(type==="payment"){items=S.vouchers.filter(v=>v.type==="payment");title=t("listPaymentVoucher");totalLabel="Total";}
  if(type==="receipt"){items=S.vouchers.filter(v=>v.type==="receipt");title=t("listReceiptVoucher");totalLabel="Total";}
  
  // Apply date filter
  if(from)items=items.filter(it=>(it.date||"")>=from);
  if(to)items=items.filter(it=>(it.date||"")<=to);
  
  const total=items.reduce((s,it)=>s+(it.amount||it.grand_total||0),0);
  const list=items.map(it=>{
    if(type==="sales"){
      return `<div class="list-item" onclick="closeModal(true);showInvDetail('${it.id}')"><div class="list-icon">🧾</div><div class="list-content"><div class="list-title">${it.invoice_no}</div><div class="list-sub">${getCustName(it.customer_id)} · ${fmD(it.date)}</div></div><div class="list-right"><div class="list-amount">${fmA(it.grand_total,it.currency)}</div><div class="list-meta">${it.status}</div></div></div>`;
    }
    if(type==="income"||type==="expense"){
      return `<div class="list-item"><div class="list-icon" style="background:${type==="income"?"var(--green-dim)":"var(--red-dim)"};color:${type==="income"?"var(--green)":"var(--red)"};">${type==="income"?"↑":"↓"}</div><div class="list-content"><div class="list-title">${it.note||it.category}</div><div class="list-sub">${getAccName(it.account_id)} · ${fmD(it.date)}</div></div><div class="list-right"><div class="list-amount" style="color:${type==="income"?"var(--green)":"var(--red)"};">${type==="income"?"+":"−"}${fmA(it.amount,it.currency)}</div></div></div>`;
    }
    if(type==="payment"||type==="receipt"){
      return `<div class="list-item" onclick="closeModal(true);showVoucherDetail('${it.id}')"><div class="list-icon" style="background:${type==="receipt"?"var(--green-dim)":"var(--red-dim)"};color:${type==="receipt"?"var(--green)":"var(--red)"};">${type==="receipt"?"📥":"📤"}</div><div class="list-content"><div class="list-title">${it.party||it.voucher_no}</div><div class="list-sub">${fmD(it.date)} · ${it.payment_mode}</div></div><div class="list-right"><div class="list-amount" style="color:${type==="receipt"?"var(--green)":"var(--red)"};">${type==="receipt"?"+":"−"}${fmA(it.amount,it.currency)}</div></div></div>`;
    }
    return "";
  }).join("")||`<div class="empty"><p>${t("noRecords")}</p></div>`;
  
  const tod=today();
  const dt7=new Date();dt7.setDate(dt7.getDate()-7);const d7=dt7.toISOString().split("T")[0];
  const dt30=new Date();dt30.setDate(dt30.getDate()-30);const d30=dt30.toISOString().split("T")[0];
  const dtM=new Date();dtM.setDate(1);const dM=dtM.toISOString().split("T")[0];
  
  modal(title,`
    <div style="background:linear-gradient(135deg,var(--accent-dim),var(--purple-dim));padding:14px;border-radius:14px;margin-bottom:12px;text-align:center;">
      <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;">${totalLabel}</div>
      <div style="font-size:24px;font-family:var(--mono);font-weight:300;color:var(--accent);">${fmA(total)}</div>
      <div style="font-size:11px;color:var(--text3);margin-top:3px;">${items.length} records ${from||to?`(${from||"any"} → ${to||"any"})`:""}</div>
    </div>
    <div style="background:var(--glass);padding:10px;border-radius:12px;margin-bottom:12px;">
      <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Date Filter</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
        <button class="btn btn-xs btn-ghost" onclick="closeModal(true);showList('${type}','${tod}','${tod}')">Today</button>
        <button class="btn btn-xs btn-ghost" onclick="closeModal(true);showList('${type}','${d7}','${tod}')">7 Days</button>
        <button class="btn btn-xs btn-ghost" onclick="closeModal(true);showList('${type}','${d30}','${tod}')">30 Days</button>
        <button class="btn btn-xs btn-ghost" onclick="closeModal(true);showList('${type}','${dM}','${tod}')">This Month</button>
        <button class="btn btn-xs btn-ghost" onclick="closeModal(true);showList('${type}')">All</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr auto;gap:6px;align-items:end;">
        <div><label style="font-size:10px;color:var(--text3);">From</label><input class="fc" type="date" id="lf-from" value="${from||""}" style="padding:6px 8px;font-size:12px;"/></div>
        <div><label style="font-size:10px;color:var(--text3);">To</label><input class="fc" type="date" id="lf-to" value="${to||""}" style="padding:6px 8px;font-size:12px;"/></div>
        <button class="btn btn-primary btn-sm" onclick="applyListFilter('${type}')">Apply</button>
      </div>
    </div>
    <div class="card">${list}</div>`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
}

function applyListFilter(type){
  const from=$("lf-from")?.value||"";
  const to=$("lf-to")?.value||"";
  closeModal(true);
  showList(type,from,to);
}

function exportJSON(){
  const data={accounts:S.accounts,transactions:S.transactions,invoices:S.invoices,products:S.products,customers:S.customers,suppliers:S.suppliers,budgets:S.budgets,goals:S.goals,vouchers:S.vouchers,cheques_in:S.cheques_in,cheques_out:S.cheques_out,denominations:S.denominations,profile:S.profile,exportedAt:new Date().toISOString()};
  const b=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download=`backup-${today()}.json`;a.click();
  localStorage.setItem("lastBackup",Date.now().toString());
  toast("Backup downloaded","ok");
}

// ── BUDGETS / GOALS ──
function rBud(){
  const now=new Date();const ms=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-01`;
  const list=S.budgets.map(b=>{
    const spent=S.transactions.filter(tx=>tx.type==="expense"&&tx.category===b.category&&tx.date>=ms).reduce((s,tx)=>s+tx.amount,0);
    const pct=Math.min(100,(spent/b.amount)*100);
    return `<div class="list-item"><div class="list-icon">${pct>=100?"⚠️":"💰"}</div><div class="list-content"><div class="list-title">${b.category}</div><div class="list-sub">${fmA(spent)} / ${fmA(b.amount)}</div><div class="prog"><div class="prog-bar" style="width:${pct}%;background:${pct>=100?"var(--red)":pct>=80?"var(--amber)":"var(--accent)"};"></div></div></div><div class="list-right"><button class="btn btn-icon btn-danger btn-sm" onclick="delBud('${b.id}')">✕</button></div></div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">💰</div><p>${t("noRecords")}</p></div>`;
  $("p-budgets").innerHTML=`<div class="page-header"><div><div class="page-title">${t("budgets")}</div></div><button class="btn btn-primary btn-sm" onclick="showAddBud()">+ ${t("add")}</button></div><div class="card">${list}</div>`;
}
function showAddBud(){
  modal("Add Budget",`<div class="fg"><label class="fl">${t("category")}</label><select class="fc" id="bcat">${TCATS.map(c=>`<option>${c}</option>`).join("")}</select></div><div class="fg"><label class="fl">Monthly Limit</label><input class="fc" type="number" id="bamt"/></div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveBud()">${t("save")}</button>`);
}
async function saveBud(){
  const amt=+$("bamt")?.value;if(!amt){toast("Amount?","err");return;}
  const d=await ins("budgets",{category:$("bcat")?.value,amount:amt,period:"monthly"});if(!d)return;
  S.budgets.unshift(d);closeModal(true);toast(t("saved"),"ok");render("budgets");
}
async function delBud(id){if(!confirm(t("confirmDel")))return;await del("budgets",id);S.budgets=S.budgets.filter(x=>x.id!==id);toast(t("deleted"),"info");render("budgets");}

function rGoal(){
  const list=S.goals.map(g=>{
    const pct=Math.min(100,((g.saved||0)/g.target)*100);
    return `<div class="list-item"><div class="list-icon">🎯</div><div class="list-content"><div class="list-title">${g.name}</div><div class="list-sub">${fmA(g.saved||0)} / ${fmA(g.target)}</div><div class="prog"><div class="prog-bar" style="width:${pct}%;background:linear-gradient(90deg,var(--purple),var(--accent));"></div></div></div><div class="list-right"><button class="btn btn-icon btn-ghost btn-sm" onclick="addToGoal('${g.id}')">+</button><button class="btn btn-icon btn-danger btn-sm" onclick="delGoal('${g.id}')">✕</button></div></div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">🎯</div><p>${t("noRecords")}</p></div>`;
  $("p-goals").innerHTML=`<div class="page-header"><div><div class="page-title">${t("goals")}</div></div><button class="btn btn-primary btn-sm" onclick="showAddGoal()">+ ${t("add")}</button></div><div class="card">${list}</div>`;
}
function showAddGoal(){
  modal("New Goal",`<div class="fg"><label class="fl">${t("name")}</label><input class="fc" id="gn"/></div><div class="fgrid"><div class="fg"><label class="fl">Target</label><input class="fc" type="number" id="gt"/></div><div class="fg"><label class="fl">Deadline</label><input class="fc" type="date" id="gd"/></div></div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveGoal()">${t("save")}</button>`);
}
async function saveGoal(){
  const name=$("gn")?.value?.trim();const target=+$("gt")?.value;
  if(!name||!target){toast("Required","err");return;}
  const d=await ins("goals",{name,target,saved:0,deadline:$("gd")?.value||null});if(!d)return;
  S.goals.unshift(d);closeModal(true);toast(t("saved"),"ok");render("goals");
}
async function addToGoal(id){
  const amt=prompt("Amount to add:");if(!amt)return;
  const g=S.goals.find(x=>x.id===id);if(!g)return;
  g.saved=(g.saved||0)+(+amt);await upd("goals",id,{saved:g.saved});
  toast(t("saved"),"ok");render("goals");
}
async function delGoal(id){if(!confirm(t("confirmDel")))return;await del("goals",id);S.goals=S.goals.filter(x=>x.id!==id);toast(t("deleted"),"info");render("goals");}

// ── AI ──
function rAI(){
  $("p-ai").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("ai")}</div><div class="page-sub">Claude AI · Auto-analysis enabled</div></div></div>
    ${!S.aiKey?`<div class="alert alert-blue">ℹ️ Add Claude API key in <span style="cursor:pointer;color:var(--accent);text-decoration:underline;" onclick="nav('settings')">Settings</span></div>`:`<button class="btn btn-primary btn-sm" style="margin-bottom:14px;" onclick="runAutoAnalysis()">🪄 Run Auto Analysis</button>`}
    <div id="auto-analysis-result"></div>
    <div class="card" style="display:flex;flex-direction:column;height:55vh;">
      <div id="ai-msgs" style="flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;"></div>
      <div style="padding:10px;border-top:1px solid var(--border);display:flex;gap:6px;">
        <input class="fc" id="ai-inp" placeholder="${t("aiPlaceholder")}" onkeydown="if(event.key==='Enter')sendAI()" style="flex:1;"/>
        <button class="btn btn-primary" onclick="sendAI()">→</button>
      </div>
    </div>`;
}
async function sendAI(){
  const inp=$("ai-inp"),msg=inp.value.trim();if(!msg)return;inp.value="";
  const m=$("ai-msgs");
  m.innerHTML+=`<div style="align-self:flex-end;background:var(--accent);color:#fff;padding:10px 14px;border-radius:14px 14px 4px 14px;max-width:80%;font-size:13px;">${msg}</div>`;
  m.scrollTop=m.scrollHeight;
  if(!S.aiKey){m.innerHTML+=`<div style="align-self:flex-start;background:var(--glass);padding:10px 14px;border-radius:14px;font-size:13px;color:var(--red);">No API key</div>`;return;}
  const lid="l"+Date.now();
  m.innerHTML+=`<div id="${lid}" style="align-self:flex-start;background:var(--glass);padding:10px 14px;border-radius:14px;font-size:13px;color:var(--text3);"><span class="spin"></span> Thinking...</div>`;
  m.scrollTop=m.scrollHeight;
  const {assets,liab,net}=calcNW();
  const ctx=`Financial assistant. User data: Net Worth ${fmA(net)} | Assets ${fmA(assets)} | Liab ${fmA(liab)} | Accounts: ${S.accounts.map(a=>`${a.name}(${a.type}):${fmA(a.balance||0)}`).join(",")} | Recent: ${S.transactions.slice(0,10).map(tx=>`${tx.date} ${tx.type} ${fmA(tx.amount)}`).join(";")} | Invoices: ${S.invoices.length} | Vouchers: ${S.vouchers.length}. Answer in user language. Be concise.`;
  try{
    const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":S.aiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:"claude-opus-4-20250514",max_tokens:1024,system:ctx,messages:[{role:"user",content:msg}]})});
    const data=await res.json();
    const reply=data.content?.[0]?.text||"Error";
    $(lid).innerHTML=reply.replace(/\n/g,"<br>");
  }catch(e){$(lid).innerHTML="Error: "+e.message;$(lid).style.color="var(--red)";}
  m.scrollTop=m.scrollHeight;
}
async function runAutoAnalysis(){
  if(!S.aiKey){toast("Add API key","err");return;}
  const el=$("auto-analysis-result");
  el.innerHTML=`<div class="alert alert-blue"><span class="spin"></span> Analyzing...</div>`;
  const {net}=calcNW();
  const ctx=`Analyze user's finances and give 3 short actionable insights. Data: Net ${fmA(net)}, ${S.transactions.length} transactions, ${S.invoices.length} invoices. Recent expenses: ${S.transactions.filter(t=>t.type==="expense").slice(0,5).map(t=>`${fmA(t.amount)} ${t.category}`).join(", ")}. Answer in user's language. Use bullet points.`;
  try{
    const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":S.aiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:"claude-opus-4-20250514",max_tokens:800,messages:[{role:"user",content:ctx}]})});
    const data=await res.json();
    el.innerHTML=`<div class="card"><div class="card-head"><span class="card-title">${t("aiAnalysis")}</span></div><div class="card-body">${(data.content?.[0]?.text||"").replace(/\n/g,"<br>")}</div></div>`;
  }catch(e){el.innerHTML=`<div class="alert alert-red">${e.message}</div>`;}
}

// ── SETTINGS ──
function rSet(){
  const curOpts=CURS.map(c=>`<option value="${c.code}" ${c.code===S.currency?"selected":""}>${c.code} ${c.sym}</option>`).join("");
  $("p-settings").innerHTML=`
    <div class="page-header"><div class="page-title">${t("settings")}</div></div>
    <div class="card"><div class="card-head"><span class="card-title">Appearance</span></div><div class="card-body">
      <div class="fgrid">
        <div class="fg"><label class="fl">${t("lang")}</label><select class="fc" onchange="setLang(this.value)"><option value="en" ${S.lang==="en"?"selected":""}>English</option><option value="fa" ${S.lang==="fa"?"selected":""}>فارسی</option></select></div>
        <div class="fg"><label class="fl">${t("defCurrency")}</label><select class="fc" onchange="setCur(this.value)">${curOpts}</select></div>
      </div>
      <div class="fg"><label class="fl">Low Balance Threshold</label><input class="fc" type="number" id="lbt" value="${S.lowBalanceThreshold}" onchange="S.lowBalanceThreshold=+this.value;localStorage.setItem('lowBalThr',this.value);toast('Updated','ok');"/></div>
    </div></div>
    <div class="card"><div class="card-head"><span class="card-title">${t("profile")}</span></div><div class="card-body">
      <div class="fgrid">
        <div class="fg"><label class="fl">${t("companyName")}</label><input class="fc" id="pf-name" value="${S.profile.name||""}"/></div>
        <div class="fg"><label class="fl">${t("phone")}</label><input class="fc" id="pf-phone" value="${S.profile.phone||""}"/></div>
        <div class="fg"><label class="fl">Email</label><input class="fc" id="pf-email" value="${S.profile.email||""}"/></div>
        <div class="fg"><label class="fl">${t("address")}</label><input class="fc" id="pf-addr" value="${S.profile.address||""}"/></div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="saveProfile()">${t("save")}</button>
    </div></div>
    <div class="card"><div class="card-head"><span class="card-title">${t("ai")}</span></div><div class="card-body">
      <div class="fg"><label class="fl">${t("aiKey")}</label><input class="fc" type="password" id="aik" value="${S.aiKey}" placeholder="sk-ant-..."/></div>
      <div style="font-size:11px;color:var(--text3);margin-bottom:10px;">Get from console.anthropic.com</div>
      <button class="btn btn-primary btn-sm" onclick="saveAIKey()">${t("save")}</button>
    </div></div>
    <div class="card"><div class="card-head"><span class="card-title">${t("accountEmail")}</span></div><div class="card-body">
      <div style="font-size:13px;color:var(--text2);margin-bottom:12px;">Signed in as <strong>${S.user?.email}</strong></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-secondary btn-sm" onclick="showChangeEmail()">📧 Change Email</button>
        <button class="btn btn-secondary btn-sm" onclick="showChangePassword()">🔒 Change Password</button>
        <button class="btn btn-danger btn-sm" onclick="signOut()">↩ ${t("signOut")}</button>
      </div>
    </div></div>
    <div class="card"><div class="card-head"><span class="card-title">${t("data")}</span></div><div class="card-body" style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-secondary btn-sm" onclick="exportJSON()">📦 ${t("backup")}</button>
    </div></div>`;
}
function saveProfile(){S.profile={name:$("pf-name")?.value||"",phone:$("pf-phone")?.value||"",email:$("pf-email")?.value||"",address:$("pf-addr")?.value||""};localStorage.setItem("profile",JSON.stringify(S.profile));toast(t("saved"),"ok");}
function saveAIKey(){S.aiKey=$("aik")?.value||"";localStorage.setItem("aiKey",S.aiKey);toast("Saved","ok");}
function setLang(l){S.lang=l;localStorage.setItem("lang",l);applyLang();buildShell();render(S.page);}

function showChangeEmail(){
  modal("Change Email",`
    <div class="fg"><label class="fl">Current Email</label><input class="fc" value="${S.user?.email}" readonly/></div>
    <div class="fg"><label class="fl">New Email</label><input class="fc" type="email" id="ce-new" placeholder="new@example.com"/></div>
    <div style="font-size:11px;color:var(--text3);">A confirmation link will be sent to the new email.</div>`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="doChangeEmail()">Send Confirmation</button>`);
}
async function doChangeEmail(){
  const email=$("ce-new")?.value?.trim();
  if(!email){toast("Email required","err");return;}
  const {error}=await sb.auth.updateUser({email});
  if(error){toast(error.message,"err");return;}
  closeModal(true);toast("Confirmation sent to new email","ok");
}

function showChangePassword(){
  modal("Change Password",`
    <div class="fg"><label class="fl">New Password</label><input class="fc" type="password" id="cp-new"/></div>
    <div class="fg"><label class="fl">Confirm Password</label><input class="fc" type="password" id="cp-new2"/></div>
    <div style="font-size:11px;color:var(--text3);">Min 6 characters</div>`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="doChangePassword()">Update Password</button>`);
}
async function doChangePassword(){
  const p1=$("cp-new")?.value;
  const p2=$("cp-new2")?.value;
  if(!p1||p1.length<6){toast(t("passShort"),"err");return;}
  if(p1!==p2){toast(t("passMismatch"),"err");return;}
  const {error}=await sb.auth.updateUser({password:p1});
  if(error){toast(error.message,"err");return;}
  closeModal(true);toast("Password updated ✓","ok");
}

function setCur(c){S.currency=c;localStorage.setItem("currency",c);toast(`${c}`,"info");}
function toggleTheme(){S.theme=S.theme==="dark"?"light":"dark";localStorage.setItem("theme",S.theme);applyLang();buildShell();render(S.page);}

// ── SHELL ──
function toggleSidebar(){$("sidebar")?.classList.toggle("open");$("sbov")?.classList.toggle("show");}
function closeSidebar(){$("sidebar")?.classList.remove("open");$("sbov")?.classList.remove("show");}
function applyLang(){document.documentElement.lang=S.lang;document.body.classList.toggle("rtl",S.lang==="fa");document.body.classList.toggle("light",S.theme==="light");}

const PAGES=[
  {id:"dashboard",icon:"⊞",label:"dashboard",mob:true},
  {id:"cashier",icon:"💰",label:"cashier",mob:true},
  {id:"pos",icon:"🛒",label:"pos",mob:true},
  {id:"invoices",icon:"🧾",label:"invoices",mob:true},
  {id:"vouchers",icon:"📋",label:"vouchers",mob:false},
  {id:"chequesIn",icon:"📥",label:"chequesIn",mob:false},
  {id:"chequesOut",icon:"📤",label:"chequesOut",mob:false},
  {id:"transactions",icon:"⇄",label:"transactions",mob:false},
  {id:"accounts",icon:"🏦",label:"accounts",mob:false},
  {id:"inventory",icon:"📦",label:"inventory",mob:false},
  {id:"customers",icon:"👥",label:"customers",mob:false},
  {id:"suppliers",icon:"🏭",label:"suppliers",mob:false},
  {id:"reports",icon:"📊",label:"reports",mob:false},
  {id:"budgets",icon:"💵",label:"budgets",mob:false},
  {id:"goals",icon:"🎯",label:"goals",mob:false},
  {id:"ai",icon:"🤖",label:"ai",mob:false},
  {id:"settings",icon:"⚙",label:"settings",mob:true},
];

function buildShell(){
  const navHTML=PAGES.map(p=>`<button class="nav-item ${S.page===p.id?"on":""}" data-page="${p.id}" onclick="nav('${p.id}')"><span class="ni">${p.icon}</span><span>${t(p.label)}</span></button>`).join("");
  const mobHTML=PAGES.filter(p=>p.mob).map(p=>`<button class="mob-btn ${S.page===p.id?"on":""}" data-page="${p.id}" onclick="nav('${p.id}')"><span class="mi">${p.icon}</span><span>${t(p.label)}</span></button>`).join("");
  const pages=PAGES.map(p=>`<div class="page ${S.page===p.id?"on":""}" id="p-${p.id}"></div>`).join("");
  $("app").innerHTML=`
    <div class="topbar">
      <button class="ham" onclick="toggleSidebar()">☰</button>
      <div class="t-logo"><div class="t-logo-icon">F</div><span>${t("app")}</span></div>
      <div class="t-right">
        <button class="t-refresh" onclick="refreshApp()">↻</button>
        <button class="t-refresh" onclick="toggleTheme()" title="Theme">${S.theme==="light"?"🌙":"☀️"}</button>
        <div class="lang-tog">
          <button class="lang-btn ${S.lang==="en"?"on":""}" onclick="setLang('en')">EN</button>
          <button class="lang-btn ${S.lang==="fa"?"on":""}" onclick="setLang('fa')">FA</button>
        </div>
      </div>
    </div>
    <div class="sb-ov" id="sbov" onclick="closeSidebar()"></div>
    <div class="sidebar" id="sidebar"><div class="sb-grp"><div class="sb-lbl">Menu</div>${navHTML}</div></div>
    <div class="main">${pages}</div>
    <nav class="mob-nav"><div class="mob-items">${mobHTML}</div></nav>
    <button class="fab" onclick="showVoucher('receipt')">+</button>
    <div id="toasts"></div>`;
}

async function boot(){
  applyLang();
  $("app").innerHTML=`<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;"><div style="color:var(--text3);"><span class="spin"></span> ${t("loading")}</div></div>`;
  const {data:{session}}=await sb.auth.getSession();
  if(session?.user){
    S.user=session.user;
    await loadAll();
    buildShell();
    render(S.page);
    // Check backup reminder
    checkBackupReminder();
    // Setup swipe-up gesture for quick add
    setupSwipeGesture();
  }
  else renderAuth();
  if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
}

function checkBackupReminder(){
  const last=localStorage.getItem("lastBackup");
  if(!last)return; // First time user - no reminder yet
  const days=(Date.now()-parseInt(last))/(1000*60*60*24);
  if(days>=7){
    setTimeout(()=>{
      if(confirm(`📦 Last backup was ${Math.floor(days)} days ago. Download backup now?`)){
        exportJSON();
        localStorage.setItem("lastBackup",Date.now().toString());
      }
    },2000);
  }
}

function setupSwipeGesture(){
  let startY=0;
  document.addEventListener("touchstart",e=>{startY=e.touches[0].clientY;},{passive:true});
  document.addEventListener("touchend",e=>{
    const endY=e.changedTouches[0].clientY;
    const diff=startY-endY;
    // Swipe up from bottom 80px of screen, at least 100px swipe
    if(startY>window.innerHeight-100&&diff>100&&!$("mo")){
      showQuickAdd();
    }
  },{passive:true});
}

function showQuickAdd(){
  modal("⚡ Quick Add",`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
      <button class="btn btn-success" style="padding:18px;flex-direction:column;font-size:11px;" onclick="closeModal(true);showVoucher('receipt')">
        <div style="font-size:22px;">📥</div>${t("receipt")}
      </button>
      <button class="btn btn-danger" style="padding:18px;flex-direction:column;font-size:11px;" onclick="closeModal(true);showVoucher('payment')">
        <div style="font-size:22px;">📤</div>${t("payment")}
      </button>
      <button class="btn btn-secondary" style="padding:18px;flex-direction:column;font-size:11px;" onclick="closeModal(true);showAddTx()">
        <div style="font-size:22px;">⇄</div>${t("transactions")}
      </button>
      <button class="btn btn-secondary" style="padding:18px;flex-direction:column;font-size:11px;" onclick="closeModal(true);showAddInv()">
        <div style="font-size:22px;">🧾</div>${t("invoices")}
      </button>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`);
}
document.addEventListener("DOMContentLoaded",boot);
