/* FinanceERP v7 — Complete with all features */
const SB_URL="https://wxjuhlfrnbrlqxetldrl.supabase.co";
const SB_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4anVobGZybmJybHF4ZXRsZHJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MzIwMzMsImV4cCI6MjA5NTEwODAzM30.ZUk0giKEhhRCxkbwbZjYMYNWQqENT-BFAWA0IK1eIQg";
const sb=supabase.createClient(SB_URL,SB_KEY);

// ── i18n ──
const L={
  en:{app:"FinanceERP",dashboard:"Dashboard",accounts:"Accounts",transactions:"Transactions",invoices:"Invoices",inventory:"Inventory",customers:"Customers",suppliers:"Suppliers",reports:"Reports",pos:"POS",budgets:"Budgets",goals:"Goals",settings:"Settings",ai:"AI Assistant",
    netWorth:"Net Worth",assets:"Assets",liabilities:"Liabilities",todayRev:"Today Revenue",todayExp:"Today Expenses",outstanding:"Outstanding",
    addAccount:"Add Account",addTx:"Add Transaction",newInvoice:"New Invoice",addProduct:"Add Product",addCustomer:"Add Customer",addSupplier:"Add Supplier",addBudget:"Add Budget",addGoal:"Add Goal",
    bank:"Bank",debit:"Debit",cash:"Cash",credit:"Credit Card",cheque:"Cheque",crypto:"Crypto",
    name:"Name",balance:"Balance",currency:"Currency",amount:"Amount",desc:"Description",date:"Date",type:"Type",category:"Category",account:"Account",note:"Note",customer:"Customer",dueDate:"Due Date",status:"Status",
    income:"Income",expense:"Expense",sale:"Sale",purchase:"Purchase",
    paid:"Paid",pending:"Pending",overdue:"Overdue",draft:"Draft",submitted:"Submitted",
    save:"Save",cancel:"Cancel",delete:"Delete",edit:"Edit",close:"Close",confirm:"Confirm",
    print:"Print",pdf:"PDF",share:"Share",
    confirmDel:"Delete this?",saved:"Saved ✓",deleted:"Deleted",noRecords:"No records",loading:"Loading...",
    signIn:"Sign In",signUp:"Sign Up",signOut:"Sign Out",email:"Email",password:"Password",forgotPass:"Forgot password?",resetPass:"Reset Password",resetSent:"Reset email sent!",confirmPass:"Confirm Password",passMismatch:"Passwords don't match",passShort:"Min 6 characters",authErr:"Invalid email or password",
    lang:"Language",defCurrency:"Default Currency",appearance:"Appearance",dataManage:"Data",exportJSON:"Export JSON",exportCSV:"Export CSV",importData:"Import",
    sku:"SKU",qty:"Qty",unitPrice:"Unit Price",costPrice:"Cost",sellPrice:"Sell Price",stock:"Stock",lowStock:"Low Stock",
    invoiceNo:"Invoice #",subtotal:"Subtotal",tax:"Tax %",discount:"Discount %",grandTotal:"Total",items:"Items",addItem:"Add Item",
    profitLoss:"P&L",revenue:"Revenue",netProfit:"Net Profit",expenses:"Expenses",
    thisMonth:"This Month",thisYear:"This Year",lastMonth:"Last Month",
    phone:"Phone",address:"Address",
    search:"Search",searchPlaceholder:"Search anything...",
    target:"Target",progress:"Progress",deadline:"Deadline",saved_money:"Saved",
    monthlyLimit:"Monthly Limit",spent:"Spent",remaining:"Remaining",
    aiPlaceholder:"Ask anything...",send:"Send",aiKey:"Claude AI API Key",aiKeyHint:"Get from console.anthropic.com",
    quickActions:"Quick Actions",recentTx:"Recent Transactions",allAccounts:"All Accounts",salesFlow:"Sales Flow",
    profile:"Profile",companyName:"Company Name",companyAddress:"Address",companyPhone:"Phone",companyEmail:"Email",companyLogo:"Logo URL",
    backup:"Backup",restore:"Restore",
    monthlyComparison:"Monthly Comparison",topProducts:"Top Products",categoryBreakdown:"Categories",
    compactMode:"Compact Mode",themeMode:"Theme",
    receipt:"Receipt",total:"Total",addToCart:"Add to Cart",checkout:"Checkout",
    cart:"Cart",emptyCart:"Cart is empty",
    cashSale:"Cash Sale",creditSale:"Credit Sale",
    print_invoice:"Print Invoice",
    monthly:"Monthly",yearly:"Yearly",weekly:"Weekly",
    productImage:"Image URL",
  },
  fa:{app:"حسابدار",dashboard:"داشبورد",accounts:"حساب‌ها",transactions:"تراکنش‌ها",invoices:"فاکتورها",inventory:"موجودی",customers:"مشتریان",suppliers:"تامین‌کنندگان",reports:"گزارش‌ها",pos:"صندوق",budgets:"بودجه‌ها",goals:"اهداف",settings:"تنظیمات",ai:"هوش مصنوعی",
    netWorth:"دارایی خالص",assets:"دارایی‌ها",liabilities:"بدهی‌ها",todayRev:"درآمد امروز",todayExp:"هزینه امروز",outstanding:"معوقات",
    addAccount:"افزودن حساب",addTx:"ثبت تراکنش",newInvoice:"فاکتور جدید",addProduct:"افزودن کالا",addCustomer:"افزودن مشتری",addSupplier:"افزودن تامین‌کننده",addBudget:"افزودن بودجه",addGoal:"افزودن هدف",
    bank:"حساب بانکی",debit:"کارت دبیت",cash:"نقد",credit:"اعتباری",cheque:"چک",crypto:"ارز دیجیتال",
    name:"نام",balance:"موجودی",currency:"ارز",amount:"مبلغ",desc:"توضیحات",date:"تاریخ",type:"نوع",category:"دسته",account:"حساب",note:"یادداشت",customer:"مشتری",dueDate:"سررسید",status:"وضعیت",
    income:"درآمد",expense:"هزینه",sale:"فروش",purchase:"خرید",
    paid:"پرداخت شده",pending:"در انتظار",overdue:"سررسید گذشته",draft:"پیش‌نویس",submitted:"صادر شده",
    save:"ذخیره",cancel:"انصراف",delete:"حذف",edit:"ویرایش",close:"بستن",confirm:"تایید",
    print:"چاپ",pdf:"PDF",share:"اشتراک",
    confirmDel:"حذف شود؟",saved:"ذخیره شد ✓",deleted:"حذف شد",noRecords:"رکوردی نیست",loading:"در حال بارگذاری...",
    signIn:"ورود",signUp:"ثبت نام",signOut:"خروج",email:"ایمیل",password:"رمز",forgotPass:"رمز فراموش شده؟",resetPass:"بازیابی رمز",resetSent:"ایمیل ارسال شد!",confirmPass:"تکرار رمز",passMismatch:"رمزها یکسان نیستند",passShort:"حداقل ۶ کاراکتر",authErr:"ایمیل یا رمز اشتباه",
    lang:"زبان",defCurrency:"ارز پیش‌فرض",appearance:"ظاهر",dataManage:"داده‌ها",exportJSON:"خروجی JSON",exportCSV:"خروجی CSV",importData:"وارد کردن",
    sku:"کد کالا",qty:"تعداد",unitPrice:"قیمت واحد",costPrice:"قیمت خرید",sellPrice:"قیمت فروش",stock:"موجودی",lowStock:"کم‌موجودی",
    invoiceNo:"شماره فاکتور",subtotal:"جمع",tax:"مالیات %",discount:"تخفیف %",grandTotal:"جمع کل",items:"اقلام",addItem:"افزودن قلم",
    profitLoss:"سود و زیان",revenue:"درآمد",netProfit:"سود خالص",expenses:"هزینه‌ها",
    thisMonth:"این ماه",thisYear:"امسال",lastMonth:"ماه قبل",
    phone:"تلفن",address:"آدرس",
    search:"جستجو",searchPlaceholder:"جستجو در همه چیز...",
    target:"هدف",progress:"پیشرفت",deadline:"مهلت",saved_money:"پس‌انداز",
    monthlyLimit:"سقف ماهانه",spent:"خرج شده",remaining:"باقیمانده",
    aiPlaceholder:"هر چی می‌خواهی بپرس...",send:"ارسال",aiKey:"کلید Claude AI",aiKeyHint:"از console.anthropic.com",
    quickActions:"اقدامات سریع",recentTx:"آخرین تراکنش‌ها",allAccounts:"همه حساب‌ها",salesFlow:"جریان فروش",
    profile:"پروفایل",companyName:"نام شرکت",companyAddress:"آدرس",companyPhone:"تلفن",companyEmail:"ایمیل",companyLogo:"آدرس لوگو",
    backup:"بک‌آپ",restore:"بازیابی",
    monthlyComparison:"مقایسه ماهانه",topProducts:"پرفروش‌ها",categoryBreakdown:"دسته‌بندی‌ها",
    compactMode:"حالت فشرده",themeMode:"تم",
    receipt:"رسید",total:"جمع",addToCart:"افزودن به سبد",checkout:"پرداخت",
    cart:"سبد",emptyCart:"سبد خالی است",
    cashSale:"فروش نقدی",creditSale:"فروش اعتباری",
    print_invoice:"چاپ فاکتور",
    monthly:"ماهانه",yearly:"سالانه",weekly:"هفتگی",
    productImage:"آدرس عکس",
  }
};

const CURS=[{code:"USD",sym:"$"},{code:"EUR",sym:"€"},{code:"GBP",sym:"£"},{code:"AED",sym:"AED"},{code:"IRR",sym:"﷼"},{code:"IRT",sym:"T"},{code:"TRY",sym:"₺"},{code:"CAD",sym:"C$"},{code:"CHF",sym:"Fr"}];
const ATYPES=["bank","debit","cash","cheque","credit","crypto"];
const AICONS={bank:"🏦",debit:"💳",cash:"💵",cheque:"📄",credit:"⚠️",crypto:"₿"};
const TCATS=["salary","sales","investment","rent","gift","food","housing","transport","utilities","health","entertainment","shopping","tax","loan","other"];

// State
const S={
  lang:localStorage.getItem("lang")||"en",
  currency:localStorage.getItem("currency")||"USD",
  aiKey:localStorage.getItem("aiKey")||"",
  page:"dashboard",
  user:null,
  accounts:[],transactions:[],invoices:[],products:[],customers:[],suppliers:[],budgets:[],goals:[],
  profile:JSON.parse(localStorage.getItem("profile")||"{}"),
  invItems:[],
  cart:[],
  searchQ:"",
  pillFilter:"all",
};

const t=k=>L[S.lang][k]||k;
const $=id=>document.getElementById(id);
const fmN=n=>Number(n||0).toLocaleString(S.lang==="fa"?"fa-IR":"en-US");
const fmA=(n,c)=>{const cur=CURS.find(x=>x.code===(c||S.currency));return `${fmN(n)} ${cur?cur.sym:c||""}`;};
const today=()=>new Date().toISOString().split("T")[0];
const fmD=d=>d?new Date(d).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—";

// Toast
function toast(msg,type="info"){
  let c=$("toasts");if(!c){c=document.createElement("div");c.id="toasts";document.body.appendChild(c);}
  const d=document.createElement("div");
  d.className=`toast ${type}`;
  d.innerHTML=`<span>${type==="ok"?"✓":type==="err"?"✕":"ℹ"}</span><span>${msg}</span>`;
  c.appendChild(d);setTimeout(()=>d.remove(),3000);
}

// Modal
function modal(title,body,foot,large){
  closeModal();
  const ov=document.createElement("div");
  ov.className="mo";ov.id="mo";
  ov.innerHTML=`<div class="mb${large?" mb-lg":""}"><div class="mh"><span class="mt">${title}</span><button class="mx" onclick="closeModal()">×</button></div><div class="mbody">${body}</div><div class="mfoot">${foot}</div></div>`;
  ov.addEventListener("click",e=>{if(e.target===ov)closeModal();});
  document.body.appendChild(ov);
}
function closeModal(){$("mo")?.remove();}

// Auth
function renderAuth(mode="signin"){
  applyLang();
  const isIn=mode==="signin";
  $("app").innerHTML=`
  <div class="auth-wrap"><div class="auth-box">
    <div style="text-align:center;margin-bottom:28px;">
      <div style="width:64px;height:64px;background:linear-gradient(135deg,#3b82f6,#a855f7);border-radius:18px;display:inline-flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:#fff;margin-bottom:14px;">F</div>
      <div style="font-size:24px;font-weight:700;">${t("app")}</div>
    </div>
    <div class="auth-card">
      <div class="fg"><label class="fl">${t("email")}</label><input class="fc" type="email" id="ae" autocapitalize="none" placeholder="you@example.com"/></div>
      <div class="fg"><label class="fl">${t("password")}</label><input class="fc" type="password" id="ap" placeholder="••••••••"/></div>
      ${!isIn?`<div class="fg"><label class="fl">${t("confirmPass")}</label><input class="fc" type="password" id="ap2"/></div>`:""}
      <div id="aerr" style="color:var(--red);font-size:12px;min-height:18px;margin-bottom:8px;"></div>
      <button class="btn btn-primary btn-fullwidth" style="padding:13px;" onclick="doAuth('${mode}')" id="abtn">${t(isIn?"signIn":"signUp")}</button>
      ${isIn?`<div style="text-align:center;margin-top:12px;"><span style="color:var(--accent);cursor:pointer;font-size:12px;" onclick="showReset()">${t("forgotPass")}</span></div>`:""}
      <div style="text-align:center;margin-top:18px;padding-top:18px;border-top:1px solid var(--border);font-size:12px;color:var(--text3);">
        <span style="color:var(--accent);cursor:pointer;" onclick="renderAuth('${isIn?"signup":"signin"}')">${t(isIn?"signUp":"signIn")}</span>
      </div>
    </div>
    <div style="text-align:center;margin-top:16px;">
      <div class="lang-tog" style="display:inline-flex;">
        <button class="lang-btn ${S.lang==="en"?"on":""}" onclick="S.lang='en';localStorage.setItem('lang','en');renderAuth('${mode}')">EN</button>
        <button class="lang-btn ${S.lang==="fa"?"on":""}" onclick="S.lang='fa';localStorage.setItem('lang','fa');renderAuth('${mode}')">FA</button>
      </div>
    </div>
  </div></div>
  <div id="toasts"></div>`;
}

function showReset(){
  modal(t("resetPass"),
    `<div class="fg"><label class="fl">${t("email")}</label><input class="fc" type="email" id="re"/></div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="doReset()">${t("resetPass")}</button>`);
}
async function doReset(){
  const email=$("re")?.value?.trim();if(!email){toast("Enter email","err");return;}
  const {error}=await sb.auth.resetPasswordForEmail(email,{redirectTo:window.location.origin});
  if(error){toast(error.message,"err");return;}
  closeModal();toast(t("resetSent"),"ok");
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
async function signOut(){await sb.auth.signOut();S.user=null;["accounts","transactions","invoices","products","customers","suppliers","budgets","goals"].forEach(k=>S[k]=[]);renderAuth();}

// DB
async function loadAll(){
  if(!S.user)return;
  const uid=S.user.id;
  try{
    const tables=["accounts","transactions","invoices","products","customers","suppliers","budgets","goals"];
    const results=await Promise.all(tables.map(t=>sb.from(t).select("*").eq("user_id",uid).order("created_at",{ascending:false})));
    tables.forEach((tab,i)=>{S[tab]=results[i].data||[];});
  }catch(e){toast("Load: "+e.message,"err");}
}
async function ins(table,row){
  const {data,error}=await sb.from(table).insert({...row,user_id:S.user.id}).select().single();
  if(error){toast(error.message,"err");return null;}return data;
}
async function upd(table,id,row){
  const {error}=await sb.from(table).update(row).eq("id",id).eq("user_id",S.user.id);
  if(error)toast(error.message,"err");
}
async function del(table,id){
  const {error}=await sb.from(table).delete().eq("id",id).eq("user_id",S.user.id);
  if(error)toast(error.message,"err");
}

// Nav
function nav(page){
  S.page=page;
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("on"));
  $("p-"+page)?.classList.add("on");
  document.querySelectorAll(".nav-item,.mob-btn").forEach(b=>b.classList.toggle("on",b.dataset.page===page));
  closeSidebar();render(page);window.scrollTo(0,0);
}
function render(page){
  ({dashboard:rDash,accounts:rAcc,transactions:rTx,invoices:rInv,inventory:rProd,customers:rCust,suppliers:rSupp,reports:rRep,pos:rPOS,budgets:rBud,goals:rGoal,ai:rAI,settings:rSet})[page]?.();
}

// Helpers
function calcNW(){let a=0,l=0;S.accounts.forEach(x=>x.type==="credit"?l+=(x.balance||0):a+=(x.balance||0));return {assets:a,liab:l,net:a-l};}
function getAcc(id){return S.accounts.find(x=>x.id===id);}
function getAccName(id){return getAcc(id)?.name||"—";}
function getCust(id){return S.customers.find(x=>x.id===id);}
function getCustName(id){return getCust(id)?.name||"—";}
function todayTx(type){return S.transactions.filter(tx=>tx.date===today()&&tx.type===type).reduce((s,tx)=>s+tx.amount,0);}
function outstandingTotal(){return S.invoices.filter(i=>i.status==="submitted").reduce((s,i)=>s+(i.grand_total||0),0);}

// ── Dashboard ──
function rDash(){
  const {assets,liab,net}=calcNW();
  const inc=todayTx("income"),exp=todayTx("expense");
  const ovd=S.invoices.filter(i=>{const dt=new Date();dt.setHours(0,0,0,0);return i.status==="submitted"&&i.due_date&&new Date(i.due_date)<dt;}).length;
  const lowStock=S.products.filter(p=>(p.stock||0)<=(p.reorder_level||5));
  
  const alerts=[
    ovd>0?`<div class="alert alert-red">⚠️ <b>${ovd}</b> invoices overdue</div>`:"",
    lowStock.length>0?`<div class="alert alert-amber">📦 <b>${lowStock.length}</b> products low stock</div>`:"",
  ].join("");
  
  const recentHTML=S.transactions.slice(0,5).map(tx=>`
    <div class="list-item" onclick="showTxDetail('${tx.id}')">
      <div class="list-icon" style="background:${tx.type==="income"?"var(--green-dim)":"var(--red-dim)"};color:${tx.type==="income"?"var(--green)":"var(--red)"};">${tx.type==="income"?"↑":"↓"}</div>
      <div class="list-content">
        <div class="list-title">${tx.note||tx.category||"—"}</div>
        <div class="list-sub">${getAccName(tx.account_id)} · ${fmD(tx.date)}</div>
      </div>
      <div class="list-right">
        <div class="list-amount" style="color:${tx.type==="income"?"var(--green)":"var(--red)"};">${tx.type==="income"?"+":"−"}${fmA(tx.amount,tx.currency)}</div>
      </div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">📋</div><p>${t("noRecords")}</p></div>`;
  
  // Chart - last 7 days
  const last7=[];
  for(let i=6;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const ds=d.toISOString().split("T")[0];
    const v=S.transactions.filter(tx=>tx.date===ds&&tx.type==="income").reduce((s,tx)=>s+tx.amount,0);
    last7.push({d:d.toLocaleDateString("en-US",{weekday:"short"})[0],v});
  }
  const maxV=Math.max(...last7.map(x=>x.v),1);
  const chartHTML=`<div class="chart-bar">${last7.map(x=>`<div class="chart-col"><div class="chart-col-bar" style="height:${(x.v/maxV)*100}%;"></div><div class="chart-col-label">${x.d}</div></div>`).join("")}</div>`;
  
  $("p-dashboard").innerHTML=`
    <div class="hero">
      <div class="hero-label">${t("netWorth")}</div>
      <div class="hero-value">${fmA(net)}</div>
      <div class="hero-row">
        <div class="hero-item"><div class="hero-item-label">${t("assets")}</div><div class="hero-item-val">${fmA(assets)}</div></div>
        <div class="hero-item"><div class="hero-item-label">${t("liabilities")}</div><div class="hero-item-val">${fmA(liab)}</div></div>
      </div>
    </div>
    ${alerts}
    <div class="stat-grid">
      <div class="stat-card green"><div class="sc-icon">↑</div><div class="sc-label">${t("todayRev")}</div><div class="sc-value" style="color:var(--green);">${fmA(inc)}</div></div>
      <div class="stat-card red"><div class="sc-icon">↓</div><div class="sc-label">${t("todayExp")}</div><div class="sc-value" style="color:var(--red);">${fmA(exp)}</div></div>
      <div class="stat-card amber"><div class="sc-icon">⏳</div><div class="sc-label">${t("outstanding")}</div><div class="sc-value" style="font-size:14px;">${fmA(outstandingTotal())}</div></div>
      <div class="stat-card purple"><div class="sc-icon">🧾</div><div class="sc-label">${t("invoices")}</div><div class="sc-value">${S.invoices.length}</div></div>
    </div>
    <div class="card">
      <div class="card-head"><span class="card-title">7-Day Revenue</span></div>
      <div class="card-body">${chartHTML}</div>
    </div>
    <div class="card">
      <div class="card-head"><span class="card-title">${t("quickActions")}</span></div>
      <div class="card-body" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <button class="btn btn-secondary" onclick="showAddTx()">⇄ ${t("addTx")}</button>
        <button class="btn btn-secondary" onclick="nav('pos')">🛒 ${t("pos")}</button>
        <button class="btn btn-secondary" onclick="showAddInv()">🧾 ${t("newInvoice")}</button>
        <button class="btn btn-secondary" onclick="showAddProduct()">📦 ${t("addProduct")}</button>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><span class="card-title">${t("recentTx")}</span><button class="btn btn-xs btn-ghost" onclick="nav('transactions')">→</button></div>
      <div>${recentHTML}</div>
    </div>`;
}

// ── Accounts ──
function rAcc(){
  const cards=S.accounts.map(a=>{
    const pct=a.type==="credit"&&a.credit_limit?Math.min(100,((a.balance||0)/a.credit_limit)*100):0;
    return `<div class="list-item" onclick="showAccDetail('${a.id}')">
      <div class="list-icon">${AICONS[a.type]}</div>
      <div class="list-content">
        <div class="list-title">${a.name}</div>
        <div class="list-sub">${a.bank_name||t(a.type)}${a.card_no?" · ····"+a.card_no:""}</div>
        ${a.type==="credit"&&a.credit_limit?`<div class="prog" style="margin-top:6px;"><div class="prog-bar" style="width:${pct}%;background:${pct>80?"var(--red)":"var(--accent)"};"></div></div>`:""}
      </div>
      <div class="list-right">
        <div class="list-amount" style="color:${a.type==="credit"?"var(--red)":"var(--text)"};">${a.type==="credit"?"-":""}${fmA(a.balance||0,a.currency)}</div>
        <div class="list-meta">${a.currency}</div>
      </div>
    </div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">🏦</div><p>${t("noRecords")}</p></div>`;
  
  $("p-accounts").innerHTML=`
    <div class="page-header">
      <div><div class="page-title">${t("accounts")}</div><div class="page-sub">${S.accounts.length} · Net: ${fmA(calcNW().net)}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddAcc()">+ ${t("addAccount")}</button>
    </div>
    <div class="card">${cards}</div>`;
}

function showAddAcc(editId){
  const a=editId?S.accounts.find(x=>x.id===editId):null;
  const typeOpts=ATYPES.map(tp=>`<option value="${tp}" ${(a?.type===tp)||(!a&&tp==="bank")?"selected":""}>${AICONS[tp]} ${t(tp)}</option>`).join("");
  const curOpts=CURS.map(c=>`<option value="${c.code}" ${(a?a.currency:S.currency)===c.code?"selected":""}>${c.code} ${c.sym}</option>`).join("");
  modal(editId?t("edit"):t("addAccount"),`
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("type")}</label><select class="fc" id="at" onchange="togAcc()">${typeOpts}</select></div>
      <div class="fg"><label class="fl">${t("name")}</label><input class="fc" id="an" value="${a?.name||""}"/></div>
      <div class="fg"><label class="fl">Bank Name</label><input class="fc" id="ab" value="${a?.bank_name||""}"/></div>
      <div class="fg" id="fw-card"><label class="fl">Card last 4</label><input class="fc" id="acard" maxlength="4" value="${a?.card_no||""}"/></div>
      <div class="fg"><label class="fl">${t("balance")}</label><input class="fc" type="number" id="abal" value="${a?.balance||0}" step="0.01"/></div>
      <div class="fg"><label class="fl">${t("currency")}</label><select class="fc" id="acur">${curOpts}</select></div>
      <div class="fg" id="fw-lim"><label class="fl">Credit Limit</label><input class="fc" type="number" id="alim" value="${a?.credit_limit||0}"/></div>
      <div class="fg" id="fw-coin"><label class="fl">Coin ID</label><input class="fc" id="acoin" value="${a?.coin_id||""}" placeholder="bitcoin"/></div>
      <div class="fg" id="fw-qty"><label class="fl">${t("qty")}</label><input class="fc" type="number" id="aqty" value="${a?.quantity||0}" step="any"/></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveAcc('${editId||""}')">${t("save")}</button>`);
  togAcc();
}
function togAcc(){
  const tp=$("at")?.value;
  const show=(id,v)=>{const e=$(id);if(e)e.style.display=v?"":"none";};
  show("fw-card",["debit","credit"].includes(tp));
  show("fw-lim",tp==="credit");
  show("fw-coin",tp==="crypto");
  show("fw-qty",tp==="crypto");
}
async function saveAcc(eid){
  const name=$("an")?.value?.trim();if(!name){toast("Name required","err");return;}
  const row={type:$("at")?.value,name,bank_name:$("ab")?.value||"",card_no:$("acard")?.value||"",balance:+$("abal")?.value||0,currency:$("acur")?.value,credit_limit:+$("alim")?.value||0,coin_id:$("acoin")?.value||"",quantity:+$("aqty")?.value||0};
  if(eid){await upd("accounts",eid,row);const i=S.accounts.findIndex(x=>x.id===eid);if(i>=0)S.accounts[i]={...S.accounts[i],...row};}
  else{const d=await ins("accounts",row);if(!d)return;S.accounts.unshift(d);}
  closeModal();toast(t("saved"),"ok");render("accounts");
}
async function delAcc(id){if(!confirm(t("confirmDel")))return;await del("accounts",id);S.accounts=S.accounts.filter(x=>x.id!==id);toast(t("deleted"),"info");render("accounts");}
function showAccDetail(id){
  const a=S.accounts.find(x=>x.id===id);if(!a)return;
  const txs=S.transactions.filter(x=>x.account_id===id).slice(0,8);
  const txHTML=txs.map(tx=>`<div class="list-item" onclick="showTxDetail('${tx.id}')"><div class="list-icon" style="background:${tx.type==="income"?"var(--green-dim)":"var(--red-dim)"};">${tx.type==="income"?"↑":"↓"}</div><div class="list-content"><div class="list-title">${tx.note||tx.category}</div><div class="list-sub">${fmD(tx.date)}</div></div><div class="list-right"><div class="list-amount" style="color:${tx.type==="income"?"var(--green)":"var(--red)"};">${tx.type==="income"?"+":"−"}${fmA(tx.amount,tx.currency)}</div></div></div>`).join("")||`<div class="empty"><p>${t("noRecords")}</p></div>`;
  modal(a.name,`
    <div style="text-align:center;padding:20px;background:var(--bg3);border-radius:12px;margin-bottom:14px;">
      <div style="font-size:36px;margin-bottom:8px;">${AICONS[a.type]}</div>
      <div style="font-size:11px;color:var(--text3);text-transform:uppercase;margin-bottom:4px;">${t("balance")}</div>
      <div style="font-size:28px;font-weight:300;font-family:var(--mono);color:${a.type==="credit"?"var(--red)":"var(--accent)"};">${fmA(a.balance||0,a.currency)}</div>
    </div>
    <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Recent</div>
    <div class="card">${txHTML}</div>`,
    `<button class="btn btn-danger btn-sm" onclick="closeModal();delAcc('${id}')">✕</button><button class="btn btn-ghost" onclick="closeModal();showAddAcc('${id}')">✎ ${t("edit")}</button><button class="btn btn-secondary" onclick="closeModal()">${t("close")}</button>`);
}

// ── Transactions ──
function rTx(){
  const q=S.searchQ.toLowerCase();
  let txs=S.transactions;
  if(q)txs=txs.filter(tx=>(tx.note||"").toLowerCase().includes(q)||(tx.category||"").toLowerCase().includes(q));
  if(S.pillFilter==="income")txs=txs.filter(t=>t.type==="income");
  if(S.pillFilter==="expense")txs=txs.filter(t=>t.type==="expense");
  
  const list=txs.map(tx=>`
    <div class="list-item" onclick="showTxDetail('${tx.id}')">
      <div class="list-icon" style="background:${tx.type==="income"?"var(--green-dim)":"var(--red-dim)"};color:${tx.type==="income"?"var(--green)":"var(--red)"};">${tx.type==="income"?"↑":"↓"}</div>
      <div class="list-content">
        <div class="list-title">${tx.note||tx.category||"—"}</div>
        <div class="list-sub">${getAccName(tx.account_id)} · ${fmD(tx.date)}</div>
      </div>
      <div class="list-right">
        <div class="list-amount" style="color:${tx.type==="income"?"var(--green)":"var(--red)"};">${tx.type==="income"?"+":"−"}${fmA(tx.amount,tx.currency)}</div>
        <div class="list-meta"><span class="badge b-gray">${tx.category||""}</span></div>
      </div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">💸</div><p>${t("noRecords")}</p></div>`;
  
  $("p-transactions").innerHTML=`
    <div class="page-header">
      <div><div class="page-title">${t("transactions")}</div><div class="page-sub">${txs.length} records</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddTx()">+ ${t("addTx")}</button>
    </div>
    <div class="search-box"><span class="search-icon">🔍</span><input class="fc" placeholder="${t("searchPlaceholder")}" oninput="S.searchQ=this.value;rTx()" value="${S.searchQ}"/></div>
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
  modal(t("addTx"),`
    <div style="display:flex;gap:6px;margin-bottom:14px;">
      <button class="btn btn-success btn-fullwidth" id="tbt-i" onclick="setTxT('income')">${t("income")}</button>
      <button class="btn btn-secondary btn-fullwidth" id="tbt-e" onclick="setTxT('expense')">${t("expense")}</button>
    </div>
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("amount")}</label><input class="fc" type="number" id="txamt" placeholder="0" step="0.01"/></div>
      <div class="fg"><label class="fl">${t("currency")}</label><select class="fc" id="txcur">${curOpts}</select></div>
      <div class="fg"><label class="fl">${t("account")}</label><select class="fc" id="txacc">${accOpts||"<option value=''>None</option>"}</select></div>
      <div class="fg"><label class="fl">${t("category")}</label><select class="fc" id="txcat">${catOpts}</select></div>
      <div class="fg"><label class="fl">${t("date")}</label><input class="fc" type="date" id="txdate" value="${today()}"/></div>
      <div class="fg"><label class="fl">${t("note")}</label><input class="fc" id="txnote"/></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveTx()">${t("save")}</button>`);
  window._txType="income";
}
function setTxT(tp){
  window._txType=tp;
  $("tbt-i").className=`btn btn-fullwidth ${tp==="income"?"btn-success":"btn-secondary"}`;
  $("tbt-e").className=`btn btn-fullwidth ${tp==="expense"?"btn-danger":"btn-secondary"}`;
}
async function saveTx(){
  const amt=parseFloat($("txamt")?.value);if(!amt||amt<=0){toast("Amount?","err");return;}
  const accId=$("txacc")?.value||null;
  const type=window._txType||"expense";
  const row={type,amount:amt,currency:$("txcur")?.value,account_id:accId,category:$("txcat")?.value,note:$("txnote")?.value||"",date:$("txdate")?.value||today()};
  const d=await ins("transactions",row);if(!d)return;
  S.transactions.unshift(d);
  if(accId){const acc=getAcc(accId);if(acc){const nb=(acc.balance||0)+(type==="income"?amt:-amt);await upd("accounts",accId,{balance:nb});acc.balance=nb;}}
  closeModal();toast(t("saved"),"ok");render(S.page);
}
async function delTx(id){if(!confirm(t("confirmDel")))return;await del("transactions",id);S.transactions=S.transactions.filter(x=>x.id!==id);toast(t("deleted"),"info");render("transactions");}
function showTxDetail(id){
  const tx=S.transactions.find(x=>x.id===id);if(!tx)return;
  const isPos=tx.type==="income";
  modal(t("transactions"),`
    <div style="text-align:center;padding:20px;">
      <div style="font-size:36px;font-family:var(--mono);font-weight:300;color:${isPos?"var(--green)":"var(--red)"};">${isPos?"+":"−"}${fmA(tx.amount,tx.currency)}</div>
      <div style="margin-top:8px;"><span class="badge ${isPos?"b-green":"b-red"}">${tx.type}</span></div>
    </div>
    <div class="card">
      ${[["Category",tx.category],["Note",tx.note||"—"],["Account",getAccName(tx.account_id)],["Date",fmD(tx.date)],["Currency",tx.currency]].map(([k,v])=>`<div class="list-item"><div class="list-content"><div class="list-sub">${k}</div><div class="list-title" style="font-size:13px;">${v}</div></div></div>`).join("")}
    </div>`,
    `<button class="btn btn-danger btn-sm" onclick="closeModal();delTx('${id}')">✕ ${t("delete")}</button><button class="btn btn-secondary" onclick="closeModal()">${t("close")}</button>`);
}

// ── POS Mode ──
function rPOS(){
  const productCards=S.products.map(p=>`
    <div class="pos-card" onclick="addToCart('${p.id}')">
      <div class="pos-img">${p.image_url?`<img src="${p.image_url}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`:"📦"}</div>
      <div class="pos-name">${p.name}</div>
      <div class="pos-price">${fmA(p.sell_price||0)}</div>
      <div style="font-size:10px;color:var(--text3);margin-top:2px;">Stock: ${p.stock||0}</div>
    </div>`).join("")||`<div style="grid-column:1/-1;"><div class="empty"><div class="empty-icon">📦</div><p>${t("noRecords")}</p><button class="btn btn-primary btn-sm" onclick="showAddProduct()" style="margin-top:10px;">+ ${t("addProduct")}</button></div></div>`;
  
  const cartTotal=S.cart.reduce((s,it)=>s+it.price*it.qty,0);
  const cartCount=S.cart.reduce((s,it)=>s+it.qty,0);
  
  $("p-pos").innerHTML=`
    <div class="page-header">
      <div><div class="page-title">${t("pos")}</div><div class="page-sub">${S.products.length} products · ${t("cart")}: ${cartCount}</div></div>
      <button class="btn btn-secondary btn-sm" onclick="showAddProduct()">+ ${t("addProduct")}</button>
    </div>
    <div class="pos-grid">${productCards}</div>
    ${S.cart.length>0?`
    <div class="pos-cart">
      <div class="pos-cart-total">
        <div><div style="font-size:11px;color:var(--text3);">${t("cart")} (${cartCount})</div><div style="font-size:20px;font-family:var(--mono);font-weight:600;">${fmA(cartTotal)}</div></div>
        <div style="display:flex;gap:6px;"><button class="btn btn-ghost btn-sm" onclick="showCart()">View</button><button class="btn btn-primary" onclick="checkout()">${t("checkout")}</button></div>
      </div>
    </div>`:""}`;
}

function addToCart(pid){
  const p=S.products.find(x=>x.id===pid);if(!p)return;
  const ex=S.cart.find(c=>c.product_id===pid);
  if(ex)ex.qty++;else S.cart.push({product_id:pid,name:p.name,price:p.sell_price||0,qty:1});
  toast(`+ ${p.name}`,"ok");render("pos");
}

function showCart(){
  const items=S.cart.map((it,i)=>`
    <div class="list-item">
      <div class="list-content"><div class="list-title">${it.name}</div><div class="list-sub">${fmA(it.price)} × ${it.qty}</div></div>
      <div class="list-right">
        <div style="display:flex;align-items:center;gap:8px;">
          <button class="btn btn-icon btn-ghost btn-sm" onclick="S.cart[${i}].qty=Math.max(1,S.cart[${i}].qty-1);showCart()">−</button>
          <span style="font-weight:600;">${it.qty}</span>
          <button class="btn btn-icon btn-ghost btn-sm" onclick="S.cart[${i}].qty++;showCart()">+</button>
        </div>
        <div class="list-amount">${fmA(it.price*it.qty)}</div>
      </div>
    </div>`).join("")||`<div class="empty"><p>${t("emptyCart")}</p></div>`;
  const total=S.cart.reduce((s,it)=>s+it.price*it.qty,0);
  modal(t("cart"),`<div class="card">${items}</div>
    <div style="background:var(--bg3);padding:14px;border-radius:10px;margin-top:14px;">
      <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:700;"><span>${t("total")}</span><span style="font-family:var(--mono);color:var(--accent);">${fmA(total)}</span></div>
    </div>`,
    `<button class="btn btn-danger btn-sm" onclick="S.cart=[];closeModal();render('pos')">Clear</button><button class="btn btn-primary" onclick="closeModal();checkout()">${t("checkout")}</button>`);
}

function checkout(){
  if(S.cart.length===0){toast(t("emptyCart"),"err");return;}
  const accOpts=S.accounts.map(a=>`<option value="${a.id}">${AICONS[a.type]} ${a.name}</option>`).join("");
  const total=S.cart.reduce((s,it)=>s+it.price*it.qty,0);
  modal(t("checkout"),`
    <div style="background:var(--bg3);padding:16px;border-radius:10px;margin-bottom:14px;text-align:center;">
      <div style="font-size:11px;color:var(--text3);text-transform:uppercase;">${t("total")}</div>
      <div style="font-size:28px;font-family:var(--mono);font-weight:300;color:var(--accent);">${fmA(total)}</div>
    </div>
    <div class="fg"><label class="fl">${t("account")}</label><select class="fc" id="poacc">${accOpts}</select></div>
    <div style="display:flex;gap:6px;">
      <button class="btn btn-success btn-fullwidth" onclick="completeCheckout('cash')">${t("cashSale")}</button>
      <button class="btn btn-secondary btn-fullwidth" onclick="completeCheckout('credit')">${t("creditSale")}</button>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>`);
}

async function completeCheckout(method){
  const accId=$("poacc")?.value;
  const total=S.cart.reduce((s,it)=>s+it.price*it.qty,0);
  const items=S.cart.map(it=>({name:it.name,qty:it.qty,unit_price:it.price,total:it.price*it.qty,product_id:it.product_id}));
  const invNo="POS-"+Date.now().toString().slice(-6);
  
  const inv=await ins("invoices",{invoice_no:invNo,date:today(),customer_id:null,currency:S.currency,payment_method:method,subtotal:total,grand_total:total,tax_pct:0,disc_pct:0,tax_amount:0,disc_amount:0,note:"POS Sale",account_id:accId,status:method==="cash"?"paid":"submitted",items});
  if(!inv){return;}
  S.invoices.unshift(inv);
  
  // Update stock & account
  for(const it of S.cart){
    const p=S.products.find(x=>x.id===it.product_id);
    if(p){p.stock=Math.max(0,(p.stock||0)-it.qty);await upd("products",p.id,{stock:p.stock});}
  }
  if(method==="cash"&&accId){
    const acc=getAcc(accId);if(acc){acc.balance=(acc.balance||0)+total;await upd("accounts",accId,{balance:acc.balance});}
    const tx=await ins("transactions",{type:"income",amount:total,currency:S.currency,account_id:accId,category:"sales",note:invNo,date:today()});
    if(tx)S.transactions.unshift(tx);
  }
  
  S.cart=[];closeModal();toast(`${t("saved")} ${invNo}`,"ok");render("pos");
}

// ── Invoices ──
function rInv(){
  const list=S.invoices.map(inv=>{
    const sb={draft:"b-gray",submitted:"b-blue",paid:"b-green",cancelled:"b-red"};
    return `<div class="list-item" onclick="showInvDetail('${inv.id}')">
      <div class="list-icon">🧾</div>
      <div class="list-content">
        <div class="list-title">${inv.invoice_no||"—"}</div>
        <div class="list-sub">${getCustName(inv.customer_id)} · ${fmD(inv.date)}</div>
      </div>
      <div class="list-right">
        <div class="list-amount">${fmA(inv.grand_total||0,inv.currency)}</div>
        <div class="list-meta"><span class="badge ${sb[inv.status]||"b-gray"}">${t(inv.status)||inv.status}</span></div>
      </div>
    </div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">🧾</div><p>${t("noRecords")}</p></div>`;
  
  $("p-invoices").innerHTML=`
    <div class="page-header">
      <div><div class="page-title">${t("invoices")}</div><div class="page-sub">Outstanding: ${fmA(outstandingTotal())}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddInv()">+ ${t("newInvoice")}</button>
    </div>
    <div class="card">${list}</div>`;
}

function showAddInv(){
  S.invItems=[{name:"",qty:1,unit_price:0,total:0}];
  const custOpts=S.customers.map(c=>`<option value="${c.id}">${c.name}</option>`).join("")||"<option value=''>None</option>";
  const accOpts=S.accounts.map(a=>`<option value="${a.id}">${AICONS[a.type]} ${a.name}</option>`).join("");
  const invNo="INV-"+Date.now().toString().slice(-6);
  modal(t("newInvoice"),`
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
      <div class="fg"><label class="fl">${t("account")}</label><select class="fc" id="invacc">${accOpts}</select></div>
      <div class="fg"><label class="fl">${t("note")}</label><input class="fc" id="invnote"/></div>
    </div>
    <div style="background:var(--bg3);padding:14px;border-radius:10px;margin-top:12px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;color:var(--text3);"><span>${t("subtotal")}</span><span id="i-sub">0</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;color:var(--text3);"><span>${t("tax")}</span><span id="i-tax">0</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;color:var(--text3);"><span>${t("discount")}</span><span id="i-disc">0</span></div>
      <div style="display:flex;justify-content:space-between;padding-top:10px;border-top:1px solid var(--border);font-weight:700;font-size:16px;"><span>${t("grandTotal")}</span><span id="i-grand" style="color:var(--accent);font-family:var(--mono);">0</span></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-ghost" onclick="saveInv('draft')">${t("draft")}</button><button class="btn btn-primary" onclick="saveInv('submitted')">${t("submitted")}</button>`,
    true);
  rII();calcInv();
}

function addII(){S.invItems.push({name:"",qty:1,unit_price:0,total:0});rII();calcInv();}
function rmII(i){S.invItems.splice(i,1);rII();calcInv();}
function rII(){
  const prodOpts=S.products.map(p=>`<option value="${p.id}" data-price="${p.sell_price}">${p.name}</option>`).join("");
  $("iitems").innerHTML=S.invItems.map((it,i)=>`
    <div style="background:var(--bg3);padding:10px;border-radius:8px;margin-bottom:8px;">
      <div class="fgrid">
        <div class="fg" style="margin:0;"><select class="fc" onchange="selProd(${i},this)"><option value="">Custom</option>${prodOpts}</select></div>
        <div class="fg" style="margin:0;"><input class="fc" placeholder="Item name" value="${it.name||""}" oninput="S.invItems[${i}].name=this.value"/></div>
        <div class="fg" style="margin:0;"><input class="fc" type="number" placeholder="Qty" value="${it.qty}" min="1" oninput="S.invItems[${i}].qty=+this.value;calcII(${i})"/></div>
        <div class="fg" style="margin:0;"><input class="fc" type="number" placeholder="Price" value="${it.unit_price}" step="0.01" oninput="S.invItems[${i}].unit_price=+this.value;calcII(${i})"/></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
        <span style="color:var(--accent);font-family:var(--mono);font-weight:600;">= ${fmA(it.total)}</span>
        <button class="btn btn-icon btn-danger btn-sm" onclick="rmII(${i})">✕</button>
      </div>
    </div>`).join("");
}
function selProd(i,sel){
  const opt=sel.options[sel.selectedIndex];
  if(opt.value){S.invItems[i].name=opt.text;S.invItems[i].unit_price=+opt.dataset.price||0;S.invItems[i].total=S.invItems[i].unit_price*S.invItems[i].qty;}
  rII();calcInv();
}
function calcII(i){S.invItems[i].total=S.invItems[i].qty*S.invItems[i].unit_price;calcInv();}
function calcInv(){
  const sub=S.invItems.reduce((s,it)=>s+(it.total||0),0);
  const tax=sub*(+$("invtax")?.value||0)/100;
  const disc=sub*(+$("invdisc")?.value||0)/100;
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
  const row={invoice_no:$("invno")?.value,date:$("invdate")?.value||today(),due_date:$("invdue")?.value||null,customer_id:$("invcust")?.value||null,currency:S.currency,payment_method:"cash",tax_pct:taxP,disc_pct:discP,subtotal:sub,tax_amount:tax,disc_amount:disc,grand_total:grand,note:$("invnote")?.value||"",account_id:$("invacc")?.value||null,status,items:S.invItems};
  const d=await ins("invoices",row);if(!d)return;
  S.invoices.unshift(d);
  closeModal();toast(t("saved"),"ok");render("invoices");
}
async function markPaid(id){await upd("invoices",id,{status:"paid"});const i=S.invoices.find(x=>x.id===id);if(i)i.status="paid";toast(t("saved"),"ok");render(S.page);}
async function delInv(id){if(!confirm(t("confirmDel")))return;await del("invoices",id);S.invoices=S.invoices.filter(x=>x.id!==id);toast(t("deleted"),"info");render("invoices");}
function showInvDetail(id){
  const inv=S.invoices.find(x=>x.id===id);if(!inv)return;
  const itemsHTML=(inv.items||[]).map(it=>`<div class="list-item"><div class="list-content"><div class="list-title">${it.name}</div><div class="list-sub">${it.qty} × ${fmA(it.unit_price)}</div></div><div class="list-right"><div class="list-amount">${fmA(it.total)}</div></div></div>`).join("");
  const sb={draft:"b-gray",submitted:"b-blue",paid:"b-green",cancelled:"b-red"};
  modal(inv.invoice_no,`
    <div style="text-align:center;padding:16px 0;">
      <div style="font-size:32px;font-weight:300;font-family:var(--mono);color:var(--accent);">${fmA(inv.grand_total||0,inv.currency)}</div>
      <div style="margin-top:8px;"><span class="badge ${sb[inv.status]}">${t(inv.status)||inv.status}</span></div>
      <div style="font-size:12px;color:var(--text3);margin-top:6px;">${getCustName(inv.customer_id)} · ${fmD(inv.date)}</div>
    </div>
    <div class="card">${itemsHTML}</div>
    <div style="background:var(--bg3);padding:12px;border-radius:10px;margin-top:10px;">
      <div style="display:flex;justify-content:space-between;color:var(--text3);font-size:13px;"><span>Subtotal</span><span>${fmA(inv.subtotal||0,inv.currency)}</span></div>
      <div style="display:flex;justify-content:space-between;color:var(--text3);font-size:13px;"><span>Tax ${inv.tax_pct||0}%</span><span>${fmA(inv.tax_amount||0,inv.currency)}</span></div>
      <div style="display:flex;justify-content:space-between;color:var(--text3);font-size:13px;"><span>Discount ${inv.disc_pct||0}%</span><span>-${fmA(inv.disc_amount||0,inv.currency)}</span></div>
    </div>`,
    `<button class="btn btn-danger btn-sm" onclick="closeModal();delInv('${id}')">✕</button>
     <button class="btn btn-ghost btn-sm" onclick="printInv('${id}')">🖨</button>
     <button class="btn btn-ghost btn-sm" onclick="pdfInv('${id}')">📄</button>
     ${inv.status==="submitted"?`<button class="btn btn-success btn-sm" onclick="closeModal();markPaid('${id}')">✓ ${t("paid")}</button>`:""}
     <button class="btn btn-secondary btn-sm" onclick="closeModal()">${t("close")}</button>`);
}

function printInv(id){
  const inv=S.invoices.find(x=>x.id===id);if(!inv)return;
  const items=(inv.items||[]).map(it=>`<tr><td>${it.name}</td><td>${it.qty}</td><td>${fmN(it.unit_price)}</td><td>${fmN(it.total)}</td></tr>`).join("");
  const win=window.open("","_blank");
  win.document.write(`<html><head><title>${inv.invoice_no}</title><style>body{font-family:sans-serif;padding:30px;color:#000;}table{width:100%;border-collapse:collapse;margin-top:20px;}th,td{padding:10px;border-bottom:1px solid #ddd;text-align:left;}th{background:#f5f5f5;}h1{color:#3b82f6;}.total{font-size:20px;font-weight:bold;text-align:right;margin-top:20px;}.company{margin-bottom:20px;}</style></head><body>
    ${S.profile.name?`<div class="company"><h2>${S.profile.name}</h2><div>${S.profile.address||""}</div><div>${S.profile.phone||""} · ${S.profile.email||""}</div></div>`:""}
    <h1>INVOICE ${inv.invoice_no}</h1>
    <p><strong>Date:</strong> ${fmD(inv.date)} | <strong>Due:</strong> ${fmD(inv.due_date)}</p>
    <p><strong>Customer:</strong> ${getCustName(inv.customer_id)}</p>
    <table><thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead><tbody>${items}</tbody></table>
    <div class="total">Subtotal: ${fmA(inv.subtotal||0,inv.currency)}<br>Tax: ${fmA(inv.tax_amount||0,inv.currency)}<br>Discount: -${fmA(inv.disc_amount||0,inv.currency)}<br><span style="font-size:24px;color:#3b82f6;">Total: ${fmA(inv.grand_total||0,inv.currency)}</span></div>
    </body></html>`);
  win.document.close();setTimeout(()=>win.print(),500);
}

function pdfInv(id){
  const inv=S.invoices.find(x=>x.id===id);if(!inv)return;
  try{
    const {jsPDF}=window.jspdf;
    const doc=new jsPDF();
    let y=20;
    if(S.profile.name){doc.setFontSize(16);doc.setFont("helvetica","bold");doc.text(S.profile.name,20,y);y+=8;doc.setFont("helvetica","normal");doc.setFontSize(10);if(S.profile.address)doc.text(S.profile.address,20,y),y+=6;if(S.profile.phone)doc.text(S.profile.phone,20,y),y+=6;y+=4;}
    doc.setFontSize(22);doc.setTextColor(59,130,246);doc.text("INVOICE",20,y);y+=10;
    doc.setFontSize(11);doc.setTextColor(0,0,0);
    doc.text(`No: ${inv.invoice_no}`,20,y);doc.text(`Date: ${fmD(inv.date)}`,120,y);y+=8;
    doc.text(`Customer: ${getCustName(inv.customer_id)}`,20,y);y+=8;
    doc.text(`Status: ${inv.status}`,20,y);y+=12;
    doc.setFillColor(240,240,240);doc.rect(15,y-5,180,8,"F");
    doc.text("Item",20,y);doc.text("Qty",100,y);doc.text("Price",130,y);doc.text("Total",165,y);y+=8;
    (inv.items||[]).forEach(it=>{doc.text(String(it.name).slice(0,30),20,y);doc.text(String(it.qty),100,y);doc.text(fmN(it.unit_price),130,y);doc.text(fmN(it.total),165,y);y+=7;});
    y+=8;doc.setFont("helvetica","bold");doc.setFontSize(14);
    doc.text(`Total: ${fmA(inv.grand_total||0,inv.currency)}`,120,y);
    doc.save(`${inv.invoice_no}.pdf`);
    toast("PDF downloaded","ok");
  }catch(e){toast("PDF: "+e.message,"err");}
}

// ── Products / Inventory ──
function rProd(){
  const q=S.searchQ.toLowerCase();
  let prods=S.products;if(q)prods=prods.filter(p=>p.name.toLowerCase().includes(q)||(p.sku||"").toLowerCase().includes(q));
  const list=prods.map(p=>`
    <div class="list-item" onclick="showProdDetail('${p.id}')">
      <div class="list-icon">${p.image_url?`<img src="${p.image_url}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;">`:"📦"}</div>
      <div class="list-content">
        <div class="list-title">${p.name}</div>
        <div class="list-sub">${p.sku||""} · Stock: ${p.stock||0}${(p.stock||0)<=(p.reorder_level||5)?' <span class="badge b-red" style="font-size:9px;">LOW</span>':""}</div>
      </div>
      <div class="list-right">
        <div class="list-amount" style="color:var(--accent);">${fmA(p.sell_price||0)}</div>
        <div class="list-meta">Cost: ${fmA(p.cost_price||0)}</div>
      </div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">📦</div><p>${t("noRecords")}</p></div>`;
  $("p-inventory").innerHTML=`
    <div class="page-header">
      <div><div class="page-title">${t("inventory")}</div><div class="page-sub">${S.products.length} products</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddProduct()">+ ${t("addProduct")}</button>
    </div>
    <div class="search-box"><span class="search-icon">🔍</span><input class="fc" placeholder="${t("searchPlaceholder")}" oninput="S.searchQ=this.value;rProd()" value="${S.searchQ}"/></div>
    <div class="card">${list}</div>`;
}

function showAddProduct(eid){
  const p=eid?S.products.find(x=>x.id===eid):null;
  modal(eid?t("edit"):t("addProduct"),`
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("name")}</label><input class="fc" id="pn" value="${p?.name||""}"/></div>
      <div class="fg"><label class="fl">${t("sku")}</label><input class="fc" id="psku" value="${p?.sku||""}"/></div>
      <div class="fg"><label class="fl">${t("sellPrice")}</label><input class="fc" type="number" id="psp" value="${p?.sell_price||0}" step="0.01"/></div>
      <div class="fg"><label class="fl">${t("costPrice")}</label><input class="fc" type="number" id="pcp" value="${p?.cost_price||0}" step="0.01"/></div>
      <div class="fg"><label class="fl">${t("stock")}</label><input class="fc" type="number" id="pstk" value="${p?.stock||0}"/></div>
      <div class="fg"><label class="fl">Reorder Level</label><input class="fc" type="number" id="prl" value="${p?.reorder_level||5}"/></div>
      <div class="fg"><label class="fl">${t("productImage")}</label><input class="fc" id="pimg" value="${p?.image_url||""}" placeholder="https://..."/></div>
      <div class="fg"><label class="fl">${t("desc")}</label><input class="fc" id="pd" value="${p?.description||""}"/></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveProd('${eid||""}')">${t("save")}</button>`);
}
async function saveProd(eid){
  const name=$("pn")?.value?.trim();if(!name){toast("Name?","err");return;}
  const row={name,sku:$("psku")?.value||"",sell_price:+$("psp")?.value||0,cost_price:+$("pcp")?.value||0,stock:+$("pstk")?.value||0,reorder_level:+$("prl")?.value||5,image_url:$("pimg")?.value||"",description:$("pd")?.value||""};
  if(eid){await upd("products",eid,row);const i=S.products.findIndex(x=>x.id===eid);if(i>=0)S.products[i]={...S.products[i],...row};}
  else{const d=await ins("products",row);if(!d)return;S.products.push(d);}
  closeModal();toast(t("saved"),"ok");render(S.page);
}
async function delProd(id){if(!confirm(t("confirmDel")))return;await del("products",id);S.products=S.products.filter(x=>x.id!==id);toast(t("deleted"),"info");render("inventory");}
function showProdDetail(id){
  const p=S.products.find(x=>x.id===id);if(!p)return;
  const margin=(p.sell_price||0)-(p.cost_price||0);
  modal(p.name,`
    ${p.image_url?`<img src="${p.image_url}" style="width:100%;border-radius:12px;margin-bottom:14px;">`:""}
    <div class="card">
      ${[["SKU",p.sku],["Sell Price",fmA(p.sell_price||0)],["Cost",fmA(p.cost_price||0)],["Margin",fmA(margin)],["Stock",p.stock||0],["Reorder Level",p.reorder_level||5],["Description",p.description||"—"]].map(([k,v])=>`<div class="list-item"><div class="list-content"><div class="list-sub">${k}</div><div class="list-title" style="font-size:13px;">${v||"—"}</div></div></div>`).join("")}
    </div>`,
    `<button class="btn btn-danger btn-sm" onclick="closeModal();delProd('${id}')">✕</button><button class="btn btn-ghost" onclick="closeModal();showAddProduct('${id}')">✎</button><button class="btn btn-secondary" onclick="closeModal()">${t("close")}</button>`);
}

// ── Customers / Suppliers ──
function rCust(){
  const list=S.customers.map(c=>`<div class="list-item" onclick="showAddCustomer('${c.id}')"><div class="list-icon">👤</div><div class="list-content"><div class="list-title">${c.name}</div><div class="list-sub">${c.email||""} ${c.phone||""}</div></div><div class="list-right"><span class="badge b-gray">${S.invoices.filter(i=>i.customer_id===c.id).length}</span></div></div>`).join("")||`<div class="empty"><div class="empty-icon">👥</div><p>${t("noRecords")}</p></div>`;
  $("p-customers").innerHTML=`<div class="page-header"><div><div class="page-title">${t("customers")}</div><div class="page-sub">${S.customers.length} customers</div></div><button class="btn btn-primary btn-sm" onclick="showAddCustomer()">+ ${t("addCustomer")}</button></div><div class="card">${list}</div>`;
}
function showAddCustomer(eid){
  const c=eid?S.customers.find(x=>x.id===eid):null;
  modal(eid?t("edit"):t("addCustomer"),`
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
  closeModal();toast(t("saved"),"ok");render("customers");
}
async function delCust(id){if(!confirm(t("confirmDel")))return;await del("customers",id);S.customers=S.customers.filter(x=>x.id!==id);closeModal();toast(t("deleted"),"info");render("customers");}

function rSupp(){
  const list=S.suppliers.map(s=>`<div class="list-item" onclick="showAddSupp('${s.id}')"><div class="list-icon">🏭</div><div class="list-content"><div class="list-title">${s.name}</div><div class="list-sub">${s.email||""} ${s.phone||""}</div></div></div>`).join("")||`<div class="empty"><div class="empty-icon">🏭</div><p>${t("noRecords")}</p></div>`;
  $("p-suppliers").innerHTML=`<div class="page-header"><div><div class="page-title">${t("suppliers")}</div></div><button class="btn btn-primary btn-sm" onclick="showAddSupp()">+ ${t("addSupplier")}</button></div><div class="card">${list}</div>`;
}
function showAddSupp(eid){
  const s=eid?S.suppliers.find(x=>x.id===eid):null;
  modal(eid?t("edit"):t("addSupplier"),`
    <div class="fg"><label class="fl">${t("name")}</label><input class="fc" id="sn" value="${s?.name||""}"/></div>
    <div class="fgrid"><div class="fg"><label class="fl">Email</label><input class="fc" id="seml" value="${s?.email||""}"/></div><div class="fg"><label class="fl">${t("phone")}</label><input class="fc" id="sph" value="${s?.phone||""}"/></div></div>
    <div class="fg"><label class="fl">${t("address")}</label><input class="fc" id="sadr" value="${s?.address||""}"/></div>`,
    `${eid?`<button class="btn btn-danger btn-sm" onclick="delSupp('${eid}')">✕</button>`:""}<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveSupp('${eid||""}')">${t("save")}</button>`);
}
async function saveSupp(eid){
  const name=$("sn")?.value?.trim();if(!name){toast("Name?","err");return;}
  const row={name,email:$("seml")?.value||"",phone:$("sph")?.value||"",address:$("sadr")?.value||""};
  if(eid){await upd("suppliers",eid,row);const i=S.suppliers.findIndex(x=>x.id===eid);if(i>=0)S.suppliers[i]={...S.suppliers[i],...row};}
  else{const d=await ins("suppliers",row);if(!d)return;S.suppliers.push(d);}
  closeModal();toast(t("saved"),"ok");render("suppliers");
}
async function delSupp(id){if(!confirm(t("confirmDel")))return;await del("suppliers",id);S.suppliers=S.suppliers.filter(x=>x.id!==id);closeModal();toast(t("deleted"),"info");render("suppliers");}

// ── Budgets ──
function rBud(){
  const now=new Date();const ms=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-01`;
  const list=S.budgets.map(b=>{
    const spent=S.transactions.filter(tx=>tx.type==="expense"&&tx.category===b.category&&tx.date>=ms).reduce((s,tx)=>s+tx.amount,0);
    const pct=Math.min(100,(spent/b.amount)*100);
    return `<div class="list-item">
      <div class="list-icon">${pct>=100?"⚠️":pct>=80?"⏰":"💰"}</div>
      <div class="list-content">
        <div class="list-title">${b.category}</div>
        <div class="list-sub">${fmA(spent)} / ${fmA(b.amount)} · ${pct.toFixed(0)}%</div>
        <div class="prog"><div class="prog-bar" style="width:${pct}%;background:${pct>=100?"var(--red)":pct>=80?"var(--amber)":"var(--accent)"};"></div></div>
      </div>
      <div class="list-right">
        <button class="btn btn-icon btn-danger btn-sm" onclick="delBud('${b.id}')">✕</button>
      </div>
    </div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">💰</div><p>${t("noRecords")}</p></div>`;
  $("p-budgets").innerHTML=`<div class="page-header"><div><div class="page-title">${t("budgets")}</div></div><button class="btn btn-primary btn-sm" onclick="showAddBud()">+ ${t("addBudget")}</button></div><div class="card">${list}</div>`;
}
function showAddBud(){
  const catOpts=TCATS.map(c=>`<option>${c}</option>`).join("");
  modal(t("addBudget"),`
    <div class="fg"><label class="fl">${t("category")}</label><select class="fc" id="bcat">${catOpts}</select></div>
    <div class="fg"><label class="fl">${t("monthlyLimit")}</label><input class="fc" type="number" id="bamt"/></div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveBud()">${t("save")}</button>`);
}
async function saveBud(){
  const amt=+$("bamt")?.value;if(!amt){toast("Amount?","err");return;}
  const row={category:$("bcat")?.value,amount:amt,period:"monthly"};
  const d=await ins("budgets",row);if(!d)return;S.budgets.unshift(d);
  closeModal();toast(t("saved"),"ok");render("budgets");
}
async function delBud(id){if(!confirm(t("confirmDel")))return;await del("budgets",id);S.budgets=S.budgets.filter(x=>x.id!==id);toast(t("deleted"),"info");render("budgets");}

// ── Goals ──
function rGoal(){
  const list=S.goals.map(g=>{
    const pct=Math.min(100,((g.saved||0)/g.target)*100);
    return `<div class="list-item">
      <div class="list-icon">${pct>=100?"🎉":"🎯"}</div>
      <div class="list-content">
        <div class="list-title">${g.name}</div>
        <div class="list-sub">${fmA(g.saved||0)} / ${fmA(g.target)} · ${pct.toFixed(0)}%</div>
        <div class="prog"><div class="prog-bar" style="width:${pct}%;background:linear-gradient(90deg,var(--purple),var(--accent));"></div></div>
        ${g.deadline?`<div style="font-size:11px;color:var(--text3);margin-top:4px;">📅 ${fmD(g.deadline)}</div>`:""}
      </div>
      <div class="list-right">
        <button class="btn btn-icon btn-ghost btn-sm" onclick="addToGoal('${g.id}')">+</button>
        <button class="btn btn-icon btn-danger btn-sm" onclick="delGoal('${g.id}')">✕</button>
      </div>
    </div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">🎯</div><p>${t("noRecords")}</p></div>`;
  $("p-goals").innerHTML=`<div class="page-header"><div><div class="page-title">${t("goals")}</div></div><button class="btn btn-primary btn-sm" onclick="showAddGoal()">+ ${t("addGoal")}</button></div><div class="card">${list}</div>`;
}
function showAddGoal(){
  modal(t("addGoal"),`
    <div class="fg"><label class="fl">${t("name")}</label><input class="fc" id="gn" placeholder="e.g. New laptop"/></div>
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("target")}</label><input class="fc" type="number" id="gt"/></div>
      <div class="fg"><label class="fl">${t("deadline")}</label><input class="fc" type="date" id="gd"/></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveGoal()">${t("save")}</button>`);
}
async function saveGoal(){
  const name=$("gn")?.value?.trim(),target=+$("gt")?.value;
  if(!name||!target){toast("Name & target?","err");return;}
  const row={name,target,saved:0,deadline:$("gd")?.value||null};
  const d=await ins("goals",row);if(!d)return;S.goals.unshift(d);
  closeModal();toast(t("saved"),"ok");render("goals");
}
async function addToGoal(id){
  const amt=prompt("Amount to add:");if(!amt)return;
  const g=S.goals.find(x=>x.id===id);if(!g)return;
  g.saved=(g.saved||0)+(+amt);
  await upd("goals",id,{saved:g.saved});
  toast(t("saved"),"ok");render("goals");
}
async function delGoal(id){if(!confirm(t("confirmDel")))return;await del("goals",id);S.goals=S.goals.filter(x=>x.id!==id);toast(t("deleted"),"info");render("goals");}

// ── Reports ──
function rRep(){
  const now=new Date();
  const ms=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-01`;
  const ys=`${now.getFullYear()}-01-01`;
  const lastM=new Date(now.getFullYear(),now.getMonth()-1,1);
  const lastMs=`${lastM.getFullYear()}-${String(lastM.getMonth()+1).padStart(2,"0")}-01`;
  const lastMe=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-01`;
  
  const monthTx=S.transactions.filter(tx=>tx.date>=ms);
  const lastMTx=S.transactions.filter(tx=>tx.date>=lastMs&&tx.date<lastMe);
  const yearTx=S.transactions.filter(tx=>tx.date>=ys);
  
  const mI=monthTx.filter(t=>t.type==="income").reduce((s,t)=>s+t.amount,0);
  const mE=monthTx.filter(t=>t.type==="expense").reduce((s,t)=>s+t.amount,0);
  const lmI=lastMTx.filter(t=>t.type==="income").reduce((s,t)=>s+t.amount,0);
  const lmE=lastMTx.filter(t=>t.type==="expense").reduce((s,t)=>s+t.amount,0);
  const yI=yearTx.filter(t=>t.type==="income").reduce((s,t)=>s+t.amount,0);
  const yE=yearTx.filter(t=>t.type==="expense").reduce((s,t)=>s+t.amount,0);
  
  const incChange=lmI?((mI-lmI)/lmI*100).toFixed(1):0;
  const expChange=lmE?((mE-lmE)/lmE*100).toFixed(1):0;
  
  // Categories
  const cats={};S.transactions.filter(t=>t.type==="expense"&&t.date>=ms).forEach(tx=>{const c=tx.category||"other";cats[c]=(cats[c]||0)+tx.amount;});
  const catList=Object.entries(cats).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([c,v])=>{const pct=(v/mE*100).toFixed(0);return `<div class="list-item"><div class="list-content"><div class="list-title">${c}</div><div class="list-sub">${pct}%</div><div class="prog"><div class="prog-bar" style="width:${pct}%;background:var(--accent);"></div></div></div><div class="list-right"><div class="list-amount">${fmA(v)}</div></div></div>`;}).join("")||`<div class="empty"><p>${t("noRecords")}</p></div>`;
  
  // Top products
  const topP={};S.invoices.forEach(inv=>{(inv.items||[]).forEach(it=>{const k=it.name||"Other";if(!topP[k])topP[k]={qty:0,revenue:0};topP[k].qty+=it.qty;topP[k].revenue+=it.total;});});
  const topPList=Object.entries(topP).sort((a,b)=>b[1].revenue-a[1].revenue).slice(0,5).map(([n,v])=>`<div class="list-item"><div class="list-icon">📦</div><div class="list-content"><div class="list-title">${n}</div><div class="list-sub">${v.qty} sold</div></div><div class="list-right"><div class="list-amount" style="color:var(--green);">${fmA(v.revenue)}</div></div></div>`).join("")||`<div class="empty"><p>${t("noRecords")}</p></div>`;
  
  $("p-reports").innerHTML=`
    <div class="page-header">
      <div><div class="page-title">${t("reports")}</div></div>
      <div class="page-actions">
        <button class="btn btn-ghost btn-sm" onclick="exportCSV()">CSV</button>
        <button class="btn btn-ghost btn-sm" onclick="exportJSON()">JSON</button>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-card green"><div class="sc-icon">↑</div><div class="sc-label">${t("thisMonth")} ${t("income")}</div><div class="sc-value" style="color:var(--green);">${fmA(mI)}</div><div class="sc-sub" style="color:${+incChange>=0?"var(--green)":"var(--red)"};">${incChange>=0?"+":""}${incChange}% vs ${t("lastMonth")}</div></div>
      <div class="stat-card red"><div class="sc-icon">↓</div><div class="sc-label">${t("thisMonth")} ${t("expenses")}</div><div class="sc-value" style="color:var(--red);">${fmA(mE)}</div><div class="sc-sub" style="color:${+expChange<=0?"var(--green)":"var(--red)"};">${expChange>=0?"+":""}${expChange}% vs ${t("lastMonth")}</div></div>
      <div class="stat-card blue"><div class="sc-icon">★</div><div class="sc-label">${t("netProfit")}</div><div class="sc-value" style="color:${mI-mE>=0?"var(--green)":"var(--red)"};">${fmA(mI-mE)}</div></div>
      <div class="stat-card purple"><div class="sc-icon">📅</div><div class="sc-label">${t("thisYear")}</div><div class="sc-value" style="font-size:16px;">${fmA(yI-yE)}</div></div>
    </div>
    <div class="card"><div class="card-head"><span class="card-title">${t("categoryBreakdown")}</span></div>${catList}</div>
    <div class="card"><div class="card-head"><span class="card-title">${t("topProducts")}</span></div>${topPList}</div>`;
}

function exportCSV(){
  const rows=[["Date","Type","Category","Note","Amount","Currency","Account"],...S.transactions.map(tx=>[tx.date,tx.type,tx.category,tx.note||"",tx.amount,tx.currency,getAccName(tx.account_id)])];
  const csv=rows.map(r=>r.map(v=>`"${v}"`).join(",")).join("\n");
  const b=new Blob([csv],{type:"text/csv"});const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download=`tx-${today()}.csv`;a.click();
  toast("CSV downloaded","ok");
}
function exportJSON(){
  const data={accounts:S.accounts,transactions:S.transactions,invoices:S.invoices,products:S.products,customers:S.customers,suppliers:S.suppliers,budgets:S.budgets,goals:S.goals,profile:S.profile,exportedAt:new Date().toISOString()};
  const b=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download=`backup-${today()}.json`;a.click();
  toast("Backup downloaded","ok");
}

// ── AI ──
function rAI(){
  $("p-ai").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("ai")}</div><div class="page-sub">Powered by Claude</div></div></div>
    ${!S.aiKey?`<div class="alert alert-blue">ℹ️ Add Claude API key in <span style="cursor:pointer;color:var(--accent);text-decoration:underline;" onclick="nav('settings')">Settings</span></div>`:""}
    <div class="card" style="display:flex;flex-direction:column;height:65vh;">
      <div id="ai-msgs" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;"></div>
      <div style="padding:12px;border-top:1px solid var(--border);display:flex;gap:6px;">
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
  if(!S.aiKey){m.innerHTML+=`<div style="align-self:flex-start;background:var(--bg3);padding:10px 14px;border-radius:14px;font-size:13px;color:var(--red);">No API key. Add it in Settings.</div>`;return;}
  const loadId="l"+Date.now();
  m.innerHTML+=`<div id="${loadId}" style="align-self:flex-start;background:var(--bg3);padding:10px 14px;border-radius:14px;font-size:13px;color:var(--text3);"><span class="spin"></span> Thinking...</div>`;
  m.scrollTop=m.scrollHeight;
  const {assets,liab,net}=calcNW();
  const ctx=`Financial assistant. User data:
Net Worth: ${fmA(net)} | Assets: ${fmA(assets)} | Liabilities: ${fmA(liab)}
Accounts: ${S.accounts.map(a=>`${a.name}(${a.type}): ${fmA(a.balance||0,a.currency)}`).join(", ")||"none"}
Recent: ${S.transactions.slice(0,10).map(tx=>`${tx.date} ${tx.type} ${fmA(tx.amount)} ${tx.note||tx.category}`).join("; ")||"none"}
${S.invoices.length} invoices, ${S.products.length} products
Answer in user's language. Be concise.`;
  try{
    const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":S.aiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:"claude-opus-4-20250514",max_tokens:1024,system:ctx,messages:[{role:"user",content:msg}]})});
    const data=await res.json();
    const reply=data.content?.[0]?.text||"Error";
    $(loadId).innerHTML=reply.replace(/\n/g,"<br>");
  }catch(e){$(loadId).innerHTML="Error: "+e.message;$(loadId).style.color="var(--red)";}
  m.scrollTop=m.scrollHeight;
}

// ── Settings ──
function rSet(){
  const curOpts=CURS.map(c=>`<option value="${c.code}" ${c.code===S.currency?"selected":""}>${c.code} ${c.sym}</option>`).join("");
  $("p-settings").innerHTML=`
    <div class="page-header"><div class="page-title">${t("settings")}</div></div>
    <div class="card"><div class="card-head"><span class="card-title">${t("appearance")}</span></div><div class="card-body">
      <div class="fgrid">
        <div class="fg"><label class="fl">${t("lang")}</label><select class="fc" onchange="setLang(this.value)"><option value="en" ${S.lang==="en"?"selected":""}>English</option><option value="fa" ${S.lang==="fa"?"selected":""}>فارسی</option></select></div>
        <div class="fg"><label class="fl">${t("defCurrency")}</label><select class="fc" onchange="setCur(this.value)">${curOpts}</select></div>
      </div>
    </div></div>
    <div class="card"><div class="card-head"><span class="card-title">${t("profile")} / Company</span></div><div class="card-body">
      <div class="fgrid">
        <div class="fg"><label class="fl">${t("companyName")}</label><input class="fc" id="pf-name" value="${S.profile.name||""}"/></div>
        <div class="fg"><label class="fl">${t("companyPhone")}</label><input class="fc" id="pf-phone" value="${S.profile.phone||""}"/></div>
        <div class="fg"><label class="fl">${t("companyEmail")}</label><input class="fc" id="pf-email" value="${S.profile.email||""}"/></div>
        <div class="fg"><label class="fl">${t("companyAddress")}</label><input class="fc" id="pf-addr" value="${S.profile.address||""}"/></div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="saveProfile()">${t("save")}</button>
    </div></div>
    <div class="card"><div class="card-head"><span class="card-title">${t("ai")}</span></div><div class="card-body">
      <div class="fg"><label class="fl">${t("aiKey")}</label><input class="fc" type="password" id="aik" value="${S.aiKey}" placeholder="sk-ant-..."/></div>
      <div style="font-size:11px;color:var(--text3);margin-bottom:10px;">${t("aiKeyHint")}</div>
      <button class="btn btn-primary btn-sm" onclick="saveAIKey()">${t("save")}</button>
    </div></div>
    <div class="card"><div class="card-head"><span class="card-title">Account</span></div><div class="card-body">
      <div style="font-size:13px;color:var(--text2);margin-bottom:12px;">Signed in as <strong>${S.user?.email}</strong></div>
      <button class="btn btn-danger btn-sm" onclick="signOut()">↩ ${t("signOut")}</button>
    </div></div>
    <div class="card"><div class="card-head"><span class="card-title">${t("dataManage")}</span></div><div class="card-body" style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-secondary btn-sm" onclick="exportJSON()">📦 ${t("backup")}</button>
      <button class="btn btn-secondary btn-sm" onclick="exportCSV()">📊 ${t("exportCSV")}</button>
    </div></div>`;
}
function saveProfile(){
  S.profile={name:$("pf-name")?.value||"",phone:$("pf-phone")?.value||"",email:$("pf-email")?.value||"",address:$("pf-addr")?.value||""};
  localStorage.setItem("profile",JSON.stringify(S.profile));
  toast(t("saved"),"ok");
}
function saveAIKey(){S.aiKey=$("aik")?.value||"";localStorage.setItem("aiKey",S.aiKey);toast("AI key saved","ok");}
function setLang(l){S.lang=l;localStorage.setItem("lang",l);applyLang();buildShell();render(S.page);}
function setCur(c){S.currency=c;localStorage.setItem("currency",c);toast(`${c}`,"info");}

// ── Shell ──
function toggleSidebar(){$("sidebar")?.classList.toggle("open");$("sbov")?.classList.toggle("show");}
function closeSidebar(){$("sidebar")?.classList.remove("open");$("sbov")?.classList.remove("show");}
function applyLang(){document.documentElement.lang=S.lang;document.body.classList.toggle("rtl",S.lang==="fa");}

const PAGES=[
  {id:"dashboard",icon:"⊞",label:"dashboard",mob:true},
  {id:"pos",icon:"🛒",label:"pos",mob:true},
  {id:"transactions",icon:"⇄",label:"transactions",mob:true},
  {id:"invoices",icon:"🧾",label:"invoices",mob:true},
  {id:"accounts",icon:"🏦",label:"accounts",mob:false},
  {id:"inventory",icon:"📦",label:"inventory",mob:false},
  {id:"customers",icon:"👥",label:"customers",mob:false},
  {id:"suppliers",icon:"🏭",label:"suppliers",mob:false},
  {id:"budgets",icon:"💰",label:"budgets",mob:false},
  {id:"goals",icon:"🎯",label:"goals",mob:false},
  {id:"reports",icon:"📊",label:"reports",mob:false},
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
      <div class="t-date">${new Date().toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}</div>
      <div class="t-right">
        <div class="lang-tog">
          <button class="lang-btn ${S.lang==="en"?"on":""}" onclick="setLang('en')">EN</button>
          <button class="lang-btn ${S.lang==="fa"?"on":""}" onclick="setLang('fa')">FA</button>
        </div>
      </div>
    </div>
    <div class="sb-ov" id="sbov" onclick="closeSidebar()"></div>
    <div class="sidebar" id="sidebar">
      <div class="sb-grp"><div class="sb-lbl">Menu</div>${navHTML}</div>
    </div>
    <div class="main">${pages}</div>
    <nav class="mob-nav"><div class="mob-items">${mobHTML}</div></nav>
    <button class="fab" onclick="showAddTx()">+</button>
    <div id="toasts"></div>`;
}

// ── Boot ──
async function boot(){
  applyLang();
  $("app").innerHTML=`<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;"><div style="color:var(--text3);"><span class="spin"></span> ${t("loading")}</div></div>`;
  const {data:{session}}=await sb.auth.getSession();
  if(session?.user){S.user=session.user;await loadAll();buildShell();render(S.page);}
  else renderAuth();
  if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
}
document.addEventListener("DOMContentLoaded",boot);
