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
  debtorsCreditors:"Debtors & Creditors",
  purchaseInv:"Purchase Invoices",
  quotations:"Quotations",
  recurring:"Recurring Expenses",
  salesReturn:"Sales Return",
  debts:"Debts",
  iOwe:"I Owe",
  theyOwe:"They Owe Me",
  netPosition:"Net Position",
  realNetWorth:"Real Net Worth",
  debtors:"Debtors",
  creditors:"Creditors",
  totalOwed:"Total Owed",
  totalOwing:"Total Owing",
  balance:"Balance",
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
  debtorsCreditors:"بدهکار و طلبکار",
  purchaseInv:"فاکتورهای خرید",
  quotations:"پیش‌فاکتورها",
  recurring:"هزینه‌های ثابت",
  salesReturn:"برگشت فروش",
  debts:"بدهی‌ها و طلب‌ها",
  iOwe:"بدهی من",
  theyOwe:"طلب من",
  netPosition:"موجودی خالص",
  realNetWorth:"دارایی خالص واقعی",
  debtors:"بدهکاران",
  creditors:"طلبکاران",
  totalOwed:"کل طلب",
  totalOwing:"کل بدهی",
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
  accounts:[],transactions:[],invoices:[],products:[],customers:[],suppliers:[],budgets:[],goals:[],vouchers:[],cheques_in:[],cheques_out:[],denominations:{},debts:[],purchase_invoices:[],quotations:[],sales_returns:[],recurring_expenses:[],
  pInvItems:[],qItems:[],
  profile:JSON.parse(localStorage.getItem("profile")||"{}"),
  invItems:[],cart:[],searchQ:"",pillFilter:"all",
  dateFilter:"all",dateFrom:"",dateTo:"",
  lowBalanceThreshold:parseFloat(localStorage.getItem("lowBalThr"))||100,
  _saving:false,
};

// Prevent double-save: lock all save buttons during processing
function lockSave(){
  if(S._saving)return false;
  S._saving=true;
  document.querySelectorAll('.mfoot .btn-primary, .card-head .btn-primary').forEach(b=>{b.disabled=true;b.style.opacity="0.5";});
  return true;
}
function unlockSave(){
  S._saving=false;
  document.querySelectorAll('.mfoot .btn-primary, .card-head .btn-primary').forEach(b=>{b.disabled=false;b.style.opacity="";});
}

// Audit log: record significant actions silently
async function logAction(action,entityType,entityId,details){
  try{
    await sb.from("audit_log").insert({user_id:S.user.id,action,entity_type:entityType,entity_id:String(entityId||""),details:details||""});
  }catch(e){/* silent fail */}
}

// Period locking: prevent editing old data
function isLocked(date){
  const lockEnd=localStorage.getItem("lockedUntil");
  if(!lockEnd)return false;
  return date<=lockEnd;
}
function lockPeriod(){
  const date=prompt("Lock all data up to (YYYY-MM-DD):",today());
  if(!date||!/^\d{4}-\d{2}-\d{2}$/.test(date)){toast("Invalid date format","err");return;}
  if(!confirm(`Lock all transactions up to ${date}?\n\nYou won't be able to edit or delete anything from that date or earlier.`))return;
  localStorage.setItem("lockedUntil",date);
  toast(`Locked until ${date}`,"ok");
  render(S.page);
}
function unlockPeriod(){
  if(!confirm("Unlock all periods? You'll be able to edit old data again."))return;
  localStorage.removeItem("lockedUntil");
  toast("All periods unlocked","ok");
  render(S.page);
}

// View audit log
async function showAuditLog(){
  const {data,error}=await sb.from("audit_log").select("*").eq("user_id",S.user.id).order("created_at",{ascending:false}).limit(100);
  if(error){toast("Could not load log","err");return;}
  const rows=(data||[]).map(l=>{
    const dt=new Date(l.created_at);
    return `<div class="list-item"><div class="list-icon">📋</div><div class="list-content"><div class="list-title">${l.action} ${l.entity_type||""}</div><div class="list-sub">${dt.toLocaleString()} · ${l.details||""}</div></div></div>`;
  }).join("")||`<div class="empty"><p>No activity yet</p></div>`;
  modal("📋 Activity Log (Last 100)",`<div class="card">${rows}</div>`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
}

// ═════════════════════════════════════════
// QUICK CALCULATOR
// ═════════════════════════════════════════
function showCalculator(){
  modal("🧮 Quick Calculator",`
    <div style="background:var(--glass);padding:14px;border-radius:10px;margin-bottom:12px;">
      <input class="fc" id="calcDisp" value="0" readonly style="font-family:var(--mono);font-size:24px;text-align:right;background:rgba(0,0,0,0.2);"/>
      <div style="font-size:11px;color:var(--text3);margin-top:6px;" id="calcHistory">Enter calculation</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;">
      <button class="btn btn-secondary" onclick="calcClear()">C</button>
      <button class="btn btn-secondary" onclick="calcBack()">⌫</button>
      <button class="btn btn-secondary" onclick="calcOp('%')">%</button>
      <button class="btn btn-primary" onclick="calcOp('/')">÷</button>
      <button class="btn btn-ghost" onclick="calcNum('7')">7</button>
      <button class="btn btn-ghost" onclick="calcNum('8')">8</button>
      <button class="btn btn-ghost" onclick="calcNum('9')">9</button>
      <button class="btn btn-primary" onclick="calcOp('*')">×</button>
      <button class="btn btn-ghost" onclick="calcNum('4')">4</button>
      <button class="btn btn-ghost" onclick="calcNum('5')">5</button>
      <button class="btn btn-ghost" onclick="calcNum('6')">6</button>
      <button class="btn btn-primary" onclick="calcOp('-')">−</button>
      <button class="btn btn-ghost" onclick="calcNum('1')">1</button>
      <button class="btn btn-ghost" onclick="calcNum('2')">2</button>
      <button class="btn btn-ghost" onclick="calcNum('3')">3</button>
      <button class="btn btn-primary" onclick="calcOp('+')">+</button>
      <button class="btn btn-ghost" onclick="calcNum('0')" style="grid-column:span 2;">0</button>
      <button class="btn btn-ghost" onclick="calcNum('.')">.</button>
      <button class="btn btn-success" onclick="calcEq()">=</button>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`);
  window._calc={cur:"0",prev:null,op:null,reset:false};
}
function calcNum(n){
  const c=window._calc;
  if(c.reset){c.cur=n==="."?"0.":n;c.reset=false;}
  else{
    if(n==="."&&c.cur.includes("."))return;
    c.cur=c.cur==="0"&&n!=="."?n:c.cur+n;
  }
  $("calcDisp").value=c.cur;
}
function calcOp(op){
  const c=window._calc;
  if(c.prev!==null&&!c.reset){calcEq();}
  c.prev=parseFloat(c.cur);c.op=op;c.reset=true;
  $("calcHistory").textContent=`${c.prev} ${op}`;
}
function calcEq(){
  const c=window._calc;
  if(c.prev===null||c.op===null)return;
  const cur=parseFloat(c.cur);let res=0;
  if(c.op==="+")res=c.prev+cur;
  else if(c.op==="-")res=c.prev-cur;
  else if(c.op==="*")res=c.prev*cur;
  else if(c.op==="/")res=cur===0?0:c.prev/cur;
  else if(c.op==="%")res=c.prev*cur/100;
  $("calcHistory").textContent=`${c.prev} ${c.op} ${cur} =`;
  c.cur=String(Math.round(res*100)/100);
  c.prev=null;c.op=null;c.reset=true;
  $("calcDisp").value=c.cur;
}
function calcClear(){window._calc={cur:"0",prev:null,op:null,reset:false};$("calcDisp").value="0";$("calcHistory").textContent="Enter calculation";}
function calcBack(){const c=window._calc;c.cur=c.cur.length>1?c.cur.slice(0,-1):"0";$("calcDisp").value=c.cur;}

// ═════════════════════════════════════════
// QUICK STATS
// ═════════════════════════════════════════
function getQuickStats(){
  return {
    customers:S.customers.length,
    suppliers:S.suppliers.length,
    products:S.products.length,
    invoices:S.invoices.length,
    pInvoices:S.purchase_invoices.length,
    vouchers:S.vouchers.length,
    transactions:S.transactions.length,
    quotations:S.quotations.length,
    debts:S.debts.length,
    cheques:S.cheques_in.length+S.cheques_out.length,
    accounts:S.accounts.length,
  };
}
function showQuickStats(){
  const s=getQuickStats();
  const grid=[
    ["👥 Customers",s.customers],["🏭 Suppliers",s.suppliers],
    ["📦 Products",s.products],["🏦 Accounts",s.accounts],
    ["🧾 Sales Invoices",s.invoices],["🛒 Purchase Invoices",s.pInvoices],
    ["📋 Vouchers",s.vouchers],["⇄ Transactions",s.transactions],
    ["📝 Quotations",s.quotations],["💼 Debts/Credits",s.debts],
    ["📥📤 Cheques",s.cheques],
  ];
  const html=grid.map(([l,v])=>`<div style="background:var(--glass);padding:14px;border-radius:10px;display:flex;justify-content:space-between;align-items:center;">
    <div style="font-size:13px;color:var(--text2);">${l}</div>
    <div style="font-size:20px;font-family:var(--mono);font-weight:700;color:var(--accent);">${v}</div>
  </div>`).join("");
  modal("📊 Quick Stats",`<div style="display:grid;gap:8px;">${html}</div>`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
}

// ═════════════════════════════════════════
// SEARCH EVERYWHERE
// ═════════════════════════════════════════
function showGlobalSearch(){
  modal("🔍 Search Everywhere",`
    <div class="search-box"><span class="search-icon">🔍</span>
      <input class="fc" id="globSearch" placeholder="Search invoices, customers, products, vouchers..." oninput="runGlobalSearch(this.value)" autofocus/>
    </div>
    <div id="globResults" style="margin-top:12px;"></div>`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
}
function runGlobalSearch(q){
  const res=$("globResults");if(!res)return;
  if(!q||q.length<2){res.innerHTML=`<div style="text-align:center;padding:20px;color:var(--text3);font-size:12px;">Type at least 2 characters</div>`;return;}
  const ql=q.toLowerCase();
  const groups=[];
  
  const invs=S.invoices.filter(i=>(i.invoice_no||"").toLowerCase().includes(ql)||getCustName(i.customer_id).toLowerCase().includes(ql)||String(i.grand_total||"").includes(q)).slice(0,5);
  if(invs.length)groups.push({title:"🧾 Invoices",items:invs.map(i=>`<div class="list-item" onclick="closeModal(true);nav('invoices');setTimeout(()=>showInvDetail('${i.id}'),200)"><div class="list-icon">🧾</div><div class="list-content"><div class="list-title">${i.invoice_no}</div><div class="list-sub">${getCustName(i.customer_id)} · ${fmA(i.grand_total)}</div></div></div>`).join("")});
  
  const pinvs=S.purchase_invoices.filter(p=>(p.invoice_no||"").toLowerCase().includes(ql)||getSuppName(p.supplier_id).toLowerCase().includes(ql)).slice(0,5);
  if(pinvs.length)groups.push({title:"🛒 Purchase Invoices",items:pinvs.map(p=>`<div class="list-item" onclick="closeModal(true);nav('purchaseInv');setTimeout(()=>showPInvDetail('${p.id}'),200)"><div class="list-icon">🛒</div><div class="list-content"><div class="list-title">${p.invoice_no}</div><div class="list-sub">${getSuppName(p.supplier_id)} · ${fmA(p.grand_total)}</div></div></div>`).join("")});
  
  const vchs=S.vouchers.filter(v=>(v.voucher_no||"").toLowerCase().includes(ql)||(v.party||"").toLowerCase().includes(ql)||(v.note||"").toLowerCase().includes(ql)||String(v.amount||"").includes(q)).slice(0,5);
  if(vchs.length)groups.push({title:"📋 Vouchers",items:vchs.map(v=>`<div class="list-item" onclick="closeModal(true);nav('vouchers');setTimeout(()=>showVoucherDetail('${v.id}'),200)"><div class="list-icon">📋</div><div class="list-content"><div class="list-title">${v.voucher_no}</div><div class="list-sub">${v.party||"—"} · ${fmA(v.amount)}</div></div></div>`).join("")});
  
  const custs=S.customers.filter(c=>(c.name||"").toLowerCase().includes(ql)||(c.customer_code||"").toLowerCase().includes(ql)||(c.phone||"").includes(q)).slice(0,5);
  if(custs.length)groups.push({title:"👥 Customers",items:custs.map(c=>`<div class="list-item" onclick="closeModal(true);nav('customers');setTimeout(()=>showAddCustomer('${c.id}'),200)"><div class="list-icon">👤</div><div class="list-content"><div class="list-title">${c.name}</div><div class="list-sub">${c.customer_code||"—"} · ${c.phone||""}</div></div></div>`).join("")});
  
  const supps=S.suppliers.filter(s=>(s.name||"").toLowerCase().includes(ql)||(s.phone||"").includes(q)).slice(0,5);
  if(supps.length)groups.push({title:"🏭 Suppliers",items:supps.map(s=>`<div class="list-item" onclick="closeModal(true);nav('suppliers');setTimeout(()=>showAddSupp('${s.id}'),200)"><div class="list-icon">🏭</div><div class="list-content"><div class="list-title">${s.name}</div><div class="list-sub">${s.phone||""}</div></div></div>`).join("")});
  
  const prods=S.products.filter(p=>(p.name||"").toLowerCase().includes(ql)||(p.sku||"").toLowerCase().includes(ql)).slice(0,5);
  if(prods.length)groups.push({title:"📦 Products",items:prods.map(p=>`<div class="list-item" onclick="closeModal(true);nav('inventory');setTimeout(()=>showAddProduct('${p.id}'),200)"><div class="list-icon">📦</div><div class="list-content"><div class="list-title">${p.name}</div><div class="list-sub">${p.sku||"—"} · Stock: ${p.stock||0} · ${fmA(p.sell_price||0)}</div></div></div>`).join("")});
  
  if(groups.length===0){res.innerHTML=`<div style="text-align:center;padding:30px;color:var(--text3);">No results found</div>`;return;}
  res.innerHTML=groups.map(g=>`<div style="margin-bottom:14px;"><div style="font-size:11px;color:var(--text3);text-transform:uppercase;margin-bottom:6px;font-weight:600;">${g.title}</div><div class="card">${g.items}</div></div>`).join("");
}

// ═════════════════════════════════════════
// RECENT ACTIVITY FEED
// ═════════════════════════════════════════
function getRecentActivity(){
  const all=[];
  S.invoices.slice(0,20).forEach(i=>all.push({type:"invoice",time:i.created_at||i.date,id:i.id,title:`Invoice ${i.invoice_no}`,sub:`${getCustName(i.customer_id)} · ${fmA(i.grand_total||0)}`,icon:"🧾"}));
  S.vouchers.slice(0,20).forEach(v=>all.push({type:"voucher",time:v.created_at||v.date,id:v.id,title:`${v.voucher_no}`,sub:`${v.party||"—"} · ${v.type==="receipt"?"+":"−"}${fmA(v.amount)}`,icon:v.type==="receipt"?"📥":"📤"}));
  S.transactions.slice(0,20).forEach(tx=>all.push({type:"tx",time:tx.created_at||tx.date,id:tx.id,title:tx.note||tx.category||"Transaction",sub:`${getAccName(tx.account_id)} · ${tx.type==="income"?"+":"−"}${fmA(tx.amount)}`,icon:tx.type==="income"?"↑":"↓"}));
  return all.sort((a,b)=>new Date(b.time)-new Date(a.time)).slice(0,15);
}

// ═════════════════════════════════════════
// EXPORT / IMPORT BACKUP
// ═════════════════════════════════════════
function exportBackup(){
  const data={
    version:"v8",
    exportedAt:new Date().toISOString(),
    profile:S.profile,
    settings:{lang:S.lang,currency:S.currency,companyTRN:localStorage.getItem("companyTRN"),companyLogo:localStorage.getItem("companyLogo"),defaultTax:localStorage.getItem("defaultTax")},
    accounts:S.accounts,
    customers:S.customers,
    suppliers:S.suppliers,
    products:S.products,
    invoices:S.invoices,
    purchase_invoices:S.purchase_invoices,
    quotations:S.quotations,
    vouchers:S.vouchers,
    transactions:S.transactions,
    cheques_in:S.cheques_in,
    cheques_out:S.cheques_out,
    debts:S.debts,
    budgets:S.budgets,
    goals:S.goals,
    recurring_expenses:S.recurring_expenses,
  };
  const json=JSON.stringify(data,null,2);
  const blob=new Blob([json],{type:"application/json"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");a.href=url;
  a.download=`finance-backup-${today()}.json`;
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast("Backup downloaded ✓","ok");
}

function showImportDialog(){
  modal("📥 Import Backup",`
    <div class="alert alert-amber" style="margin-bottom:12px;">
      ⚠️ Warning: This will <strong>ADD</strong> data from the backup file to your current data. Existing records won't be deleted, but duplicates may appear.
    </div>
    <div class="fg"><label class="fl">Select backup JSON file</label>
      <input class="fc" type="file" id="bkupFile" accept=".json"/>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="runImport()">Import</button>`);
}
async function runImport(){
  const file=$("bkupFile")?.files?.[0];
  if(!file){toast("Select a file","err");return;}
  try{
    const text=await file.text();
    const data=JSON.parse(text);
    if(!data.version){toast("Invalid backup file","err");return;}
    if(!confirm(`Backup from ${data.exportedAt?.split("T")[0]||"unknown"}\nImport all data?`))return;
    
    const tables=[
      ["accounts",data.accounts],["customers",data.customers],["suppliers",data.suppliers],
      ["products",data.products],["invoices",data.invoices],["purchase_invoices",data.purchase_invoices],
      ["quotations",data.quotations],["vouchers",data.vouchers],["transactions",data.transactions],
      ["cheques_in",data.cheques_in],["cheques_out",data.cheques_out],["debts",data.debts],
      ["budgets",data.budgets],["goals",data.goals],["recurring_expenses",data.recurring_expenses]
    ];
    let imported=0;
    for(const [table,items] of tables){
      if(!Array.isArray(items))continue;
      for(const item of items){
        const {id,user_id,created_at,...row}=item;
        const d=await ins(table,row);
        if(d){
          if(S[table])S[table].push(d);
          imported++;
        }
      }
    }
    closeModal(true);
    toast(`Imported ${imported} records ✓`,"ok");
    // Reload data
    if(S.user)await loadAll(S.user);
    render(S.page);
  }catch(e){console.error(e);toast("Import failed: "+e.message,"err");}
}

// ═════════════════════════════════════════
// TEST DATA - GENERATE & CLEAR
// ═════════════════════════════════════════
async function generateTestData(){
  if(!confirm("Generate sample test data?\n\n• 3 accounts (Cash, Bank, Credit Card)\n• 5 customers\n• 3 suppliers\n• 10 products\n• 8 sales invoices\n• 3 purchase invoices\n• 2 quotations\n• 6 vouchers\n• 12 transactions\n• 2 debts\n\nAll items will be tagged as TEST and can be cleared later."))return;
  if(!lockSave())return;
  let created=0;
  try{
    toast("Generating... please wait","info");
    
    // 1. Accounts
    const acc1=await ins("accounts",{type:"cash",name:"[TEST] Cash Register",balance:5000,currency:"AED",is_test:true});
    const acc2=await ins("accounts",{type:"bank",name:"[TEST] Bank ADCB",bank_name:"ADCB",balance:25000,currency:"AED",is_test:true});
    const acc3=await ins("accounts",{type:"credit",name:"[TEST] Credit Card",balance:1200,currency:"AED",credit_limit:10000,is_test:true});
    if(acc1)S.accounts.push(acc1);if(acc2)S.accounts.push(acc2);if(acc3)S.accounts.push(acc3);
    created+=3;
    
    // 2. Customers
    const testCusts=[
      {name:"[TEST] Ahmad Trading LLC",customer_code:"TEST-001",phone:"+971501234567",email:"ahmad@test.com",trn_number:"100123456700001",address:"Dubai, UAE",credit_limit_amount:20000,notes:"Test customer - VIP",is_test:true},
      {name:"[TEST] Fatima Store",customer_code:"TEST-002",phone:"+971507654321",email:"fatima@test.com",address:"Sharjah",credit_limit_amount:10000,is_test:true},
      {name:"[TEST] Khalid Restaurant",customer_code:"TEST-003",phone:"+971509876543",address:"Abu Dhabi",is_test:true},
      {name:"[TEST] Sara Boutique",customer_code:"TEST-004",phone:"+971501112222",is_test:true},
      {name:"[TEST] Ali General Trading",customer_code:"TEST-005",phone:"+971503334444",trn_number:"100987654300001",is_test:true},
    ];
    const custs=[];
    for(const c of testCusts){const d=await ins("customers",c);if(d){custs.push(d);S.customers.push(d);created++;}}
    
    // 3. Suppliers
    const testSupps=[
      {name:"[TEST] Global Supply Co",phone:"+971504445555",trn_number:"100111122200001",notes:"Best prices",is_test:true},
      {name:"[TEST] Quick Wholesale",phone:"+971505556666",is_test:true},
      {name:"[TEST] City Distributors",phone:"+971506667777",is_test:true},
    ];
    const supps=[];
    for(const s of testSupps){const d=await ins("suppliers",s);if(d){supps.push(d);S.suppliers.push(d);created++;}}
    
    // 4. Products
    const testProds=[
      {name:"[TEST] iPhone Cable",sku:"TST-001",sell_price:25,cost_price:10,stock:50,reorder_level:10,is_test:true},
      {name:"[TEST] USB Hub",sku:"TST-002",sell_price:80,cost_price:35,stock:30,reorder_level:5,is_test:true},
      {name:"[TEST] Wireless Mouse",sku:"TST-003",sell_price:120,cost_price:60,stock:25,reorder_level:5,is_test:true},
      {name:"[TEST] Keyboard",sku:"TST-004",sell_price:200,cost_price:100,stock:15,reorder_level:5,is_test:true},
      {name:"[TEST] Headphones",sku:"TST-005",sell_price:350,cost_price:180,stock:20,reorder_level:5,is_test:true},
      {name:"[TEST] Monitor 24in",sku:"TST-006",sell_price:850,cost_price:500,stock:8,reorder_level:3,is_test:true},
      {name:"[TEST] Laptop Stand",sku:"TST-007",sell_price:150,cost_price:75,stock:40,reorder_level:10,is_test:true},
      {name:"[TEST] Power Bank",sku:"TST-008",sell_price:180,cost_price:80,stock:35,reorder_level:10,is_test:true},
      {name:"[TEST] Phone Case",sku:"TST-009",sell_price:45,cost_price:15,stock:60,reorder_level:15,is_test:true},
      {name:"[TEST] Screen Protector",sku:"TST-010",sell_price:30,cost_price:8,stock:100,reorder_level:20,is_test:true},
    ];
    const prods=[];
    for(const p of testProds){const d=await ins("products",p);if(d){prods.push(d);S.products.push(d);created++;}}
    
    if(acc1&&acc2&&prods.length>=5&&custs.length>=3){
      // 5. Sales Invoices
      for(let i=1;i<=8;i++){
        const cust=custs[i%custs.length];
        const p1=prods[i%prods.length],p2=prods[(i+3)%prods.length];
        const items=[
          {product_id:p1.id,name:p1.name,qty:i,unit_price:p1.sell_price,total:i*p1.sell_price},
          {product_id:p2.id,name:p2.name,qty:1,unit_price:p2.sell_price,total:p2.sell_price},
        ];
        const sub=items.reduce((s,it)=>s+it.total,0);
        const tax=sub*0.05;const grand=sub+tax;
        const d=new Date();d.setDate(d.getDate()-i*2);
        const inv=await ins("invoices",{invoice_no:`TEST-INV-${String(i).padStart(4,"0")}`,date:d.toISOString().split("T")[0],customer_id:cust.id,currency:"AED",payment_method:i%3===0?"credit":"cash",tax_pct:5,disc_pct:0,subtotal:sub,tax_amount:tax,disc_amount:0,grand_total:grand,account_id:acc1.id,status:i%3===0?"submitted":"paid",items,is_test:true});
        if(inv){S.invoices.unshift(inv);created++;}
      }
      
      // 6. Purchase Invoices
      if(supps.length>=2){
        for(let i=1;i<=3;i++){
          const sup=supps[i%supps.length];
          const p=prods[i*2%prods.length];
          const items=[{product_id:p.id,name:p.name,qty:10,unit_price:p.cost_price,total:10*p.cost_price}];
          const sub=items[0].total;const grand=sub;
          const d=new Date();d.setDate(d.getDate()-i*5);
          const pinv=await ins("purchase_invoices",{invoice_no:`TEST-PINV-${String(i).padStart(4,"0")}`,supplier_id:sup.id,date:d.toISOString().split("T")[0],currency:"AED",payment_method:"cash",tax_pct:0,disc_pct:0,subtotal:sub,tax_amount:0,disc_amount:0,grand_total:grand,account_id:acc2.id,status:"submitted",items,is_test:true});
          if(pinv){S.purchase_invoices.unshift(pinv);created++;}
        }
      }
      
      // 7. Quotations
      for(let i=1;i<=2;i++){
        const cust=custs[i%custs.length];
        const p=prods[i%prods.length];
        const items=[{product_id:p.id,name:p.name,qty:5,unit_price:p.sell_price,total:5*p.sell_price}];
        const sub=items[0].total;
        const quote=await ins("quotations",{quote_no:`TEST-QT-${String(i).padStart(4,"0")}`,customer_id:cust.id,date:today(),currency:"AED",tax_pct:5,disc_pct:0,subtotal:sub,tax_amount:sub*0.05,disc_amount:0,grand_total:sub*1.05,status:"open",items,is_test:true});
        if(quote){S.quotations.unshift(quote);created++;}
      }
      
      // 8. Vouchers
      for(let i=1;i<=3;i++){
        const cust=custs[i%custs.length];
        const d=new Date();d.setDate(d.getDate()-i);
        const v=await ins("vouchers",{voucher_no:`TEST-RV-${String(i).padStart(4,"0")}`,type:"receipt",date:d.toISOString().split("T")[0],party:cust.name,amount:500*i,currency:"AED",payment_mode:"cash",account_id:acc1.id,note:"Test receipt",is_test:true});
        if(v){S.vouchers.unshift(v);created++;}
      }
      for(let i=1;i<=3;i++){
        const sup=supps[i%supps.length];
        const d=new Date();d.setDate(d.getDate()-i);
        const v=await ins("vouchers",{voucher_no:`TEST-PV-${String(i).padStart(4,"0")}`,type:"payment",date:d.toISOString().split("T")[0],party:sup.name,amount:300*i,currency:"AED",payment_mode:"cash",account_id:acc1.id,note:"Test payment",is_test:true});
        if(v){S.vouchers.unshift(v);created++;}
      }
    }
    
    // 9. Transactions
    const cats=TCATS;
    for(let i=1;i<=12;i++){
      const d=new Date();d.setDate(d.getDate()-i);
      const tx=await ins("transactions",{type:i%3===0?"income":"expense",amount:Math.floor(Math.random()*500)+50,currency:"AED",account_id:acc1?.id,category:cats[i%cats.length],note:`[TEST] Sample ${i}`,date:d.toISOString().split("T")[0],is_test:true});
      if(tx){S.transactions.unshift(tx);created++;}
    }
    
    // 10. Debts
    const dbt1=await ins("debts",{type:"i_owe",party_name:"[TEST] John Smith",amount:1500,currency:"AED",date:today(),description:"Test loan",category:"personal",status:"open",is_test:true});
    const dbt2=await ins("debts",{type:"they_owe",party_name:"[TEST] Maria Brown",amount:800,currency:"AED",date:today(),description:"Test credit",category:"friend",status:"open",is_test:true});
    if(dbt1)S.debts.unshift(dbt1);if(dbt2)S.debts.unshift(dbt2);
    created+=2;
    
    toast(`✓ Generated ${created} test records!`,"ok");
    render(S.page);
  }catch(e){console.error(e);toast("Error: "+e.message,"err");}
  finally{unlockSave();}
}

async function clearTestData(){
  if(!confirm("Delete ALL test data?\n\nThis only removes items tagged as TEST.\nYour real data will be kept safe."))return;
  if(!lockSave())return;
  let deleted=0;
  try{
    toast("Clearing test data...","info");
    const tables=["transactions","vouchers","invoices","purchase_invoices","quotations","debts","products","customers","suppliers","accounts"];
    for(const table of tables){
      const {data:rows}=await sb.from(table).select("id").eq("is_test",true);
      if(rows&&rows.length){
        for(const r of rows){await del(table,r.id);deleted++;}
      }
    }
    // Reload to refresh state
    if(S.user)await loadAll(S.user);
    toast(`✓ Deleted ${deleted} test records`,"ok");
    render(S.page);
  }catch(e){console.error(e);toast("Error: "+e.message,"err");}
  finally{unlockSave();}
}

async function clearAllData(){
  if(!confirm("⚠️ DELETE EVERYTHING?\n\nThis removes ALL your data:\n• All invoices, vouchers, transactions\n• All customers, suppliers, products\n• All accounts and balances\n• Everything!\n\nThis CANNOT be undone."))return;
  const confirm2=prompt('Type "DELETE EVERYTHING" to confirm:');
  if(confirm2!=="DELETE EVERYTHING"){toast("Cancelled","info");return;}
  if(!lockSave())return;
  let deleted=0;
  try{
    toast("Deleting all data...","info");
    const tables=["transactions","vouchers","invoices","purchase_invoices","quotations","debts","cheques_in","cheques_out","products","customers","suppliers","accounts","budgets","goals","recurring_expenses"];
    for(const table of tables){
      const {data:rows}=await sb.from(table).select("id");
      if(rows&&rows.length){
        for(const r of rows){await del(table,r.id);deleted++;}
      }
    }
    if(S.user)await loadAll(S.user);
    localStorage.removeItem("lockedUntil");
    toast(`✓ Deleted ${deleted} records. Fresh start!`,"ok");
    render(S.page);
  }catch(e){console.error(e);toast("Error: "+e.message,"err");}
  finally{unlockSave();}
}

// Date filter UI and logic
function dateFilterRange(){
  const tod=today();
  if(S.dateFilter==="today")return {from:tod,to:tod};
  if(S.dateFilter==="7days"){const d=new Date();d.setDate(d.getDate()-7);return {from:d.toISOString().split("T")[0],to:tod};}
  if(S.dateFilter==="30days"){const d=new Date();d.setDate(d.getDate()-30);return {from:d.toISOString().split("T")[0],to:tod};}
  if(S.dateFilter==="month"){const d=new Date();d.setDate(1);return {from:d.toISOString().split("T")[0],to:tod};}
  if(S.dateFilter==="custom")return {from:S.dateFrom||"",to:S.dateTo||""};
  return {from:"",to:""};
}
function applyDateFilter(items){
  const {from,to}=dateFilterRange();
  if(from)items=items.filter(it=>(it.date||"")>=from);
  if(to)items=items.filter(it=>(it.date||"")<=to);
  return items;
}
function dateFilterHTML(refreshFn){
  return `<div class="pills" style="margin-bottom:8px;">
    <button class="pill ${S.dateFilter==="all"?"on":""}" onclick="setDateF('all','${refreshFn}')">All</button>
    <button class="pill ${S.dateFilter==="today"?"on":""}" onclick="setDateF('today','${refreshFn}')">Today</button>
    <button class="pill ${S.dateFilter==="7days"?"on":""}" onclick="setDateF('7days','${refreshFn}')">7 Days</button>
    <button class="pill ${S.dateFilter==="30days"?"on":""}" onclick="setDateF('30days','${refreshFn}')">30 Days</button>
    <button class="pill ${S.dateFilter==="month"?"on":""}" onclick="setDateF('month','${refreshFn}')">Month</button>
    <button class="pill ${S.dateFilter==="custom"?"on":""}" onclick="setDateF('custom','${refreshFn}')">Custom</button>
  </div>
  ${S.dateFilter==="custom"?`<div style="background:var(--glass);padding:10px;border-radius:10px;margin-bottom:12px;display:grid;grid-template-columns:1fr 1fr auto;gap:6px;align-items:end;">
    <div><label style="font-size:10px;color:var(--text3);">From</label><input class="fc" type="date" value="${S.dateFrom}" onchange="S.dateFrom=this.value" style="padding:7px 9px;font-size:12px;"/></div>
    <div><label style="font-size:10px;color:var(--text3);">To</label><input class="fc" type="date" value="${S.dateTo}" onchange="S.dateTo=this.value" style="padding:7px 9px;font-size:12px;"/></div>
    <button class="btn btn-primary btn-sm" onclick="${refreshFn}()">Apply</button>
  </div>`:""}`;
}
function setDateF(f,refreshFn){
  S.dateFilter=f;
  if(f!=="custom"){S.dateFrom="";S.dateTo="";}
  window[refreshFn]&&window[refreshFn]();
}

// Recalculate all account balances from transactions (fixes data inconsistencies)
async function recalcBalances(){
  if(!confirm("Recalculate all account balances?\n\nThis will reset balances based on:\n• Receipt Vouchers (+)\n• Payment Vouchers (-)\n• Paid Invoices (+)\n• Manual Transactions (income/expense)\n\nContinue?"))return;
  if(!lockSave())return;
  try{
    const balByAcc={};
    S.accounts.forEach(a=>{balByAcc[a.id]=0;});
    // 1. Vouchers
    S.vouchers.forEach(v=>{
      if(v.account_id&&balByAcc[v.account_id]!==undefined){
        balByAcc[v.account_id]+=(v.type==="receipt"?v.amount:-v.amount);
      }
    });
    // 2. Paid invoices
    S.invoices.forEach(inv=>{
      if(inv.status==="paid"&&inv.account_id&&balByAcc[inv.account_id]!==undefined){
        balByAcc[inv.account_id]+=(inv.grand_total||0);
      }
    });
    // 3. Manual transactions (not auto-created from vouchers)
    S.transactions.forEach(tx=>{
      // Skip transactions auto-created from vouchers (they contain RV-/PV- in note)
      if(tx.note&&/^(RV|PV)-/.test(tx.note))return;
      // Skip transactions auto-created from invoices
      if(tx.note&&/^(INV|POS)-/.test(tx.note))return;
      if(tx.account_id&&balByAcc[tx.account_id]!==undefined){
        balByAcc[tx.account_id]+=(tx.type==="income"?tx.amount:-tx.amount);
      }
    });
    for(const acc of S.accounts){
      const newBal=balByAcc[acc.id]||0;
      await upd("accounts",acc.id,{balance:newBal});
      acc.balance=newBal;
    }
    toast("Balances recalculated ✓","ok");render(S.page);
  }finally{unlockSave();}
}

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
  // Enable Enter key + auto-disable Save button on click
  setTimeout(()=>{
    document.querySelectorAll(".mbody input,.mbody select").forEach(el=>{
      el.addEventListener("keydown",e=>{
        if(e.key==="Enter"&&el.tagName!=="TEXTAREA"){
          e.preventDefault();
          const btn=document.querySelector(".mfoot .btn-primary");
          if(btn&&!btn.disabled)btn.click();
        }
      });
    });
    // Auto-disable Save button on click to prevent double-clicks
    document.querySelectorAll(".mfoot .btn-primary").forEach(btn=>{
      const origOnclick=btn.onclick;
      btn.addEventListener("click",function(e){
        if(this.disabled){e.preventDefault();e.stopPropagation();return false;}
        this.disabled=true;this.style.opacity="0.5";
        // Re-enable after 3 seconds (safety net in case modal stays open)
        setTimeout(()=>{if(this){this.disabled=false;this.style.opacity="";}},3000);
      },true);
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
async function signOut(){await sb.auth.signOut();S.user=null;["accounts","transactions","invoices","products","customers","suppliers","budgets","goals","vouchers","cheques_in","cheques_out","debts","purchase_invoices","quotations","sales_returns","recurring_expenses"].forEach(k=>S[k]=[]);S.denominations={};renderAuth();}

async function loadAll(){
  if(!S.user)return;
  const uid=S.user.id;
  try{
    const tabs=["accounts","transactions","invoices","products","customers","suppliers","budgets","goals","vouchers","cheques_in","cheques_out","debts","purchase_invoices","quotations","sales_returns","recurring_expenses"];
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
  S.page=page;S.searchQ="";S.pillFilter="all";S.dateFilter="all";S.dateFrom="";S.dateTo="";
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("on"));
  $("p-"+page)?.classList.add("on");
  document.querySelectorAll(".nav-item,.mob-btn").forEach(b=>b.classList.toggle("on",b.dataset.page===page));
  closeSidebar();render(page);window.scrollTo(0,0);
}
function render(page){
  const map={dashboard:rDash,cashier:rCashier,pos:rPOS,accounts:rAcc,transactions:rTx,invoices:rInv,purchaseInv:rPInv,quotations:rQuote,vouchers:rVouchers,chequesIn:rChIn,chequesOut:rChOut,inventory:rProd,customers:rCust,suppliers:rSupp,debtorsCreditors:rDebtCred,recurring:rRecurring,reports:rRep,budgets:rBud,goals:rGoal,ai:rAI,settings:rSet};
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

// Real Net Worth = Account balances + manual debts owed to me - manual debts I owe - credit cards
function calcRealNW(){
  // Cash & bank assets
  let assets=0,liab=0;
  S.accounts.forEach(a=>{
    if(a.type==="credit")liab+=(a.balance||0);
    else assets+=(a.balance||0);
  });
  // Receivables from customers (auto)
  let receivable=0;
  S.customers.forEach(c=>{
    const bal=calcCustomerBalance(c.id);
    if(bal>0)receivable+=bal;
  });
  // Manual debts
  let manualOwed=0,manualOwe=0;
  S.debts.filter(d=>d.status==="open").forEach(d=>{
    if(d.type==="they_owe")manualOwed+=(d.amount||0);
    else if(d.type==="i_owe")manualOwe+=(d.amount||0);
  });
  const totalAssets=assets+receivable+manualOwed;
  const totalLiab=liab+manualOwe;
  return {
    cash:assets,
    receivable,
    manualOwed,
    manualOwe,
    creditCard:liab,
    totalAssets,
    totalLiab,
    netWorth:totalAssets-totalLiab
  };
}
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
  const rnw=calcRealNW();
  const inc=todayTx("income"),exp=todayTx("expense");
  const cash=cashOnHand();
  
  // Hero shows Real Net Worth (includes debts)
  const heroHTML=`<div class="hero">
    <div class="hero-label">${t("realNetWorth")}</div>
    <div class="hero-value">${fmA(rnw.netWorth)}</div>
    <div class="hero-row">
      <div class="hero-item"><div class="hero-item-label">💰 Cash & Bank</div><div class="hero-item-val">${fmA(rnw.cash)}</div></div>
      <div class="hero-item"><div class="hero-item-label">📥 ${t("theyOwe")}</div><div class="hero-item-val" style="color:#86efac;">+${fmA(rnw.receivable+rnw.manualOwed)}</div></div>
      <div class="hero-item"><div class="hero-item-label">📤 ${t("iOwe")}</div><div class="hero-item-val" style="color:#fda4af;">−${fmA(rnw.creditCard+rnw.manualOwe)}</div></div>
    </div>
  </div>`;
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

  const activity=getRecentActivity();
  const recentHTML=activity.slice(0,8).map(a=>{
    const onclick=a.type==="invoice"?`nav('invoices');setTimeout(()=>showInvDetail('${a.id}'),200)`:a.type==="voucher"?`nav('vouchers');setTimeout(()=>showVoucherDetail('${a.id}'),200)`:`nav('transactions')`;
    return `<div class="list-item" onclick="${onclick}">
      <div class="list-icon">${a.icon}</div>
      <div class="list-content"><div class="list-title">${a.title}</div><div class="list-sub">${a.sub} · ${fmD(a.time)}</div></div>
    </div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">📋</div><p>${t("noRecords")}</p></div>`;

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
    <div class="card"><div class="card-head"><span class="card-title">📋 Recent Activity</span></div>${recentHTML}</div>`;
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
          ${(totalCash>0||denomTotal>0)&&Math.abs(denomTotal-totalCash)>0.01?(()=>{
            const diff=denomTotal-totalCash;
            const isOver=diff>0;
            const color=isOver?"var(--amber)":"var(--red)";
            const icon=isOver?"📈":"📉";
            const label=isOver?(S.lang==="fa"?`${fmA(Math.abs(diff))} زیاد است`:`${fmA(Math.abs(diff))} surplus (extra cash)`):(S.lang==="fa"?`${fmA(Math.abs(diff))} کم است`:`${fmA(Math.abs(diff))} shortage (missing cash)`);
            return `<div style="margin-top:10px;padding:10px;border-radius:8px;background:${isOver?"rgba(245,158,11,.15)":"rgba(239,68,68,.15)"};border:1px solid ${color};">
              <div style="font-size:12px;color:${color};font-weight:700;display:flex;align-items:center;gap:6px;">${icon} ${label}</div>
              <div style="font-size:10px;color:var(--text3);margin-top:4px;">
                ${S.lang==="fa"?"اسکناس‌ها":"Notes"}: ${fmA(denomTotal)} · ${S.lang==="fa"?"حساب":"Account"}: ${fmA(totalCash)}
              </div>
            </div>`;
          })():""}
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
      <div class="fg"><label class="fl">${t("date")}</label><input class="fc" type="date" id="vdate" value="${v?.date||today()}" max="${today()}"/></div>
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
      <div class="fg"><label class="fl">Reference #</label><input class="fc" id="vref" value="${v?.reference_no||""}" placeholder="Cheque/Bank ref"/></div>
    </div>
    <div class="fg"><label class="fl">${t("note")} (printed)</label><input class="fc" id="vnote" value="${v?.note||""}"/></div>
    <div class="fg"><label class="fl">Internal Note (private)</label><textarea class="fc" id="vintnote" rows="2" placeholder="Only you see this">${v?.internal_note||""}</textarea></div>
    <div class="fg"><label class="fl">📷 Receipt Photo (URL)</label><input class="fc" id="vreceipt" value="${v?.receipt_url||""}" placeholder="Paste image URL or leave empty"/>
      ${v?.receipt_url?`<div style="margin-top:8px;"><img src="${v.receipt_url}" style="max-width:100%;max-height:120px;border-radius:6px;cursor:pointer;" onclick="window.open('${v.receipt_url}','_blank')"/></div>`:""}
    </div>`,
    `${editId?`<button class="btn btn-danger btn-sm" onclick="delVoucher('${editId}')">✕</button>`:""}
     <button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="saveVoucher('${type}','${editId||""}')">${t("save")}</button>`);
}

async function saveVoucher(type,eid){
  const amt=parseFloat($("vamt")?.value);if(!amt||amt<=0){toast("Amount required","err");return;}
  const vDate=$("vdate")?.value||today();
  // Validation: date cannot be in future
  if(vDate>today()){toast("Date cannot be in the future","err");return;}
  // Validation: confirm if amount > 5000
  if(amt>5000&&!eid){
    if(!confirm(`Large amount: ${fmA(amt)}\n\nAre you sure?`))return;
  }
  // Validation: check duplicate voucher number
  const vNo=$("vno")?.value||"";
  if(vNo&&!eid){
    const dup=S.vouchers.find(v=>v.voucher_no===vNo);
    if(dup){toast(`Voucher #${vNo} already exists!`,"err");return;}
  }
  let accountId=$("vacc")?.value||null;
  // Auto-create default cash account if user has none
  if(!accountId&&S.accounts.length===0){
    const newAcc=await ins("accounts",{type:"cash",name:"Cash Register",bank_name:"",card_no:"",balance:0,currency:"AED",credit_limit:0});
    if(newAcc){S.accounts.unshift(newAcc);accountId=newAcc.id;toast("Cash account created","info");}
  }
  // Account is now required
  if(!accountId){toast("Please select an account","err");return;}
  const row={voucher_no:vNo,type,date:vDate,party:$("vparty")?.value||"",amount:amt,currency:$("vcur")?.value||"AED",payment_mode:$("vpm")?.value||"cash",account_id:accountId,note:$("vnote")?.value||"",reference_no:$("vref")?.value||"",internal_note:$("vintnote")?.value||"",receipt_url:$("vreceipt")?.value||""};
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
        // For credit card: receipt = paying off debt (decrease balance), payment = purchase (increase debt)
        const isCredit=acc.type==="credit";
        let delta;
        if(isCredit){
          delta=type==="receipt"?-amt:amt;
        }else{
          delta=type==="receipt"?amt:-amt;
        }
        const newBal=(acc.balance||0)+delta;
        await upd("accounts",accountId,{balance:newBal});
        acc.balance=newBal;
      }
    }
    const tx=await ins("transactions",{type:type==="receipt"?"income":"expense",amount:amt,currency:row.currency,account_id:accountId,category:type==="receipt"?"sales":"other",note:`${row.voucher_no} - ${row.party}`,date:row.date});
    if(tx)S.transactions.unshift(tx);
    logAction("create","voucher",d.id,`${vNo} ${fmA(amt)}`);
  }
  closeModal(true);toast(t("saved"),"ok");render(S.page);
}

async function delVoucher(id){
  const v=S.vouchers.find(x=>x.id===id);if(!v)return;
  if(isLocked(v.date)){toast("Cannot delete: period is locked","err");return;}
  if(!confirm(`Delete ${v.voucher_no}? This will also remove the related transaction and reverse the balance.`))return;
  // Reverse account balance
  if(v.account_id){
    const acc=getAcc(v.account_id);
    if(acc){
      const reverseAmt=v.type==="receipt"?-v.amount:v.amount;
      const newBal=(acc.balance||0)+reverseAmt;
      await upd("accounts",v.account_id,{balance:newBal});
      acc.balance=newBal;
    }
  }
  // Delete linked transaction(s) by voucher_no in note
  const linkedTx=S.transactions.filter(tx=>(tx.note||"").startsWith(v.voucher_no));
  for(const tx of linkedTx){await del("transactions",tx.id);}
  S.transactions=S.transactions.filter(tx=>!(tx.note||"").startsWith(v.voucher_no));
  // Delete voucher
  await del("vouchers",id);S.vouchers=S.vouchers.filter(x=>x.id!==id);
  closeModal(true);toast(t("deleted"),"info");render(S.page);
}

function rVouchers(){
  let vs=S.vouchers;
  if(S.pillFilter==="receipt")vs=vs.filter(v=>v.type==="receipt");
  if(S.pillFilter==="payment")vs=vs.filter(v=>v.type==="payment");
  const q=S.searchQ.toLowerCase();
  if(q)vs=vs.filter(v=>(v.party||"").toLowerCase().includes(q)||(v.voucher_no||"").toLowerCase().includes(q)||(v.note||"").toLowerCase().includes(q)||String(v.amount||"").includes(q));
  vs=applyDateFilter(vs);
  
  const list=vs.map(v=>`
    <div class="list-item" onclick="showVoucherDetail('${v.id}')">
      <div class="list-icon" style="background:${v.type==="receipt"?"var(--green-dim)":"var(--red-dim)"};color:${v.type==="receipt"?"var(--green)":"var(--red)"};">${v.type==="receipt"?"📥":"📤"}</div>
      <div class="list-content"><div class="list-title">${v.party||v.voucher_no}</div><div class="list-sub">${v.voucher_no} · ${fmD(v.date)} · ${v.payment_mode}</div></div>
      <div class="list-right"><div class="list-amount" style="color:${v.type==="receipt"?"var(--green)":"var(--red)"};">${v.type==="receipt"?"+":"−"}${fmA(v.amount,v.currency)}</div></div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">📋</div><p>${t("noRecords")}</p></div>`;

  const filteredRcpt=vs.filter(v=>v.type==="receipt").reduce((s,v)=>s+v.amount,0);
  const filteredPmnt=vs.filter(v=>v.type==="payment").reduce((s,v)=>s+v.amount,0);
  
  $("p-vouchers").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("vouchers")}</div><div class="page-sub">In: ${fmA(filteredRcpt)} · Out: ${fmA(filteredPmnt)} · ${vs.length} items</div></div>
      <div style="display:flex;gap:6px;"><button class="btn btn-success btn-sm" onclick="showVoucher('receipt')">+ ${t("receipt")}</button><button class="btn btn-danger btn-sm" onclick="showVoucher('payment')">+ ${t("payment")}</button></div>
    </div>
    <div class="search-box"><span class="search-icon">🔍</span><input class="fc" placeholder="${t("search")}..." oninput="S.searchQ=this.value;rVouchers()" value="${S.searchQ}"/></div>
    <div class="pills">
      <button class="pill ${S.pillFilter==="all"?"on":""}" onclick="S.pillFilter='all';rVouchers()">All</button>
      <button class="pill ${S.pillFilter==="receipt"?"on":""}" onclick="S.pillFilter='receipt';rVouchers()">${t("receipt")}</button>
      <button class="pill ${S.pillFilter==="payment"?"on":""}" onclick="S.pillFilter='payment';rVouchers()">${t("payment")}</button>
    </div>
    ${dateFilterHTML("rVouchers")}
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
  let items=S.cheques_in.slice();
  // Filter by due_date for cheques
  const {from,to}=dateFilterRange();
  if(from)items=items.filter(c=>(c.due_date||"")>=from);
  if(to)items=items.filter(c=>(c.due_date||"")<=to);
  const list=items.map(c=>{
    const sb={pending:"b-amber",cleared:"b-green",bounced:"b-red"};
    return `<div class="list-item" onclick="showChInDetail('${c.id}')">
      <div class="list-icon" style="background:var(--teal-dim);color:var(--teal);">📥</div>
      <div class="list-content"><div class="list-title">${c.drawer||"—"}</div><div class="list-sub">#${c.cheque_no||"—"} · ${fmD(c.due_date)}</div></div>
      <div class="list-right"><div class="list-amount" style="color:var(--green);">${fmA(c.amount,c.currency)}</div><div class="list-meta"><span class="badge ${sb[c.status]}">${t(c.status)||c.status}</span></div></div>
    </div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">📥</div><p>${t("noRecords")}</p></div>`;
  const totPending=items.filter(c=>c.status==="pending").reduce((s,c)=>s+c.amount,0);
  const totAll=items.reduce((s,c)=>s+c.amount,0);
  $("p-chequesIn").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("chequesIn")}</div><div class="page-sub">${items.length} · Total: ${fmA(totAll)} · Pending: ${fmA(totPending)}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showChIn()">+ ${t("newChequeIn")}</button>
    </div>
    ${dateFilterHTML("rChIn")}
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
  let items=S.cheques_out.slice();
  const {from,to}=dateFilterRange();
  if(from)items=items.filter(c=>(c.due_date||"")>=from);
  if(to)items=items.filter(c=>(c.due_date||"")<=to);
  const list=items.map(c=>{
    const sb={pending:"b-amber",cleared:"b-green",bounced:"b-red"};
    return `<div class="list-item" onclick="showChOut('${c.id}')">
      <div class="list-icon" style="background:var(--amber-dim);color:var(--amber);">📤</div>
      <div class="list-content"><div class="list-title">${c.payee||"—"}</div><div class="list-sub">#${c.cheque_no||"—"} · ${fmD(c.due_date)}</div></div>
      <div class="list-right"><div class="list-amount" style="color:var(--red);">${fmA(c.amount,c.currency)}</div><div class="list-meta"><span class="badge ${sb[c.status]}">${t(c.status)||c.status}</span></div></div>
    </div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">📤</div><p>${t("noRecords")}</p></div>`;
  const totPending=items.filter(c=>c.status==="pending").reduce((s,c)=>s+c.amount,0);
  const totAll=items.reduce((s,c)=>s+c.amount,0);
  $("p-chequesOut").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("chequesOut")}</div><div class="page-sub">${items.length} · Total: ${fmA(totAll)} · Pending: ${fmA(totPending)}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showChOut()">+ ${t("newChequeOut")}</button>
    </div>
    ${dateFilterHTML("rChOut")}
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
  txs=applyDateFilter(txs);
  const totIn=txs.filter(t=>t.type==="income").reduce((s,t)=>s+t.amount,0);
  const totEx=txs.filter(t=>t.type==="expense").reduce((s,t)=>s+t.amount,0);
  const list=txs.map(tx=>`
    <div class="list-item" onclick="showTxDetail('${tx.id}')">
      <div class="list-icon" style="background:${tx.type==="income"?"var(--green-dim)":"var(--red-dim)"};color:${tx.type==="income"?"var(--green)":"var(--red)"};">${tx.type==="income"?"↑":"↓"}</div>
      <div class="list-content"><div class="list-title">${tx.note||tx.category||"—"}</div><div class="list-sub">${getAccName(tx.account_id)} · ${fmD(tx.date)}</div></div>
      <div class="list-right"><div class="list-amount" style="color:${tx.type==="income"?"var(--green)":"var(--red)"};">${tx.type==="income"?"+":"−"}${fmA(tx.amount,tx.currency)}</div></div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">💸</div><p>${t("noRecords")}</p></div>`;
  $("p-transactions").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("transactions")}</div><div class="page-sub">${txs.length} · In: ${fmA(totIn)} · Out: ${fmA(totEx)}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddTx()">+ ${t("add")}</button></div>
    <div class="search-box"><span class="search-icon">🔍</span><input class="fc" placeholder="${t("search")}..." oninput="S.searchQ=this.value;rTx()" value="${S.searchQ}"/></div>
    <div class="pills">
      <button class="pill ${S.pillFilter==="all"?"on":""}" onclick="S.pillFilter='all';rTx()">All</button>
      <button class="pill ${S.pillFilter==="income"?"on":""}" onclick="S.pillFilter='income';rTx()">${t("income")}</button>
      <button class="pill ${S.pillFilter==="expense"?"on":""}" onclick="S.pillFilter='expense';rTx()">${t("expense")}</button>
    </div>
    ${dateFilterHTML("rTx")}
    <div class="card">${list}</div>`;
}
function showAddTx(){
  const accOpts=S.accounts.map(a=>`<option value="${a.id}">${AICONS[a.type]} ${a.name} (${fmA(a.balance||0,a.currency)})</option>`).join("");
  const curOpts=CURS.map(c=>`<option value="${c.code}" ${c.code===S.currency?"selected":""}>${c.code}</option>`).join("");
  const catOpts=TCATS.map(c=>`<option value="${c}">${c}</option>`).join("");
  modal(t("add")+" "+t("transactions"),`
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:14px;">
      <button class="btn btn-success" id="tbt-i" onclick="setTxT('income')">↑ ${t("income")}</button>
      <button class="btn btn-secondary" id="tbt-e" onclick="setTxT('expense')">↓ ${t("expense")}</button>
      <button class="btn btn-secondary" id="tbt-t" onclick="setTxT('transfer')">⇄ Transfer</button>
    </div>
    <div class="fgrid" id="tx-form">
      <div class="fg"><label class="fl">${t("amount")}</label><input class="fc" type="number" id="txamt" step="0.01"/></div>
      <div class="fg"><label class="fl">${t("currency")}</label><select class="fc" id="txcur">${curOpts}</select></div>
      <div class="fg" id="fg-acc"><label class="fl" id="lbl-acc">${t("account")}</label><select class="fc" id="txacc">${accOpts||"<option value=''>None</option>"}</select></div>
      <div class="fg" id="fg-acc2" style="display:none;"><label class="fl">To Account</label><select class="fc" id="txacc2">${accOpts}</select></div>
      <div class="fg" id="fg-cat"><label class="fl">${t("category")}</label><select class="fc" id="txcat">${catOpts}</select></div>
      <div class="fg"><label class="fl">${t("date")}</label><input class="fc" type="date" id="txdate" value="${today()}"/></div>
      <div class="fg"><label class="fl">${t("note")}</label><input class="fc" id="txnote"/></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveTx()">${t("save")}</button>`);
  window._txType="income";
}
function setTxT(tp){
  window._txType=tp;
  $("tbt-i").className=`btn ${tp==="income"?"btn-success":"btn-secondary"}`;
  $("tbt-e").className=`btn ${tp==="expense"?"btn-danger":"btn-secondary"}`;
  $("tbt-t").className=`btn ${tp==="transfer"?"btn-primary":"btn-secondary"}`;
  // Toggle UI
  const isTransfer=tp==="transfer";
  if($("fg-acc2"))$("fg-acc2").style.display=isTransfer?"":"none";
  if($("fg-cat"))$("fg-cat").style.display=isTransfer?"none":"";
  if($("lbl-acc"))$("lbl-acc").textContent=isTransfer?"From Account":t("account");
}
async function saveTx(){
  if(!lockSave())return;
  try{
    const amt=parseFloat($("txamt")?.value);
    if(!amt||amt<=0){toast("Amount required","err");return;}
    const type=window._txType||"expense";
    const cur=$("txcur")?.value||"AED";
    const date=$("txdate")?.value||today();
    const note=$("txnote")?.value||"";
    // Validation: future date
    if(date>today()){toast("Date cannot be in the future","err");return;}
    // Validation: large amount
    if(amt>5000){if(!confirm(`Large amount: ${fmA(amt,cur)}\n\nAre you sure?`))return;}
    
    if(type==="transfer"){
      const fromId=$("txacc")?.value;
      const toId=$("txacc2")?.value;
      if(!fromId||!toId){toast("Both accounts required","err");return;}
      if(fromId===toId){toast("Cannot transfer to same account","err");return;}
      const fromAcc=getAcc(fromId),toAcc=getAcc(toId);
      // Withdraw from source
      const fromTx=await ins("transactions",{type:"expense",amount:amt,currency:cur,account_id:fromId,category:"transfer",note:`Transfer to ${toAcc.name}${note?" - "+note:""}`,date});
      if(fromTx)S.transactions.unshift(fromTx);
      // Deposit to destination
      const toTx=await ins("transactions",{type:"income",amount:amt,currency:cur,account_id:toId,category:"transfer",note:`Transfer from ${fromAcc.name}${note?" - "+note:""}`,date});
      if(toTx)S.transactions.unshift(toTx);
      // Update balances
      if(fromAcc){fromAcc.balance=(fromAcc.balance||0)-amt;await upd("accounts",fromId,{balance:fromAcc.balance});}
      if(toAcc){toAcc.balance=(toAcc.balance||0)+amt;await upd("accounts",toId,{balance:toAcc.balance});}
      closeModal(true);toast("Transfer completed ✓","ok");render(S.page);
      return;
    }
    
    const accId=$("txacc")?.value||null;
    const row={type,amount:amt,currency:cur,account_id:accId,category:$("txcat")?.value,note,date};
    const d=await ins("transactions",row);if(!d)return;S.transactions.unshift(d);
    if(accId){const acc=getAcc(accId);if(acc){const nb=(acc.balance||0)+(type==="income"?amt:-amt);await upd("accounts",accId,{balance:nb});acc.balance=nb;}}
    closeModal(true);toast(t("saved"),"ok");render(S.page);
  }finally{unlockSave();}
}
async function delTx(id){
  const tx=S.transactions.find(x=>x.id===id);if(!tx)return;
  if(isLocked(tx.date)){toast("Cannot delete: period is locked","err");return;}
  // Check if linked to voucher/invoice via note
  const note=tx.note||"";
  let linkedV=null,linkedI=null;
  const vMatch=note.match(/^(RV|PV)-\d+/);
  if(vMatch)linkedV=S.vouchers.find(v=>v.voucher_no===vMatch[0]);
  const iMatch=note.match(/^(INV|POS)-\d+/);
  if(iMatch)linkedI=S.invoices.find(i=>i.invoice_no===iMatch[0]);
  
  let msg=t("confirmDel");
  if(linkedV)msg=`This transaction is linked to ${linkedV.voucher_no}. Delete both?`;
  if(linkedI)msg=`This transaction is linked to ${linkedI.invoice_no}. Delete both?`;
  if(!confirm(msg))return;
  
  // Reverse balance
  if(tx.account_id){
    const acc=getAcc(tx.account_id);
    if(acc){
      const reverseAmt=tx.type==="income"?-tx.amount:tx.amount;
      const newBal=(acc.balance||0)+reverseAmt;
      await upd("accounts",tx.account_id,{balance:newBal});
      acc.balance=newBal;
    }
  }
  
  // Delete linked voucher
  if(linkedV){await del("vouchers",linkedV.id);S.vouchers=S.vouchers.filter(x=>x.id!==linkedV.id);}
  // Delete linked invoice
  if(linkedI){await del("invoices",linkedI.id);S.invoices=S.invoices.filter(x=>x.id!==linkedI.id);}
  
  await del("transactions",id);S.transactions=S.transactions.filter(x=>x.id!==id);
  toast(t("deleted"),"info");render(S.page);
}
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
  const q=S.searchQ.toLowerCase();
  if(q)invs=invs.filter(inv=>(inv.invoice_no||"").toLowerCase().includes(q)||getCustName(inv.customer_id).toLowerCase().includes(q)||String(inv.grand_total||"").includes(q));
  invs=applyDateFilter(invs);
  const totSales=invs.reduce((s,i)=>s+(i.grand_total||0),0);
  const list=invs.map(inv=>{
    const sb={draft:"b-gray",submitted:"b-blue",paid:"b-green",cancelled:"b-red"};
    return `<div class="list-item" onclick="showInvDetail('${inv.id}')">
      <div class="list-icon">🧾</div>
      <div class="list-content"><div class="list-title">${inv.invoice_no||"—"}</div><div class="list-sub">${getCustName(inv.customer_id)} · ${fmD(inv.date)}</div></div>
      <div class="list-right"><div class="list-amount">${fmA(inv.grand_total||0,inv.currency)}</div><div class="list-meta"><span class="badge ${sb[inv.status]||"b-gray"}">${t(inv.status)||inv.status}</span></div></div>
    </div>`;
  }).join("")||`<div class="empty"><div class="empty-icon">🧾</div><p>${t("noRecords")}</p></div>`;
  $("p-invoices").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("invoices")}</div><div class="page-sub">${invs.length} · Total: ${fmA(totSales)} · Outstanding: ${fmA(outstandingTotal())}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddInv()">+ ${t("add")}</button></div>
    <div class="search-box"><span class="search-icon">🔍</span><input class="fc" placeholder="Search by invoice #, customer, amount..." oninput="S.searchQ=this.value;rInv()" value="${S.searchQ}"/></div>
    <div class="pills">
      <button class="pill ${S.pillFilter==="all"?"on":""}" onclick="S.pillFilter='all';rInv()">All</button>
      <button class="pill ${S.pillFilter==="paid"?"on":""}" onclick="S.pillFilter='paid';rInv()">${t("paid")}</button>
      <button class="pill ${S.pillFilter==="submitted"?"on":""}" onclick="S.pillFilter='submitted';rInv()">${t("submitted")}</button>
    </div>
    ${dateFilterHTML("rInv")}
    <div class="card">${list}</div>`;
}
function showAddInv(){
  S.invItems=[];
  // Make sure General Customer exists
  let custOpts=S.customers.map(c=>`<option value="${c.id}">${c.customer_code?`[${c.customer_code}] `:""}${c.name}</option>`).join("");
  if(S.customers.length===0)custOpts=`<option value="">⚠️ No customers - add one first</option>`;
  const accOpts=S.accounts.map(a=>`<option value="${a.id}">${AICONS[a.type]} ${a.name}</option>`).join("");
  const invNo=nextInvoiceNo();
  modal("New Invoice",`
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("invoiceNo")}</label><input class="fc" id="invno" value="${invNo}"/></div>
      <div class="fg"><label class="fl">${t("customer")} *</label><select class="fc" id="invcust">${custOpts}</select>
        <div style="font-size:10px;color:var(--text3);margin-top:4px;">No customer? <span style="color:var(--accent);cursor:pointer;text-decoration:underline;" onclick="useGeneralCust()">Use General Customer</span></div>
      </div>
      <div class="fg"><label class="fl">${t("date")}</label><input class="fc" type="date" id="invdate" value="${today()}" max="${today()}"/></div>
      <div class="fg"><label class="fl">${t("dueDate")}</label><input class="fc" type="date" id="invdue"/></div>
      <div class="fg"><label class="fl">Reference #</label><input class="fc" id="invref" placeholder="PO/Order ref"/></div>
    </div>
    <div style="font-size:11px;color:var(--text3);text-transform:uppercase;margin:14px 0 8px;">${t("items")} (from Inventory)</div>
    <div id="iitems"></div>
    ${S.products.length===0?`<div class="alert alert-amber">⚠️ No products in inventory. <span style="text-decoration:underline;cursor:pointer;" onclick="closeModal(true);nav('inventory')">Add products first</span></div>`:`<div class="search-box" style="margin-bottom:8px;"><span class="search-icon">🔍</span><input class="fc" id="prodSearch" placeholder="Search product to add..." oninput="searchInvProd(this.value)"/></div>
    <div id="prodResults" style="background:var(--glass);border-radius:8px;max-height:200px;overflow-y:auto;display:none;margin-bottom:10px;"></div>`}
    <div class="fgrid" style="margin-top:14px;">
      <div class="fg"><label class="fl">${t("tax")} (%)</label>
        <input class="fc" type="number" id="invtax" value="${localStorage.getItem("defaultTax")||"0"}" min="0" max="100" step="0.01" oninput="calcInv()"/>
        <div style="display:flex;gap:4px;margin-top:4px;flex-wrap:wrap;">
          <button class="pill" type="button" onclick="setInvTax(0)">0%</button>
          <button class="pill" type="button" onclick="setInvTax(5)">UAE 5%</button>
          <button class="pill" type="button" onclick="setInvTax(9)">9%</button>
        </div>
      </div>
      <div class="fg"><label class="fl">${t("discount")}</label><input class="fc" type="number" id="invdisc" value="0" oninput="calcInv()"/></div>
      <div class="fg"><label class="fl">${t("paymentMode")}</label><select class="fc" id="invpm"><option value="cash">${t("cash")}</option><option value="card">${t("card")}</option><option value="credit">${t("credit")}</option></select></div>
      <div class="fg"><label class="fl">${t("account")}</label><select class="fc" id="invacc">${accOpts}</select></div>
    </div>
    <div class="fg" style="margin-top:14px;"><label class="fl">Internal Note (private)</label><textarea class="fc" id="invintnote" rows="2" placeholder="Only you see this"></textarea></div>
    <div style="background:var(--glass);padding:14px;border-radius:10px;margin-top:12px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;color:var(--text3);"><span>${t("subtotal")}</span><span id="i-sub">0</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;color:var(--text3);"><span>${t("tax")}</span><span id="i-tax">0</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:5px;color:var(--text3);"><span>${t("discount")}</span><span id="i-disc">0</span></div>
      <div style="display:flex;justify-content:space-between;padding-top:10px;border-top:1px solid var(--border);font-weight:700;font-size:17px;"><span>${t("grandTotal")}</span><span id="i-grand" style="color:var(--accent);font-family:var(--mono);">0</span></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-ghost" onclick="saveInv('draft')">${t("draft")}</button><button class="btn btn-primary" onclick="saveInv('submitted')">Submit</button>`,true);
  rII();calcInv();
}

async function useGeneralCust(){
  const gen=await getOrCreateGeneralCustomer();
  if(gen&&$("invcust")){
    // Rebuild select
    const opts=S.customers.map(c=>`<option value="${c.id}" ${c.id===gen.id?"selected":""}>${c.customer_code?`[${c.customer_code}] `:""}${c.name}</option>`).join("");
    $("invcust").innerHTML=opts;
    toast("Using General Customer","ok");
  }
}

function searchInvProd(q){
  const res=$("prodResults");if(!res)return;
  if(!q||q.length<1){res.style.display="none";return;}
  const ql=q.toLowerCase();
  const matches=S.products.filter(p=>p.name.toLowerCase().includes(ql)||(p.sku||"").toLowerCase().includes(ql)).slice(0,10);
  if(matches.length===0){res.style.display="block";res.innerHTML=`<div style="padding:12px;color:var(--text3);text-align:center;">No products found</div>`;return;}
  res.style.display="block";
  res.innerHTML=matches.map(p=>`<div class="list-item" onclick="addInvProd('${p.id}')" style="cursor:pointer;">
    <div class="list-icon">📦</div>
    <div class="list-content"><div class="list-title">${p.name}</div><div class="list-sub">${p.sku||"—"} · Stock: ${p.stock||0}</div></div>
    <div class="list-right"><div class="list-amount">${fmA(p.sell_price||0)}</div></div>
  </div>`).join("");
}

function addInvProd(pid){
  const p=S.products.find(x=>x.id===pid);if(!p)return;
  // Check if already in cart
  const ex=S.invItems.find(it=>it.product_id===pid);
  if(ex){ex.qty++;ex.total=ex.qty*ex.unit_price;}
  else S.invItems.push({product_id:pid,name:p.name,qty:1,unit_price:p.sell_price||0,total:p.sell_price||0});
  if($("prodSearch"))$("prodSearch").value="";
  if($("prodResults"))$("prodResults").style.display="none";
  rII();calcInv();
}

function addII(){S.invItems.push({name:"",qty:1,unit_price:0,total:0});rII();calcInv();}
function rmII(i){S.invItems.splice(i,1);rII();calcInv();}
function rII(){
  if(S.invItems.length===0){$("iitems").innerHTML=`<div style="text-align:center;padding:16px;color:var(--text3);font-size:12px;">Search and add products above</div>`;return;}
  $("iitems").innerHTML=S.invItems.map((it,i)=>`
    <div style="background:var(--glass);padding:10px;border-radius:8px;margin-bottom:8px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <div style="font-weight:600;font-size:13px;">${it.name||"—"}</div>
        <button class="btn btn-icon btn-danger btn-sm" onclick="rmII(${i})">✕</button>
      </div>
      <div class="fgrid">
        <div class="fg" style="margin:0;"><label class="fl">Qty</label><input class="fc" type="number" value="${it.qty}" min="1" oninput="S.invItems[${i}].qty=+this.value;calcII(${i})"/></div>
        <div class="fg" style="margin:0;"><label class="fl">Price</label><input class="fc" type="number" value="${it.unit_price}" step="0.01" oninput="S.invItems[${i}].unit_price=+this.value;calcII(${i})"/></div>
      </div>
      <div style="text-align:right;margin-top:6px;color:var(--accent);font-family:var(--mono);font-weight:700;">= ${fmA(it.total)}</div>
    </div>`).join("");
}
function calcII(i){S.invItems[i].total=S.invItems[i].qty*S.invItems[i].unit_price;calcInv();rII();}
function setInvTax(v){if($("invtax")){$("invtax").value=v;calcInv();}}
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
  if(!lockSave())return;
  try{
    if(S.invItems.length===0){toast("Add at least one item","err");return;}
    const invDate=$("invdate")?.value||today();
    // Validation: future date
    if(invDate>today()){toast("Date cannot be in the future","err");return;}
    // Validation: duplicate invoice number
    const invNo=$("invno")?.value;
    if(invNo){
      const dup=S.invoices.find(i=>i.invoice_no===invNo);
      if(dup){toast(`Invoice #${invNo} already exists!`,"err");return;}
    }
    let custId=$("invcust")?.value;
    // If no customer selected/exists, auto-create General Customer
    if(!custId){
      const gen=await getOrCreateGeneralCustomer();
      if(!gen){toast("Customer required","err");return;}
      custId=gen.id;
    }
    const sub=S.invItems.reduce((s,it)=>s+(it.total||0),0);
    const taxP=+$("invtax")?.value||0,discP=+$("invdisc")?.value||0;
    const tax=sub*taxP/100,disc=sub*discP/100,grand=sub+tax-disc;
    // Validation: large amount
    if(grand>5000&&status==="submitted"){
      if(!confirm(`Large invoice: ${fmA(grand)}\n\nAre you sure?`))return;
    }
    // Validation: credit limit
    if(status==="submitted"&&custId){
      const cust=getCust(custId);
      if(cust&&(cust.credit_limit_amount||0)>0){
        const currentDebt=calcCustomerBalance(custId);
        const newDebt=currentDebt+grand;
        if(newDebt>cust.credit_limit_amount){
          if(!confirm(`⚠️ Credit Limit Warning!\n\n${cust.name}\nCurrent debt: ${fmA(currentDebt)}\nThis invoice: ${fmA(grand)}\nNew total: ${fmA(newDebt)}\nLimit: ${fmA(cust.credit_limit_amount)}\n\nProceed anyway?`))return;
        }
      }
    }
    const pm=$("invpm")?.value||"cash";
    const row={invoice_no:invNo,date:invDate,due_date:$("invdue")?.value||null,customer_id:custId,currency:S.currency,payment_method:pm,tax_pct:taxP,disc_pct:discP,subtotal:sub,tax_amount:tax,disc_amount:disc,grand_total:grand,note:"",account_id:$("invacc")?.value||null,status,items:S.invItems,reference_no:$("invref")?.value||"",internal_note:$("invintnote")?.value||""};
    const d=await ins("invoices",row);if(!d)return;
    S.invoices.unshift(d);
    // Decrement stock for products
    for(const it of S.invItems){
      if(it.product_id){
        const p=S.products.find(x=>x.id===it.product_id);
        if(p){p.stock=Math.max(0,(p.stock||0)-it.qty);await upd("products",p.id,{stock:p.stock});}
      }
    }
    if(status==="submitted"&&pm!=="credit"&&row.account_id){
      const acc=getAcc(row.account_id);if(acc){acc.balance=(acc.balance||0)+grand;await upd("accounts",row.account_id,{balance:acc.balance});}
      const tx=await ins("transactions",{type:"income",amount:grand,currency:S.currency,account_id:row.account_id,category:"sales",note:row.invoice_no,date:row.date});
      if(tx)S.transactions.unshift(tx);
    }
    closeModal(true);toast(t("saved"),"ok");render("invoices");
  }finally{unlockSave();}
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
  const cust=getCust(inv.customer_id);
  const logo=localStorage.getItem("companyLogo")||"";
  const items=(inv.items||[]).map((it,i)=>`<tr style="background:${i%2?"#f9fafb":"#fff"};"><td style="padding:12px;border-bottom:1px solid #e5e7eb;">${it.name}</td><td style="padding:12px;text-align:center;border-bottom:1px solid #e5e7eb;">${it.qty}</td><td style="padding:12px;text-align:right;border-bottom:1px solid #e5e7eb;">${fmN(it.unit_price)}</td><td style="padding:12px;text-align:right;border-bottom:1px solid #e5e7eb;font-weight:600;">${fmN(it.total)}</td></tr>`).join("");
  const win=window.open("","_blank");
  win.document.write(`<!DOCTYPE html><html><head><title>${inv.invoice_no}</title>
    <meta charset="utf-8">
    <style>
      *{box-sizing:border-box;margin:0;padding:0;}
      body{font-family:-apple-system,'Helvetica Neue',sans-serif;color:#1f2937;background:#fff;padding:0;}
      .wrap{max-width:800px;margin:0 auto;padding:40px;}
      .head{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:30px;border-bottom:3px solid #3b82f6;margin-bottom:30px;}
      .comp{flex:1;}
      .comp-name{font-size:24px;font-weight:700;color:#1f2937;margin-bottom:6px;}
      .comp-info{font-size:12px;color:#6b7280;line-height:1.6;}
      .logo{max-width:120px;max-height:80px;object-fit:contain;}
      .doc-title{text-align:right;}
      .doc-title h1{font-size:36px;font-weight:300;color:#3b82f6;letter-spacing:2px;margin-bottom:4px;}
      .doc-no{font-size:13px;color:#6b7280;}
      .meta{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:30px;}
      .meta-box{background:#f9fafb;padding:16px;border-radius:8px;border-left:3px solid #3b82f6;}
      .meta-label{font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;font-weight:600;}
      .meta-value{font-size:14px;color:#1f2937;line-height:1.5;}
      table{width:100%;border-collapse:collapse;margin-bottom:20px;border-radius:8px;overflow:hidden;}
      thead{background:#3b82f6;color:#fff;}
      th{padding:14px 12px;font-size:12px;text-align:left;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;}
      th.center{text-align:center;}
      th.right{text-align:right;}
      .totals{margin-left:auto;width:300px;background:#f9fafb;padding:20px;border-radius:8px;}
      .totals-row{display:flex;justify-content:space-between;padding:6px 0;font-size:14px;color:#4b5563;}
      .totals-grand{display:flex;justify-content:space-between;padding-top:12px;margin-top:12px;border-top:2px solid #3b82f6;font-size:20px;font-weight:700;color:#3b82f6;}
      .footer{margin-top:40px;padding-top:20px;border-top:1px solid #e5e7eb;font-size:11px;color:#6b7280;text-align:center;}
      .note{margin-top:20px;padding:12px;background:#fef3c7;border-radius:6px;font-size:12px;color:#92400e;}
      @media print {body{padding:0;} .no-print{display:none;}}
    </style></head><body>
    <div class="wrap">
      <div class="head">
        <div class="comp">
          ${logo?`<img src="${logo}" class="logo" style="margin-bottom:12px;display:block;"/>`:""}
          <div class="comp-name">${S.profile.name||"Your Business"}</div>
          <div class="comp-info">
            ${S.profile.address?`${S.profile.address}<br/>`:""}
            ${S.profile.phone?`📞 ${S.profile.phone}<br/>`:""}
            ${S.profile.email?`✉ ${S.profile.email}<br/>`:""}
            ${localStorage.getItem("companyTRN")?`TRN: ${localStorage.getItem("companyTRN")}`:""}
          </div>
        </div>
        <div class="doc-title">
          <h1>INVOICE</h1>
          <div class="doc-no">#${inv.invoice_no}</div>
        </div>
      </div>
      
      <div class="meta">
        <div class="meta-box">
          <div class="meta-label">Bill To</div>
          <div class="meta-value">
            <strong>${cust?.name||"—"}</strong><br/>
            ${cust?.customer_code?`Code: ${cust.customer_code}<br/>`:""}
            ${cust?.phone?`${cust.phone}<br/>`:""}
            ${cust?.email?`${cust.email}<br/>`:""}
            ${cust?.address?`${cust.address}<br/>`:""}
            ${cust?.trn_number?`TRN: ${cust.trn_number}`:""}
          </div>
        </div>
        <div class="meta-box">
          <div class="meta-label">Invoice Details</div>
          <div class="meta-value">
            <strong>Date:</strong> ${fmD(inv.date)}<br/>
            ${inv.due_date?`<strong>Due:</strong> ${fmD(inv.due_date)}<br/>`:""}
            ${inv.reference_no?`<strong>Ref:</strong> ${inv.reference_no}<br/>`:""}
            <strong>Status:</strong> ${inv.status||"—"}
          </div>
        </div>
      </div>
      
      <table>
        <thead><tr>
          <th>Description</th>
          <th class="center">Qty</th>
          <th class="right">Unit Price</th>
          <th class="right">Amount</th>
        </tr></thead>
        <tbody>${items}</tbody>
      </table>
      
      <div class="totals">
        <div class="totals-row"><span>Subtotal:</span><span>${fmN(inv.subtotal||0)}</span></div>
        ${inv.tax_amount?`<div class="totals-row"><span>Tax (${inv.tax_pct||0}%):</span><span>${fmN(inv.tax_amount)}</span></div>`:""}
        ${inv.disc_amount?`<div class="totals-row"><span>Discount (${inv.disc_pct||0}%):</span><span>−${fmN(inv.disc_amount)}</span></div>`:""}
        <div class="totals-grand"><span>TOTAL ${inv.currency||"AED"}:</span><span>${fmN(inv.grand_total||0)}</span></div>
      </div>
      
      ${inv.note?`<div class="note">${inv.note}</div>`:""}
      
      <div class="footer">
        Thank you for your business!<br/>
        Generated on ${new Date().toLocaleString()}
      </div>
    </div>
    <script>setTimeout(()=>window.print(),400);</script>
    </body></html>`);
  win.document.close();
}
function pdfInv(id){
  const inv=S.invoices.find(x=>x.id===id);if(!inv)return;
  try{
    const {jsPDF}=window.jspdf;const doc=new jsPDF();let y=20;
    // Header
    if(S.profile.name){doc.setFontSize(16);doc.setFont("helvetica","bold");doc.text(S.profile.name,20,y);y+=6;}
    if(S.profile.address){doc.setFontSize(9);doc.setFont("helvetica","normal");doc.setTextColor(100,100,100);doc.text(S.profile.address,20,y);y+=5;}
    if(localStorage.getItem("companyTRN")){doc.setFontSize(9);doc.text(`TRN: ${localStorage.getItem("companyTRN")}`,20,y);y+=5;}
    // Invoice title
    doc.setFontSize(24);doc.setTextColor(59,130,246);doc.setFont("helvetica","bold");
    doc.text("INVOICE",150,30);doc.setFontSize(10);doc.setTextColor(100,100,100);doc.text(`#${inv.invoice_no}`,150,36);
    y=55;
    // Bill to
    const cust=getCust(inv.customer_id);
    doc.setFontSize(9);doc.setTextColor(100,100,100);doc.text("BILL TO:",20,y);y+=5;
    doc.setFontSize(11);doc.setTextColor(0,0,0);doc.setFont("helvetica","bold");doc.text(cust?.name||"—",20,y);y+=5;
    doc.setFontSize(9);doc.setFont("helvetica","normal");
    if(cust?.phone){doc.text(cust.phone,20,y);y+=4;}
    if(cust?.trn_number){doc.text(`TRN: ${cust.trn_number}`,20,y);y+=4;}
    // Invoice info
    let yr=55;
    doc.setFontSize(9);doc.setTextColor(100,100,100);doc.text("DATE:",130,yr);doc.setTextColor(0,0,0);doc.text(fmD(inv.date),155,yr);yr+=5;
    if(inv.due_date){doc.setTextColor(100,100,100);doc.text("DUE:",130,yr);doc.setTextColor(0,0,0);doc.text(fmD(inv.due_date),155,yr);yr+=5;}
    y=Math.max(y,yr)+10;
    // Items table
    doc.setFillColor(59,130,246);doc.rect(20,y,170,8,"F");
    doc.setTextColor(255,255,255);doc.setFontSize(9);doc.setFont("helvetica","bold");
    doc.text("ITEM",22,y+5.5);doc.text("QTY",120,y+5.5);doc.text("PRICE",140,y+5.5);doc.text("TOTAL",170,y+5.5);
    y+=10;
    doc.setTextColor(0,0,0);doc.setFont("helvetica","normal");
    (inv.items||[]).forEach((it,i)=>{
      if(i%2===0){doc.setFillColor(249,250,251);doc.rect(20,y-4,170,7,"F");}
      doc.text(String(it.name||"").substring(0,40),22,y);
      doc.text(String(it.qty||0),120,y);
      doc.text(fmN(it.unit_price),140,y);
      doc.text(fmN(it.total),170,y);
      y+=7;
    });
    // Totals
    y+=8;
    doc.setFontSize(10);doc.setTextColor(100,100,100);
    doc.text("Subtotal:",130,y);doc.setTextColor(0,0,0);doc.text(fmN(inv.subtotal||0),175,y);y+=6;
    if(inv.tax_amount){doc.setTextColor(100,100,100);doc.text(`Tax (${inv.tax_pct}%):`,130,y);doc.setTextColor(0,0,0);doc.text(fmN(inv.tax_amount),175,y);y+=6;}
    if(inv.disc_amount){doc.setTextColor(100,100,100);doc.text(`Discount:`,130,y);doc.setTextColor(0,0,0);doc.text("-"+fmN(inv.disc_amount),175,y);y+=6;}
    // Grand total
    y+=3;doc.setDrawColor(59,130,246);doc.setLineWidth(0.8);doc.line(125,y,190,y);y+=6;
    doc.setFontSize(14);doc.setFont("helvetica","bold");doc.setTextColor(59,130,246);
    doc.text(`TOTAL ${inv.currency||"AED"}:`,130,y);doc.text(fmN(inv.grand_total||0),175,y);
    // Footer
    doc.setFontSize(8);doc.setTextColor(150,150,150);doc.setFont("helvetica","italic");
    doc.text("Thank you for your business!",105,280,{align:"center"});
    doc.save(`${inv.invoice_no}.pdf`);toast("PDF saved","ok");
  }catch(e){console.error(e);toast("PDF error","err");}
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
function nextCustomerCode(){
  const nums=S.customers.map(c=>{const m=String(c.customer_code||"").match(/CUST-(\d+)/);return m?parseInt(m[1]):0;});
  return "CUST-"+String(Math.max(0,...nums)+1).padStart(4,"0");
}
function rCust(){
  const q=S.searchQ.toLowerCase();
  let custs=S.customers;
  if(q)custs=custs.filter(c=>(c.name||"").toLowerCase().includes(q)||(c.customer_code||"").toLowerCase().includes(q)||(c.phone||"").includes(q));
  const list=custs.map(c=>`<div class="list-item" onclick="showAddCustomer('${c.id}')"><div class="list-icon">👤</div><div class="list-content"><div class="list-title">${c.name}</div><div class="list-sub">${c.customer_code||"—"} · ${c.phone||c.email||""}</div></div></div>`).join("")||`<div class="empty"><div class="empty-icon">👥</div><p>${t("noRecords")}</p></div>`;
  $("p-customers").innerHTML=`<div class="page-header"><div><div class="page-title">${t("customers")}</div><div class="page-sub">${custs.length} customers</div></div><button class="btn btn-primary btn-sm" onclick="showAddCustomer()">+ ${t("add")}</button></div>
    <div class="search-box"><span class="search-icon">🔍</span><input class="fc" placeholder="${t("search")}..." oninput="S.searchQ=this.value;rCust()" value="${S.searchQ}"/></div>
    <div class="card">${list}</div>`;
}
function showAddCustomer(eid){
  const c=eid?S.customers.find(x=>x.id===eid):null;
  const code=c?.customer_code||nextCustomerCode();
  modal(eid?t("edit"):"New Customer",`
    <div class="fgrid">
      <div class="fg"><label class="fl">Customer Code</label><input class="fc" id="cc" value="${code}" readonly style="background:var(--bg3);"/></div>
      <div class="fg"><label class="fl">${t("name")} *</label><input class="fc" id="cn" value="${c?.name||""}"/></div>
      <div class="fg"><label class="fl">TRN Number</label><input class="fc" id="ctrn" value="${c?.trn_number||""}" placeholder="Tax Registration No."/></div>
      <div class="fg"><label class="fl">Credit Limit</label><input class="fc" type="number" id="cclim" value="${c?.credit_limit_amount||0}" placeholder="0 = no limit"/></div>
      <div class="fg"><label class="fl">Email</label><input class="fc" id="ce" value="${c?.email||""}"/></div>
      <div class="fg"><label class="fl">${t("phone")}</label><input class="fc" id="cph" value="${c?.phone||""}"/></div>
    </div>
    <div class="fg"><label class="fl">${t("address")}</label><input class="fc" id="cadr" value="${c?.address||""}"/></div>
    <div class="fg"><label class="fl">📝 Internal Notes</label><textarea class="fc" id="cnotes" rows="3" placeholder="e.g. Pays late, prefers cash, VIP customer...">${c?.notes||""}</textarea></div>`,
    `${eid?`<button class="btn btn-danger btn-sm" onclick="delCust('${eid}')">✕</button>`:""}<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveCust('${eid||""}')">${t("save")}</button>`);
}
async function saveCust(eid){
  const name=$("cn")?.value?.trim();if(!name){toast("Name required","err");return;}
  const row={name,customer_code:$("cc")?.value||nextCustomerCode(),trn_number:$("ctrn")?.value||"",credit_limit_amount:+$("cclim")?.value||0,email:$("ce")?.value||"",phone:$("cph")?.value||"",address:$("cadr")?.value||"",notes:$("cnotes")?.value||""};
  if(eid){await upd("customers",eid,row);const i=S.customers.findIndex(x=>x.id===eid);if(i>=0)S.customers[i]={...S.customers[i],...row};}
  else{const d=await ins("customers",row);if(!d)return;S.customers.push(d);}
  closeModal(true);toast(t("saved"),"ok");render("customers");
}
async function delCust(id){if(!confirm(t("confirmDel")))return;await del("customers",id);S.customers=S.customers.filter(x=>x.id!==id);closeModal(true);toast(t("deleted"),"info");render("customers");}

// Get or create "General Customer" for walk-in customers
async function getOrCreateGeneralCustomer(){
  let gen=S.customers.find(c=>(c.name||"").toLowerCase()==="general customer");
  if(gen)return gen;
  gen=await ins("customers",{name:"General Customer",customer_code:"CUST-0000",email:"",phone:"",address:""});
  if(gen)S.customers.unshift(gen);
  return gen;
}

function rSupp(){
  const list=S.suppliers.map(s=>`<div class="list-item" onclick="showAddSupp('${s.id}')"><div class="list-icon">🏭</div><div class="list-content"><div class="list-title">${s.name}</div><div class="list-sub">${s.phone||s.email||""}</div></div></div>`).join("")||`<div class="empty"><div class="empty-icon">🏭</div><p>${t("noRecords")}</p></div>`;
  $("p-suppliers").innerHTML=`<div class="page-header"><div><div class="page-title">${t("suppliers")}</div></div><button class="btn btn-primary btn-sm" onclick="showAddSupp()">+ ${t("add")}</button></div><div class="card">${list}</div>`;
}
function showAddSupp(eid){
  const s=eid?S.suppliers.find(x=>x.id===eid):null;
  modal(eid?t("edit"):"New Supplier",`
    <div class="fgrid">
      <div class="fg"><label class="fl">${t("name")} *</label><input class="fc" id="sn" value="${s?.name||""}"/></div>
      <div class="fg"><label class="fl">TRN Number</label><input class="fc" id="strn" value="${s?.trn_number||""}" placeholder="Tax Registration No."/></div>
      <div class="fg"><label class="fl">Email</label><input class="fc" id="seml" value="${s?.email||""}"/></div>
      <div class="fg"><label class="fl">${t("phone")}</label><input class="fc" id="sph" value="${s?.phone||""}"/></div>
    </div>
    <div class="fg"><label class="fl">${t("address")}</label><input class="fc" id="sadr" value="${s?.address||""}"/></div>
    <div class="fg"><label class="fl">📝 Internal Notes</label><textarea class="fc" id="snotes" rows="3" placeholder="e.g. Best prices, delivers fast...">${s?.notes||""}</textarea></div>`,
    `${eid?`<button class="btn btn-danger btn-sm" onclick="delSupp('${eid}')">✕</button>`:""}<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button><button class="btn btn-primary" onclick="saveSupp('${eid||""}')">${t("save")}</button>`);
}
async function saveSupp(eid){
  const name=$("sn")?.value?.trim();if(!name){toast("Name?","err");return;}
  const row={name,trn_number:$("strn")?.value||"",email:$("seml")?.value||"",phone:$("sph")?.value||"",address:$("sadr")?.value||"",notes:$("snotes")?.value||""};
  if(eid){await upd("suppliers",eid,row);const i=S.suppliers.findIndex(x=>x.id===eid);if(i>=0)S.suppliers[i]={...S.suppliers[i],...row};}
  else{const d=await ins("suppliers",row);if(!d)return;S.suppliers.push(d);}
  closeModal(true);toast(t("saved"),"ok");render("suppliers");
}
async function delSupp(id){if(!confirm(t("confirmDel")))return;await del("suppliers",id);S.suppliers=S.suppliers.filter(x=>x.id!==id);closeModal(true);toast(t("deleted"),"info");render("suppliers");}

// ── DEBTORS & CREDITORS ──
// Calculate balance for each customer: total invoiced - total paid
function calcCustomerBalance(custId){
  const invs=S.invoices.filter(i=>i.customer_id===custId);
  const totInvoiced=invs.reduce((s,i)=>s+(i.grand_total||0),0);
  // Paid invoices count as paid
  const totPaid=invs.filter(i=>i.status==="paid").reduce((s,i)=>s+(i.grand_total||0),0);
  // Receipts from this customer (party matches name)
  const cust=getCust(custId);
  let receiptTotal=0;
  if(cust){
    receiptTotal=S.vouchers.filter(v=>v.type==="receipt"&&(v.party||"").toLowerCase()===(cust.name||"").toLowerCase()).reduce((s,v)=>s+v.amount,0);
  }
  // Balance = invoiced - paid - receipts
  // Positive means customer owes us (debtor)
  return totInvoiced - totPaid - receiptTotal;
}
// Calculate balance for each supplier: total paid out - what we owe
function calcSupplierBalance(supId){
  const sup=S.suppliers.find(x=>x.id===supId);
  if(!sup)return 0;
  // Payments to this supplier
  const paymentTotal=S.vouchers.filter(v=>v.type==="payment"&&(v.party||"").toLowerCase()===(sup.name||"").toLowerCase()).reduce((s,v)=>s+v.amount,0);
  // For now, we don't track purchase invoices, so just show payments made
  // Negative means we paid them (creditor relationship)
  // To track what we owe them, user would need purchase invoices
  return -paymentTotal; // Negative = we paid (creditor side)
}

function rDebtCred(){
  // === Auto-calculated from invoices/vouchers ===
  const customerDebts=S.customers.map(c=>({
    ...c,balance:calcCustomerBalance(c.id),source:"customer"
  })).filter(c=>Math.abs(c.balance)>0.01);
  
  // === Manual debts: I owe (i_owe) and They owe me (they_owe) ===
  const manualDebts=S.debts.filter(d=>d.status==="open");
  const iOwe=manualDebts.filter(d=>d.type==="i_owe");
  const theyOweMe=manualDebts.filter(d=>d.type==="they_owe");
  
  // === Credit cards (i_owe) ===
  const creditCards=S.accounts.filter(a=>a.type==="credit");
  
  // Totals
  const totalTheyOweMe=customerDebts.filter(d=>d.balance>0).reduce((s,d)=>s+d.balance,0)+
                       theyOweMe.reduce((s,d)=>s+d.amount,0);
  const totalIOwe=iOwe.reduce((s,d)=>s+d.amount,0)+
                  creditCards.reduce((s,a)=>s+(a.balance||0),0);
  const netPosition=totalTheyOweMe-totalIOwe;
  
  // === They Owe Me list ===
  const theyOweListHTML=[
    ...customerDebts.filter(d=>d.balance>0).map(d=>`
      <div class="list-item" onclick="showPartyStatement('customer','${d.id}')">
        <div class="list-icon" style="background:var(--green-dim);color:var(--green);">🧾</div>
        <div class="list-content"><div class="list-title">${d.name}</div><div class="list-sub">From invoices</div></div>
        <div class="list-right"><div class="list-amount" style="color:var(--green);">+${fmA(d.balance)}</div></div>
      </div>`),
    ...theyOweMe.map(d=>`
      <div class="list-item" onclick="showAddDebt('${d.id}')">
        <div class="list-icon" style="background:var(--green-dim);color:var(--green);">👤</div>
        <div class="list-content"><div class="list-title">${d.party_name}</div><div class="list-sub">${d.description||"—"} · ${fmD(d.date)}</div></div>
        <div class="list-right"><div class="list-amount" style="color:var(--green);">+${fmA(d.amount,d.currency)}</div></div>
      </div>`)
  ].join("")||`<div class="empty"><p>No one owes you money</p></div>`;
  
  // === I Owe list ===
  const iOweListHTML=[
    ...creditCards.map(a=>`
      <div class="list-item" onclick="showAddAcc('${a.id}')">
        <div class="list-icon" style="background:var(--red-dim);color:var(--red);">💳</div>
        <div class="list-content"><div class="list-title">${a.name}</div><div class="list-sub">Credit Card · Limit: ${fmA(a.credit_limit||0)}</div></div>
        <div class="list-right"><div class="list-amount" style="color:var(--red);">−${fmA(a.balance||0,a.currency)}</div></div>
      </div>`),
    ...iOwe.map(d=>`
      <div class="list-item" onclick="showAddDebt('${d.id}')">
        <div class="list-icon" style="background:var(--red-dim);color:var(--red);">🏷️</div>
        <div class="list-content"><div class="list-title">${d.party_name}</div><div class="list-sub">${d.description||"—"} · ${fmD(d.date)}</div></div>
        <div class="list-right"><div class="list-amount" style="color:var(--red);">−${fmA(d.amount,d.currency)}</div></div>
      </div>`)
  ].join("")||`<div class="empty"><p>You owe no one</p></div>`;
  
  $("p-debtorsCreditors").innerHTML=`
    <div class="page-header"><div>
      <div class="page-title">${t("debts")}</div>
      <div class="page-sub">${t("netPosition")}: <span style="color:${netPosition>=0?'var(--green)':'var(--red)'};font-weight:700;">${fmA(netPosition)}</span></div>
    </div>
    <button class="btn btn-primary btn-sm" onclick="showAddDebt()">+ ${t("add")}</button></div>
    
    <div class="stat-grid">
      <div class="stat-card green"><div class="sc-icon">📥</div><div class="sc-label">${t("theyOwe")}</div><div class="sc-value" style="color:var(--green);font-size:18px;">${fmA(totalTheyOweMe)}</div></div>
      <div class="stat-card red"><div class="sc-icon">📤</div><div class="sc-label">${t("iOwe")}</div><div class="sc-value" style="color:var(--red);font-size:18px;">${fmA(totalIOwe)}</div></div>
    </div>
    
    <div class="card">
      <div class="card-head"><span class="card-title">📥 ${t("theyOwe")}</span><button class="btn btn-xs btn-success" onclick="showAddDebt(null,'they_owe')">+ Add</button></div>
      ${theyOweListHTML}
    </div>
    
    <div class="card">
      <div class="card-head"><span class="card-title">📤 ${t("iOwe")}</span><button class="btn btn-xs btn-danger" onclick="showAddDebt(null,'i_owe')">+ Add</button></div>
      ${iOweListHTML}
    </div>`;
}

function showAddDebt(eid,defaultType){
  const d=eid?S.debts.find(x=>x.id===eid):null;
  const type=d?.type||defaultType||"i_owe";
  const curOpts=CURS.map(c=>`<option value="${c.code}" ${(d?d.currency:S.currency)===c.code?"selected":""}>${c.code} ${c.sym}</option>`).join("");
  modal(eid?t("edit"):"New Debt/Credit",`
    <div style="display:flex;gap:6px;margin-bottom:14px;">
      <button class="btn btn-fullwidth ${type==="they_owe"?"btn-success":"btn-secondary"}" id="dbt-they" onclick="setDebtType('they_owe')">📥 They Owe Me</button>
      <button class="btn btn-fullwidth ${type==="i_owe"?"btn-danger":"btn-secondary"}" id="dbt-i" onclick="setDebtType('i_owe')">📤 I Owe</button>
    </div>
    <div class="fgrid">
      <div class="fg"><label class="fl">Person/Company Name *</label><input class="fc" id="dbtparty" value="${d?.party_name||""}" placeholder="e.g. Ahmad, ABC Co."/></div>
      <div class="fg"><label class="fl">${t("amount")} *</label><input class="fc" type="number" id="dbtamt" value="${d?.amount||""}" step="0.01"/></div>
      <div class="fg"><label class="fl">${t("currency")}</label><select class="fc" id="dbtcur">${curOpts}</select></div>
      <div class="fg"><label class="fl">${t("date")}</label><input class="fc" type="date" id="dbtdate" value="${d?.date||today()}"/></div>
      <div class="fg"><label class="fl">${t("dueDate")}</label><input class="fc" type="date" id="dbtdue" value="${d?.due_date||""}"/></div>
      <div class="fg"><label class="fl">${t("category")}</label><select class="fc" id="dbtcat">
        <option value="personal" ${d?.category==="personal"?"selected":""}>Personal</option>
        <option value="business" ${d?.category==="business"?"selected":""}>Business</option>
        <option value="family" ${d?.category==="family"?"selected":""}>Family</option>
        <option value="friend" ${d?.category==="friend"?"selected":""}>Friend</option>
        <option value="other" ${d?.category==="other"?"selected":""}>Other</option>
      </select></div>
    </div>
    <div class="fg"><label class="fl">${t("desc")}</label><input class="fc" id="dbtdesc" value="${d?.description||""}" placeholder="e.g. Loan, rent, salary"/></div>
    ${eid&&d?.status==="open"?`<button class="btn btn-success btn-fullwidth" onclick="settleDebt('${eid}')" style="margin-top:8px;">✓ Mark as Settled</button>`:""}`,
    `${eid?`<button class="btn btn-danger btn-sm" onclick="delDebt('${eid}')">✕</button>`:""}
     <button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="saveDebt('${eid||""}')">${t("save")}</button>`);
  window._debtType=type;
}

function setDebtType(tp){
  window._debtType=tp;
  if($("dbt-they"))$("dbt-they").className=`btn btn-fullwidth ${tp==="they_owe"?"btn-success":"btn-secondary"}`;
  if($("dbt-i"))$("dbt-i").className=`btn btn-fullwidth ${tp==="i_owe"?"btn-danger":"btn-secondary"}`;
}

async function saveDebt(eid){
  if(!lockSave())return;
  try{
    const party=$("dbtparty")?.value?.trim();
    const amt=parseFloat($("dbtamt")?.value);
    if(!party){toast("Name required","err");return;}
    if(!amt||amt<=0){toast("Amount required","err");return;}
    const row={type:window._debtType||"i_owe",party_name:party,amount:amt,currency:$("dbtcur")?.value||"AED",date:$("dbtdate")?.value||today(),due_date:$("dbtdue")?.value||null,description:$("dbtdesc")?.value||"",category:$("dbtcat")?.value||"personal",status:"open"};
    if(eid){await upd("debts",eid,row);const i=S.debts.findIndex(x=>x.id===eid);if(i>=0)S.debts[i]={...S.debts[i],...row};}
    else{const d=await ins("debts",row);if(!d)return;S.debts.unshift(d);}
    closeModal(true);toast(t("saved"),"ok");render(S.page);
  }finally{unlockSave();}
}

async function settleDebt(id){
  if(!confirm("Mark this as settled?"))return;
  await upd("debts",id,{status:"settled"});
  const i=S.debts.findIndex(x=>x.id===id);if(i>=0)S.debts[i].status="settled";
  closeModal(true);toast("Settled ✓","ok");render(S.page);
}

async function delDebt(id){
  if(!confirm(t("confirmDel")))return;
  await del("debts",id);S.debts=S.debts.filter(x=>x.id!==id);
  closeModal(true);toast(t("deleted"),"info");render(S.page);
}

function showPartyStatement(type,id){
  if(type==="customer"){
    const c=getCust(id);if(!c)return;
    const invs=S.invoices.filter(i=>i.customer_id===id);
    const receipts=S.vouchers.filter(v=>v.type==="receipt"&&(v.party||"").toLowerCase()===(c.name||"").toLowerCase());
    const all=[
      ...invs.map(i=>({date:i.date,type:"invoice",no:i.invoice_no,amount:i.grand_total||0,status:i.status})),
      ...receipts.map(r=>({date:r.date,type:"receipt",no:r.voucher_no,amount:r.amount,status:"paid"}))
    ].sort((a,b)=>(b.date||"").localeCompare(a.date||""));
    
    const balance=calcCustomerBalance(id);
    const rows=all.map(item=>{
      if(item.type==="invoice"){
        return `<div class="list-item"><div class="list-icon">🧾</div><div class="list-content"><div class="list-title">${item.no}</div><div class="list-sub">${fmD(item.date)} · ${item.status}</div></div><div class="list-right"><div class="list-amount" style="color:var(--accent);">+${fmA(item.amount)}</div></div></div>`;
      }else{
        return `<div class="list-item"><div class="list-icon" style="background:var(--green-dim);color:var(--green);">📥</div><div class="list-content"><div class="list-title">${item.no}</div><div class="list-sub">${fmD(item.date)} · receipt</div></div><div class="list-right"><div class="list-amount" style="color:var(--green);">-${fmA(item.amount)}</div></div></div>`;
      }
    }).join("")||`<div class="empty"><p>No records</p></div>`;
    
    modal(c.name,`
      <div style="background:linear-gradient(135deg,${balance>0?'var(--green-dim)':'var(--accent-dim)'},var(--purple-dim));padding:18px;border-radius:14px;margin-bottom:14px;text-align:center;">
        <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;">${S.lang==="fa"?"موجودی":"Current Balance"}</div>
        <div style="font-size:30px;font-family:var(--mono);font-weight:300;color:${balance>0?'var(--green)':balance<0?'var(--red)':'var(--text)'};">${balance>0?'+':''}${fmA(balance)}</div>
        <div style="font-size:12px;color:var(--text3);margin-top:6px;">${balance>0?(S.lang==="fa"?"از شما طلب دارد":"owes you"):balance<0?(S.lang==="fa"?"اضافه پرداخت":"overpaid"):"settled"}</div>
      </div>
      <div style="font-size:11px;color:var(--text3);text-transform:uppercase;margin-bottom:8px;">${S.lang==="fa"?"تاریخچه":"Transaction History"}</div>
      <div class="card">${rows}</div>`,
      `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
  }else{
    const s=S.suppliers.find(x=>x.id===id);if(!s)return;
    const payments=S.vouchers.filter(v=>v.type==="payment"&&(v.party||"").toLowerCase()===(s.name||"").toLowerCase());
    const total=payments.reduce((sum,p)=>sum+p.amount,0);
    const rows=payments.sort((a,b)=>(b.date||"").localeCompare(a.date||"")).map(p=>`
      <div class="list-item"><div class="list-icon" style="background:var(--red-dim);color:var(--red);">📤</div><div class="list-content"><div class="list-title">${p.voucher_no}</div><div class="list-sub">${fmD(p.date)} · ${p.payment_mode}</div></div><div class="list-right"><div class="list-amount" style="color:var(--red);">-${fmA(p.amount)}</div></div></div>`).join("")||`<div class="empty"><p>No payments</p></div>`;
    
    modal(s.name,`
      <div style="background:var(--amber-dim);padding:18px;border-radius:14px;margin-bottom:14px;text-align:center;">
        <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;">${S.lang==="fa"?"کل پرداختی":"Total Paid"}</div>
        <div style="font-size:30px;font-family:var(--mono);font-weight:300;color:var(--amber);">${fmA(total)}</div>
      </div>
      <div class="card">${rows}</div>`,
      `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
  }
}

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
      <button class="list-item" onclick="showAgingReport()" style="width:100%;border:none;background:none;text-align:left;color:inherit;font-family:inherit;cursor:pointer;"><div class="list-icon">⏰</div><div class="list-content"><div class="list-title">Aging Report</div><div class="list-sub">Overdue debts by age</div></div><div class="list-right">→</div></button>
      <button class="list-item" onclick="showTrialBalance()" style="width:100%;border:none;background:none;text-align:left;color:inherit;font-family:inherit;cursor:pointer;"><div class="list-icon">⚖️</div><div class="list-content"><div class="list-title">Trial Balance</div><div class="list-sub">All accounts with balances</div></div><div class="list-right">→</div></button>
      <button class="list-item" onclick="showProfitLoss()" style="width:100%;border:none;background:none;text-align:left;color:inherit;font-family:inherit;cursor:pointer;"><div class="list-icon">📈</div><div class="list-content"><div class="list-title">Profit & Loss</div><div class="list-sub">Income vs Expenses</div></div><div class="list-right">→</div></button>
      <button class="list-item" onclick="showTopProducts()" style="width:100%;border:none;background:none;text-align:left;color:inherit;font-family:inherit;cursor:pointer;"><div class="list-icon">🏆</div><div class="list-content"><div class="list-title">Top Products</div><div class="list-sub">Best sellers</div></div><div class="list-right">→</div></button>
      <button class="list-item" onclick="showTopCustomers()" style="width:100%;border:none;background:none;text-align:left;color:inherit;font-family:inherit;cursor:pointer;"><div class="list-icon">⭐</div><div class="list-content"><div class="list-title">Top Customers</div><div class="list-sub">Top buyers</div></div><div class="list-right">→</div></button>
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

// ── AGING REPORT ──
function showAgingReport(){
  const now=new Date();now.setHours(0,0,0,0);
  // Buckets: current (0-30), 31-60, 61-90, 90+
  const buckets={current:[],b31:[],b61:[],b90:[]};
  S.invoices.filter(i=>i.status==="submitted").forEach(inv=>{
    if(!inv.due_date)return;
    const due=new Date(inv.due_date);
    const daysOverdue=Math.floor((now-due)/(1000*60*60*24));
    const item={inv,daysOverdue,customer:getCustName(inv.customer_id)};
    if(daysOverdue<=0)return; // Not overdue
    if(daysOverdue<=30)buckets.current.push(item);
    else if(daysOverdue<=60)buckets.b31.push(item);
    else if(daysOverdue<=90)buckets.b61.push(item);
    else buckets.b90.push(item);
  });
  const renderBucket=(items,title,color)=>{
    if(items.length===0)return "";
    const total=items.reduce((s,it)=>s+(it.inv.grand_total||0),0);
    return `<div class="card">
      <div class="card-head"><span class="card-title" style="color:${color};">${title} · ${items.length} invoices · ${fmA(total)}</span></div>
      ${items.map(it=>`<div class="list-item"><div class="list-icon">🧾</div><div class="list-content"><div class="list-title">${it.inv.invoice_no}</div><div class="list-sub">${it.customer} · ${it.daysOverdue} days overdue</div></div><div class="list-right"><div class="list-amount">${fmA(it.inv.grand_total,it.inv.currency)}</div></div></div>`).join("")}
    </div>`;
  };
  const total=Object.values(buckets).flat().reduce((s,it)=>s+(it.inv.grand_total||0),0);
  modal("⏰ Aging Report",`
    <div style="background:linear-gradient(135deg,var(--red-dim),var(--amber-dim));padding:16px;border-radius:14px;margin-bottom:14px;text-align:center;">
      <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;">Total Overdue</div>
      <div style="font-size:28px;font-family:var(--mono);font-weight:300;color:var(--red);">${fmA(total)}</div>
    </div>
    ${renderBucket(buckets.current,"1-30 days","var(--amber)")}
    ${renderBucket(buckets.b31,"31-60 days","#f59e0b")}
    ${renderBucket(buckets.b61,"61-90 days","#ef4444")}
    ${renderBucket(buckets.b90,"90+ days (critical)","#dc2626")}
    ${total===0?`<div class="empty"><div class="empty-icon">✅</div><p>No overdue invoices!</p></div>`:""}`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
}

// ── TRIAL BALANCE ──
function showTrialBalance(){
  const rows=S.accounts.map(a=>{
    const bal=a.balance||0;
    return `<div class="list-item"><div class="list-icon">${AICONS[a.type]}</div><div class="list-content"><div class="list-title">${a.name}</div><div class="list-sub">${a.type} · ${a.currency}</div></div><div class="list-right"><div class="list-amount" style="color:${a.type==="credit"?"var(--red)":bal>=0?"var(--green)":"var(--red)"};">${a.type==="credit"?"−":""}${fmA(bal,a.currency)}</div></div></div>`;
  }).join("")||`<div class="empty"><p>No accounts</p></div>`;
  const assets=S.accounts.filter(a=>a.type!=="credit").reduce((s,a)=>s+(a.balance||0),0);
  const liab=S.accounts.filter(a=>a.type==="credit").reduce((s,a)=>s+(a.balance||0),0);
  modal("⚖️ Trial Balance",`
    <div class="stat-grid">
      <div class="stat-card green"><div class="sc-label">Total Assets</div><div class="sc-value" style="color:var(--green);font-size:18px;">${fmA(assets)}</div></div>
      <div class="stat-card red"><div class="sc-label">Total Liabilities</div><div class="sc-value" style="color:var(--red);font-size:18px;">${fmA(liab)}</div></div>
    </div>
    <div style="background:linear-gradient(135deg,var(--accent-dim),var(--purple-dim));padding:14px;border-radius:12px;margin-bottom:14px;text-align:center;">
      <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;">Net (Equity)</div>
      <div style="font-size:24px;font-family:var(--mono);font-weight:300;color:var(--accent);">${fmA(assets-liab)}</div>
    </div>
    <div class="card">${rows}</div>`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
}

// ── PROFIT & LOSS ──
function showProfitLoss(){
  // This month
  const now=new Date();
  const ms=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-01`;
  const lm=new Date(now.getFullYear(),now.getMonth()-1,1);
  const lms=`${lm.getFullYear()}-${String(lm.getMonth()+1).padStart(2,"0")}-01`;
  const lme=ms;
  
  const thisI=S.transactions.filter(tx=>tx.type==="income"&&tx.date>=ms).reduce((s,tx)=>s+tx.amount,0);
  const thisE=S.transactions.filter(tx=>tx.type==="expense"&&tx.date>=ms).reduce((s,tx)=>s+tx.amount,0);
  const lastI=S.transactions.filter(tx=>tx.type==="income"&&tx.date>=lms&&tx.date<lme).reduce((s,tx)=>s+tx.amount,0);
  const lastE=S.transactions.filter(tx=>tx.type==="expense"&&tx.date>=lms&&tx.date<lme).reduce((s,tx)=>s+tx.amount,0);
  
  // Categories breakdown
  const expByCategory={};
  S.transactions.filter(tx=>tx.type==="expense"&&tx.date>=ms).forEach(tx=>{
    expByCategory[tx.category||"other"]=(expByCategory[tx.category||"other"]||0)+tx.amount;
  });
  const expRows=Object.entries(expByCategory).sort((a,b)=>b[1]-a[1]).map(([cat,amt])=>{
    const pct=thisE>0?(amt/thisE*100).toFixed(1):0;
    return `<div class="list-item"><div class="list-content"><div class="list-title">${cat}</div><div class="list-sub">${pct}%</div></div><div class="list-right"><div class="list-amount" style="color:var(--red);">${fmA(amt)}</div></div></div>`;
  }).join("")||`<div class="empty"><p>No expenses this month</p></div>`;
  
  const netNow=thisI-thisE,netLast=lastI-lastE;
  const change=netLast!==0?((netNow-netLast)/Math.abs(netLast)*100).toFixed(1):0;
  
  modal("📈 Profit & Loss (This Month)",`
    <div style="background:linear-gradient(135deg,${netNow>=0?"var(--green-dim)":"var(--red-dim)"},var(--accent-dim));padding:18px;border-radius:14px;margin-bottom:14px;text-align:center;">
      <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:1px;">Net Profit</div>
      <div style="font-size:32px;font-family:var(--mono);font-weight:300;color:${netNow>=0?"var(--green)":"var(--red)"};">${fmA(netNow)}</div>
      ${netLast!==0?`<div style="font-size:12px;color:var(--text3);margin-top:6px;">vs Last Month: ${change>=0?"📈":"📉"} ${change}%</div>`:""}
    </div>
    <div class="stat-grid">
      <div class="stat-card green"><div class="sc-label">Income</div><div class="sc-value" style="color:var(--green);font-size:18px;">${fmA(thisI)}</div></div>
      <div class="stat-card red"><div class="sc-label">Expenses</div><div class="sc-value" style="color:var(--red);font-size:18px;">${fmA(thisE)}</div></div>
    </div>
    <div style="font-size:11px;color:var(--text3);text-transform:uppercase;margin-bottom:8px;">Expense Breakdown</div>
    <div class="card">${expRows}</div>`,
    `<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
}

// ── TOP PRODUCTS ──
function showTopProducts(){
  const counts={};
  S.invoices.forEach(inv=>{
    (inv.items||[]).forEach(it=>{
      if(!it.product_id)return;
      if(!counts[it.product_id])counts[it.product_id]={qty:0,revenue:0,name:it.name};
      counts[it.product_id].qty+=it.qty||0;
      counts[it.product_id].revenue+=it.total||0;
    });
  });
  const sorted=Object.entries(counts).sort((a,b)=>b[1].revenue-a[1].revenue).slice(0,20);
  const rows=sorted.map(([pid,d],i)=>`<div class="list-item"><div class="list-icon">${i<3?["🥇","🥈","🥉"][i]:"📦"}</div><div class="list-content"><div class="list-title">${d.name}</div><div class="list-sub">${d.qty} sold</div></div><div class="list-right"><div class="list-amount">${fmA(d.revenue)}</div></div></div>`).join("")||`<div class="empty"><p>No products sold yet</p></div>`;
  modal("🏆 Top Products",`<div class="card">${rows}</div>`,`<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
}

// ── TOP CUSTOMERS ──
function showTopCustomers(){
  const counts={};
  S.invoices.forEach(inv=>{
    if(!inv.customer_id)return;
    if(!counts[inv.customer_id])counts[inv.customer_id]={count:0,total:0};
    counts[inv.customer_id].count++;
    counts[inv.customer_id].total+=inv.grand_total||0;
  });
  const sorted=Object.entries(counts).sort((a,b)=>b[1].total-a[1].total).slice(0,20);
  const rows=sorted.map(([cid,d],i)=>{
    const c=getCust(cid);
    return `<div class="list-item"><div class="list-icon">${i<3?["🥇","🥈","🥉"][i]:"👤"}</div><div class="list-content"><div class="list-title">${c?.name||"—"}</div><div class="list-sub">${d.count} invoices · ${c?.customer_code||""}</div></div><div class="list-right"><div class="list-amount">${fmA(d.total)}</div></div></div>`;
  }).join("")||`<div class="empty"><p>No customers yet</p></div>`;
  modal("⭐ Top Customers",`<div class="card">${rows}</div>`,`<button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
}

// ── PURCHASE INVOICES ──
function nextPInvNo(){
  const nums=S.purchase_invoices.map(p=>{const m=String(p.invoice_no||"").match(/PINV-(\d+)/);return m?parseInt(m[1]):0;});
  return "PINV-"+String(Math.max(0,...nums)+1).padStart(4,"0");
}
function rPInv(){
  let pinvs=S.purchase_invoices;
  const q=S.searchQ.toLowerCase();
  if(q)pinvs=pinvs.filter(p=>(p.invoice_no||"").toLowerCase().includes(q)||getSuppName(p.supplier_id).toLowerCase().includes(q));
  pinvs=applyDateFilter(pinvs);
  const total=pinvs.reduce((s,p)=>s+(p.grand_total||0),0);
  const list=pinvs.map(p=>`
    <div class="list-item" onclick="showPInvDetail('${p.id}')">
      <div class="list-icon" style="background:var(--amber-dim);color:var(--amber);">🛒</div>
      <div class="list-content"><div class="list-title">${p.invoice_no||"—"}</div><div class="list-sub">${getSuppName(p.supplier_id)} · ${fmD(p.date)}</div></div>
      <div class="list-right"><div class="list-amount" style="color:var(--red);">−${fmA(p.grand_total||0,p.currency)}</div></div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">🛒</div><p>No purchase invoices</p></div>`;
  $("p-purchaseInv").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("purchaseInv")}</div><div class="page-sub">${pinvs.length} · Total: ${fmA(total)}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddPInv()">+ ${t("add")}</button></div>
    <div class="search-box"><span class="search-icon">🔍</span><input class="fc" placeholder="Search by # or supplier..." oninput="S.searchQ=this.value;rPInv()" value="${S.searchQ}"/></div>
    ${dateFilterHTML("rPInv")}
    <div class="card">${list}</div>`;
}
function getSuppName(id){const s=S.suppliers.find(x=>x.id===id);return s?s.name:"—";}

function showAddPInv(){
  S.pInvItems=[];
  const supOpts=S.suppliers.length?S.suppliers.map(s=>`<option value="${s.id}">${s.name}</option>`).join(""):`<option value="">⚠️ No suppliers - add one first</option>`;
  const accOpts=S.accounts.map(a=>`<option value="${a.id}">${AICONS[a.type]} ${a.name}</option>`).join("");
  const pNo=nextPInvNo();
  modal("New Purchase Invoice",`
    <div class="fgrid">
      <div class="fg"><label class="fl">Invoice #</label><input class="fc" id="pinvno" value="${pNo}"/></div>
      <div class="fg"><label class="fl">Supplier *</label><select class="fc" id="pinvsup">${supOpts}</select></div>
      <div class="fg"><label class="fl">${t("date")}</label><input class="fc" type="date" id="pinvdate" value="${today()}" max="${today()}"/></div>
      <div class="fg"><label class="fl">Reference #</label><input class="fc" id="pinvref" placeholder="Supplier invoice #"/></div>
    </div>
    <div style="font-size:11px;color:var(--text3);text-transform:uppercase;margin:14px 0 8px;">Items</div>
    <div id="pitems"></div>
    ${S.products.length===0?`<div class="alert alert-amber">⚠️ No products. <span style="text-decoration:underline;cursor:pointer;" onclick="closeModal(true);nav('inventory')">Add products first</span></div>`:`<div class="search-box" style="margin-bottom:8px;"><span class="search-icon">🔍</span><input class="fc" id="ppSearch" placeholder="Search product to add..." oninput="searchPInvProd(this.value)"/></div>
    <div id="ppResults" style="background:var(--glass);border-radius:8px;max-height:200px;overflow-y:auto;display:none;margin-bottom:10px;"></div>`}
    <div class="fgrid" style="margin-top:14px;">
      <div class="fg"><label class="fl">${t("tax")} (%)</label><input class="fc" type="number" id="pinvtax" value="0" min="0" max="100" step="0.01" oninput="calcPInv()"/></div>
      <div class="fg"><label class="fl">${t("discount")} (%)</label><input class="fc" type="number" id="pinvdisc" value="0" oninput="calcPInv()"/></div>
      <div class="fg"><label class="fl">${t("paymentMode")}</label><select class="fc" id="pinvpm"><option value="cash">${t("cash")}</option><option value="card">${t("card")}</option><option value="credit">Credit</option></select></div>
      <div class="fg"><label class="fl">${t("account")}</label><select class="fc" id="pinvacc">${accOpts}</select></div>
    </div>
    <div style="background:var(--glass);padding:14px;border-radius:10px;margin-top:12px;">
      <div style="display:flex;justify-content:space-between;color:var(--text3);"><span>Subtotal</span><span id="p-sub">0</span></div>
      <div style="display:flex;justify-content:space-between;color:var(--text3);"><span>Tax</span><span id="p-tax">0</span></div>
      <div style="display:flex;justify-content:space-between;color:var(--text3);"><span>Discount</span><span id="p-disc">0</span></div>
      <div style="display:flex;justify-content:space-between;padding-top:10px;border-top:1px solid var(--border);font-weight:700;font-size:17px;"><span>Grand Total</span><span id="p-grand" style="color:var(--accent);font-family:var(--mono);">0</span></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="savePInv()">Save</button>`,true);
  rPInvItems();calcPInv();
}
function searchPInvProd(q){
  const res=$("ppResults");if(!res)return;
  if(!q||q.length<1){res.style.display="none";return;}
  const ql=q.toLowerCase();
  const matches=S.products.filter(p=>p.name.toLowerCase().includes(ql)||(p.sku||"").toLowerCase().includes(ql)).slice(0,10);
  if(matches.length===0){res.style.display="block";res.innerHTML=`<div style="padding:12px;color:var(--text3);text-align:center;">No products found</div>`;return;}
  res.style.display="block";
  res.innerHTML=matches.map(p=>`<div class="list-item" onclick="addPInvProd('${p.id}')" style="cursor:pointer;">
    <div class="list-icon">📦</div>
    <div class="list-content"><div class="list-title">${p.name}</div><div class="list-sub">${p.sku||"—"} · Cost: ${fmA(p.cost_price||0)}</div></div>
  </div>`).join("");
}
function addPInvProd(pid){
  const p=S.products.find(x=>x.id===pid);if(!p)return;
  const ex=S.pInvItems.find(it=>it.product_id===pid);
  if(ex){ex.qty++;ex.total=ex.qty*ex.unit_price;}
  else S.pInvItems.push({product_id:pid,name:p.name,qty:1,unit_price:p.cost_price||0,total:p.cost_price||0});
  if($("ppSearch"))$("ppSearch").value="";
  if($("ppResults"))$("ppResults").style.display="none";
  rPInvItems();calcPInv();
}
function rmPInvItem(i){S.pInvItems.splice(i,1);rPInvItems();calcPInv();}
function rPInvItems(){
  if(S.pInvItems.length===0){$("pitems").innerHTML=`<div style="text-align:center;padding:16px;color:var(--text3);font-size:12px;">Search and add products</div>`;return;}
  $("pitems").innerHTML=S.pInvItems.map((it,i)=>`
    <div style="background:var(--glass);padding:10px;border-radius:8px;margin-bottom:8px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <div style="font-weight:600;font-size:13px;">${it.name||"—"}</div>
        <button class="btn btn-icon btn-danger btn-sm" onclick="rmPInvItem(${i})">✕</button>
      </div>
      <div class="fgrid">
        <div class="fg" style="margin:0;"><label class="fl">Qty</label><input class="fc" type="number" value="${it.qty}" min="1" oninput="S.pInvItems[${i}].qty=+this.value;calcPInvItem(${i})"/></div>
        <div class="fg" style="margin:0;"><label class="fl">Cost</label><input class="fc" type="number" value="${it.unit_price}" step="0.01" oninput="S.pInvItems[${i}].unit_price=+this.value;calcPInvItem(${i})"/></div>
      </div>
      <div style="text-align:right;margin-top:6px;color:var(--accent);font-family:var(--mono);font-weight:700;">= ${fmA(it.total)}</div>
    </div>`).join("");
}
function calcPInvItem(i){S.pInvItems[i].total=S.pInvItems[i].qty*S.pInvItems[i].unit_price;calcPInv();rPInvItems();}
function calcPInv(){
  const sub=S.pInvItems.reduce((s,it)=>s+(it.total||0),0);
  const tax=sub*(+$("pinvtax")?.value||0)/100;const disc=sub*(+$("pinvdisc")?.value||0)/100;
  const grand=sub+tax-disc;
  if($("p-sub"))$("p-sub").textContent=fmA(sub);
  if($("p-tax"))$("p-tax").textContent=fmA(tax);
  if($("p-disc"))$("p-disc").textContent=fmA(disc);
  if($("p-grand"))$("p-grand").textContent=fmA(grand);
}
async function savePInv(){
  if(!lockSave())return;
  try{
    if(S.pInvItems.length===0){toast("Add at least one item","err");return;}
    const supId=$("pinvsup")?.value;
    if(!supId){toast("Supplier required","err");return;}
    const pDate=$("pinvdate")?.value||today();
    if(pDate>today()){toast("Date cannot be in future","err");return;}
    const pNo=$("pinvno")?.value;
    if(pNo){const dup=S.purchase_invoices.find(p=>p.invoice_no===pNo);if(dup){toast("Number exists","err");return;}}
    const sub=S.pInvItems.reduce((s,it)=>s+(it.total||0),0);
    const taxP=+$("pinvtax")?.value||0,discP=+$("pinvdisc")?.value||0;
    const tax=sub*taxP/100,disc=sub*discP/100,grand=sub+tax-disc;
    if(grand>5000){if(!confirm(`Large amount: ${fmA(grand)}\n\nSure?`))return;}
    const pm=$("pinvpm")?.value||"cash";
    const accId=$("pinvacc")?.value||null;
    const row={invoice_no:pNo,supplier_id:supId,date:pDate,currency:S.currency,payment_method:pm,tax_pct:taxP,disc_pct:discP,subtotal:sub,tax_amount:tax,disc_amount:disc,grand_total:grand,account_id:accId,status:"submitted",reference_no:$("pinvref")?.value||"",items:S.pInvItems};
    const d=await ins("purchase_invoices",row);if(!d)return;
    S.purchase_invoices.unshift(d);
    // Update stock & cost prices
    for(const it of S.pInvItems){
      if(it.product_id){
        const p=S.products.find(x=>x.id===it.product_id);
        if(p){p.stock=(p.stock||0)+it.qty;p.cost_price=it.unit_price;await upd("products",p.id,{stock:p.stock,cost_price:p.cost_price});}
      }
    }
    // If paid (not credit), update account & create transaction
    if(pm!=="credit"&&accId){
      const acc=getAcc(accId);
      if(acc){
        const isCredit=acc.type==="credit";
        const delta=isCredit?grand:-grand; // Credit card: increase debt; other: decrease balance
        acc.balance=(acc.balance||0)+delta;
        await upd("accounts",accId,{balance:acc.balance});
      }
      const tx=await ins("transactions",{type:"expense",amount:grand,currency:S.currency,account_id:accId,category:"purchase",note:row.invoice_no,date:pDate});
      if(tx)S.transactions.unshift(tx);
    }
    logAction("create","purchase_invoice",d.id,`${pNo} ${fmA(grand)}`);
    closeModal(true);toast(t("saved"),"ok");render("purchaseInv");
  }finally{unlockSave();}
}
function showPInvDetail(id){
  const p=S.purchase_invoices.find(x=>x.id===id);if(!p)return;
  const sup=S.suppliers.find(x=>x.id===p.supplier_id);
  const itemRows=(p.items||[]).map(it=>`<tr><td style="padding:6px;">${it.name}</td><td style="padding:6px;text-align:center;">${it.qty}</td><td style="padding:6px;text-align:right;">${fmA(it.unit_price)}</td><td style="padding:6px;text-align:right;font-weight:700;">${fmA(it.total)}</td></tr>`).join("");
  modal(p.invoice_no,`
    <div style="background:var(--glass);padding:12px;border-radius:10px;margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text3);margin-bottom:6px;"><span>Supplier:</span><span style="color:var(--text);">${sup?.name||"—"}</span></div>
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text3);margin-bottom:6px;"><span>Date:</span><span style="color:var(--text);">${fmD(p.date)}</span></div>
      ${p.reference_no?`<div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text3);"><span>Ref:</span><span style="color:var(--text);">${p.reference_no}</span></div>`:""}
    </div>
    <table style="width:100%;font-size:12px;background:var(--glass);border-radius:8px;overflow:hidden;">
      <thead><tr style="background:rgba(255,255,255,.05);"><th style="padding:6px;text-align:left;">Item</th><th style="padding:6px;">Qty</th><th style="padding:6px;text-align:right;">Cost</th><th style="padding:6px;text-align:right;">Total</th></tr></thead>
      <tbody>${itemRows}</tbody>
    </table>
    <div style="background:var(--glass);padding:12px;border-radius:8px;margin-top:12px;">
      <div style="display:flex;justify-content:space-between;color:var(--text3);font-size:12px;"><span>Subtotal</span><span>${fmA(p.subtotal)}</span></div>
      <div style="display:flex;justify-content:space-between;color:var(--text3);font-size:12px;"><span>Tax</span><span>${fmA(p.tax_amount)}</span></div>
      <div style="display:flex;justify-content:space-between;color:var(--text3);font-size:12px;"><span>Discount</span><span>${fmA(p.disc_amount)}</span></div>
      <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid var(--border);font-weight:700;color:var(--accent);"><span>Total</span><span style="font-family:var(--mono);">${fmA(p.grand_total)}</span></div>
    </div>`,
    `<button class="btn btn-danger btn-sm" onclick="delPInv('${id}')">${t("delete")}</button>
     <button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
}
async function delPInv(id){
  const p=S.purchase_invoices.find(x=>x.id===id);if(!p)return;
  if(isLocked(p.date)){toast("Period locked","err");return;}
  if(!confirm(`Delete ${p.invoice_no}?`))return;
  // Reverse stock
  for(const it of(p.items||[])){
    if(it.product_id){
      const prod=S.products.find(x=>x.id===it.product_id);
      if(prod){prod.stock=Math.max(0,(prod.stock||0)-it.qty);await upd("products",prod.id,{stock:prod.stock});}
    }
  }
  // Reverse account & transaction
  if(p.account_id&&p.payment_method!=="credit"){
    const acc=getAcc(p.account_id);
    if(acc){
      const isCredit=acc.type==="credit";
      const reverse=isCredit?-p.grand_total:p.grand_total;
      acc.balance=(acc.balance||0)+reverse;
      await upd("accounts",p.account_id,{balance:acc.balance});
    }
    const linkedTx=S.transactions.filter(tx=>(tx.note||"")===p.invoice_no);
    for(const tx of linkedTx){await del("transactions",tx.id);}
    S.transactions=S.transactions.filter(tx=>(tx.note||"")!==p.invoice_no);
  }
  await del("purchase_invoices",id);
  S.purchase_invoices=S.purchase_invoices.filter(x=>x.id!==id);
  closeModal(true);toast(t("deleted"),"info");render("purchaseInv");
}

// ── QUOTATIONS ──
function nextQuoteNo(){
  const nums=S.quotations.map(q=>{const m=String(q.quote_no||"").match(/QT-(\d+)/);return m?parseInt(m[1]):0;});
  return "QT-"+String(Math.max(0,...nums)+1).padStart(4,"0");
}
function rQuote(){
  let qs=S.quotations;
  const q=S.searchQ.toLowerCase();
  if(q)qs=qs.filter(x=>(x.quote_no||"").toLowerCase().includes(q)||getCustName(x.customer_id).toLowerCase().includes(q));
  qs=applyDateFilter(qs);
  const total=qs.reduce((s,x)=>s+(x.grand_total||0),0);
  const list=qs.map(x=>`
    <div class="list-item" onclick="showQuoteDetail('${x.id}')">
      <div class="list-icon" style="background:var(--blue-dim);color:var(--blue);">📝</div>
      <div class="list-content"><div class="list-title">${x.quote_no||"—"}</div><div class="list-sub">${getCustName(x.customer_id)} · ${fmD(x.date)}</div></div>
      <div class="list-right"><div class="list-amount">${fmA(x.grand_total||0,x.currency)}</div><div class="list-meta"><span class="badge ${x.status==="accepted"?"b-green":x.status==="rejected"?"b-red":"b-blue"}">${x.status||"open"}</span></div></div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">📝</div><p>No quotations</p></div>`;
  $("p-quotations").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("quotations")}</div><div class="page-sub">${qs.length} · Total: ${fmA(total)}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddQuote()">+ ${t("add")}</button></div>
    <div class="search-box"><span class="search-icon">🔍</span><input class="fc" placeholder="Search..." oninput="S.searchQ=this.value;rQuote()" value="${S.searchQ}"/></div>
    ${dateFilterHTML("rQuote")}
    <div class="card">${list}</div>`;
}
function showAddQuote(){
  S.qItems=[];
  const custOpts=S.customers.length?S.customers.map(c=>`<option value="${c.id}">${c.customer_code?`[${c.customer_code}] `:""}${c.name}</option>`).join(""):`<option value="">⚠️ No customers</option>`;
  const qNo=nextQuoteNo();
  modal("New Quotation",`
    <div class="fgrid">
      <div class="fg"><label class="fl">Quote #</label><input class="fc" id="qno" value="${qNo}"/></div>
      <div class="fg"><label class="fl">Customer *</label><select class="fc" id="qcust">${custOpts}</select></div>
      <div class="fg"><label class="fl">${t("date")}</label><input class="fc" type="date" id="qdate" value="${today()}"/></div>
      <div class="fg"><label class="fl">Valid Until</label><input class="fc" type="date" id="qvalid"/></div>
    </div>
    <div style="font-size:11px;color:var(--text3);text-transform:uppercase;margin:14px 0 8px;">Items</div>
    <div id="qitems"></div>
    ${S.products.length===0?`<div class="alert alert-amber">⚠️ No products in inventory.</div>`:`<div class="search-box" style="margin-bottom:8px;"><span class="search-icon">🔍</span><input class="fc" id="qpSearch" placeholder="Search product..." oninput="searchQProd(this.value)"/></div>
    <div id="qpResults" style="background:var(--glass);border-radius:8px;max-height:200px;overflow-y:auto;display:none;margin-bottom:10px;"></div>`}
    <div class="fgrid" style="margin-top:14px;">
      <div class="fg"><label class="fl">Tax (%)</label><input class="fc" type="number" id="qtax" value="0" min="0" max="100" step="0.01" oninput="calcQ()"/></div>
      <div class="fg"><label class="fl">Discount (%)</label><input class="fc" type="number" id="qdisc" value="0" oninput="calcQ()"/></div>
    </div>
    <div class="fg"><label class="fl">Note</label><textarea class="fc" id="qnote" rows="2"></textarea></div>
    <div style="background:var(--glass);padding:14px;border-radius:10px;margin-top:12px;">
      <div style="display:flex;justify-content:space-between;color:var(--text3);"><span>Subtotal</span><span id="q-sub">0</span></div>
      <div style="display:flex;justify-content:space-between;color:var(--text3);"><span>Tax</span><span id="q-tax">0</span></div>
      <div style="display:flex;justify-content:space-between;color:var(--text3);"><span>Discount</span><span id="q-disc">0</span></div>
      <div style="display:flex;justify-content:space-between;padding-top:10px;border-top:1px solid var(--border);font-weight:700;font-size:17px;"><span>Total</span><span id="q-grand" style="color:var(--accent);font-family:var(--mono);">0</span></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="saveQuote()">Save</button>`,true);
  rQItems();calcQ();
}
function searchQProd(q){
  const res=$("qpResults");if(!res)return;
  if(!q||q.length<1){res.style.display="none";return;}
  const ql=q.toLowerCase();
  const matches=S.products.filter(p=>p.name.toLowerCase().includes(ql)).slice(0,10);
  if(matches.length===0){res.style.display="none";return;}
  res.style.display="block";
  res.innerHTML=matches.map(p=>`<div class="list-item" onclick="addQProd('${p.id}')" style="cursor:pointer;">
    <div class="list-icon">📦</div><div class="list-content"><div class="list-title">${p.name}</div><div class="list-sub">${fmA(p.sell_price||0)}</div></div>
  </div>`).join("");
}
function addQProd(pid){
  const p=S.products.find(x=>x.id===pid);if(!p)return;
  const ex=S.qItems.find(it=>it.product_id===pid);
  if(ex){ex.qty++;ex.total=ex.qty*ex.unit_price;}
  else S.qItems.push({product_id:pid,name:p.name,qty:1,unit_price:p.sell_price||0,total:p.sell_price||0});
  if($("qpSearch"))$("qpSearch").value="";
  if($("qpResults"))$("qpResults").style.display="none";
  rQItems();calcQ();
}
function rmQItem(i){S.qItems.splice(i,1);rQItems();calcQ();}
function rQItems(){
  if(S.qItems.length===0){$("qitems").innerHTML=`<div style="text-align:center;padding:16px;color:var(--text3);font-size:12px;">Add products above</div>`;return;}
  $("qitems").innerHTML=S.qItems.map((it,i)=>`
    <div style="background:var(--glass);padding:10px;border-radius:8px;margin-bottom:8px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <div style="font-weight:600;font-size:13px;">${it.name||"—"}</div>
        <button class="btn btn-icon btn-danger btn-sm" onclick="rmQItem(${i})">✕</button>
      </div>
      <div class="fgrid">
        <div class="fg" style="margin:0;"><label class="fl">Qty</label><input class="fc" type="number" value="${it.qty}" min="1" oninput="S.qItems[${i}].qty=+this.value;calcQItem(${i})"/></div>
        <div class="fg" style="margin:0;"><label class="fl">Price</label><input class="fc" type="number" value="${it.unit_price}" step="0.01" oninput="S.qItems[${i}].unit_price=+this.value;calcQItem(${i})"/></div>
      </div>
      <div style="text-align:right;margin-top:6px;color:var(--accent);font-family:var(--mono);font-weight:700;">= ${fmA(it.total)}</div>
    </div>`).join("");
}
function calcQItem(i){S.qItems[i].total=S.qItems[i].qty*S.qItems[i].unit_price;calcQ();rQItems();}
function calcQ(){
  const sub=S.qItems.reduce((s,it)=>s+(it.total||0),0);
  const tax=sub*(+$("qtax")?.value||0)/100;const disc=sub*(+$("qdisc")?.value||0)/100;
  const grand=sub+tax-disc;
  if($("q-sub"))$("q-sub").textContent=fmA(sub);
  if($("q-tax"))$("q-tax").textContent=fmA(tax);
  if($("q-disc"))$("q-disc").textContent=fmA(disc);
  if($("q-grand"))$("q-grand").textContent=fmA(grand);
}
async function saveQuote(){
  if(!lockSave())return;
  try{
    if(S.qItems.length===0){toast("Add items","err");return;}
    const custId=$("qcust")?.value;
    if(!custId){toast("Customer required","err");return;}
    const sub=S.qItems.reduce((s,it)=>s+(it.total||0),0);
    const taxP=+$("qtax")?.value||0,discP=+$("qdisc")?.value||0;
    const tax=sub*taxP/100,disc=sub*discP/100,grand=sub+tax-disc;
    const row={quote_no:$("qno")?.value,customer_id:custId,date:$("qdate")?.value||today(),valid_until:$("qvalid")?.value||null,currency:S.currency,tax_pct:taxP,disc_pct:discP,subtotal:sub,tax_amount:tax,disc_amount:disc,grand_total:grand,status:"open",note:$("qnote")?.value||"",items:S.qItems};
    const d=await ins("quotations",row);if(!d)return;
    S.quotations.unshift(d);
    closeModal(true);toast("Quotation saved","ok");render("quotations");
  }finally{unlockSave();}
}
function showQuoteDetail(id){
  const q=S.quotations.find(x=>x.id===id);if(!q)return;
  const cust=getCust(q.customer_id);
  const itemRows=(q.items||[]).map(it=>`<tr><td style="padding:6px;">${it.name}</td><td style="padding:6px;text-align:center;">${it.qty}</td><td style="padding:6px;text-align:right;">${fmA(it.unit_price)}</td><td style="padding:6px;text-align:right;font-weight:700;">${fmA(it.total)}</td></tr>`).join("");
  modal(q.quote_no,`
    <div style="background:var(--glass);padding:12px;border-radius:10px;margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span style="color:var(--text3);">Customer:</span><span>${cust?.name||"—"}</span></div>
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;"><span style="color:var(--text3);">Date:</span><span>${fmD(q.date)}</span></div>
      ${q.valid_until?`<div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:var(--text3);">Valid until:</span><span>${fmD(q.valid_until)}</span></div>`:""}
    </div>
    <table style="width:100%;font-size:12px;background:var(--glass);border-radius:8px;overflow:hidden;">
      <thead><tr style="background:rgba(255,255,255,.05);"><th style="padding:6px;text-align:left;">Item</th><th style="padding:6px;">Qty</th><th style="padding:6px;text-align:right;">Price</th><th style="padding:6px;text-align:right;">Total</th></tr></thead>
      <tbody>${itemRows}</tbody>
    </table>
    <div style="background:var(--glass);padding:12px;border-radius:8px;margin-top:12px;">
      <div style="display:flex;justify-content:space-between;color:var(--text3);font-size:12px;"><span>Subtotal</span><span>${fmA(q.subtotal)}</span></div>
      ${q.tax_amount?`<div style="display:flex;justify-content:space-between;color:var(--text3);font-size:12px;"><span>Tax</span><span>${fmA(q.tax_amount)}</span></div>`:""}
      ${q.disc_amount?`<div style="display:flex;justify-content:space-between;color:var(--text3);font-size:12px;"><span>Discount</span><span>${fmA(q.disc_amount)}</span></div>`:""}
      <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid var(--border);font-weight:700;color:var(--accent);"><span>Total</span><span style="font-family:var(--mono);">${fmA(q.grand_total)}</span></div>
    </div>
    ${q.note?`<div style="margin-top:12px;padding:10px;background:var(--glass);border-radius:8px;font-size:12px;color:var(--text2);">${q.note}</div>`:""}`,
    `<button class="btn btn-success btn-sm" onclick="convertQuoteToInv('${id}')">→ Convert to Invoice</button>
     <button class="btn btn-danger btn-sm" onclick="delQuote('${id}')">${t("delete")}</button>
     <button class="btn btn-secondary" onclick="closeModal(true)">${t("close")}</button>`,true);
}
async function convertQuoteToInv(id){
  const q=S.quotations.find(x=>x.id===id);if(!q)return;
  if(!confirm("Convert this quotation to an invoice?"))return;
  S.invItems=q.items||[];
  await upd("quotations",id,{status:"accepted"});
  q.status="accepted";
  closeModal(true);
  // Open invoice with quote data pre-filled
  showAddInv();
  setTimeout(()=>{
    if($("invcust"))$("invcust").value=q.customer_id;
    if($("invtax"))$("invtax").value=q.tax_pct;
    if($("invdisc"))$("invdisc").value=q.disc_pct;
    calcInv();rII();
  },200);
}
async function delQuote(id){
  if(!confirm(t("confirmDel")))return;
  await del("quotations",id);
  S.quotations=S.quotations.filter(x=>x.id!==id);
  closeModal(true);toast(t("deleted"),"info");render("quotations");
}

// ── RECURRING EXPENSES ──
function rRecurring(){
  const list=S.recurring_expenses.map(r=>`
    <div class="list-item" onclick="showAddRecurring('${r.id}')">
      <div class="list-icon" style="background:${r.active?"var(--accent-dim)":"var(--bg3)"};color:${r.active?"var(--accent)":"var(--text3)"};">🔁</div>
      <div class="list-content"><div class="list-title">${r.name}</div><div class="list-sub">Day ${r.day_of_month} · ${r.category||"—"} · ${r.active?"Active":"Paused"}</div></div>
      <div class="list-right"><div class="list-amount" style="color:var(--red);">−${fmA(r.amount,r.currency)}</div></div>
    </div>`).join("")||`<div class="empty"><div class="empty-icon">🔁</div><p>No recurring expenses</p></div>`;
  const monthly=S.recurring_expenses.filter(r=>r.active).reduce((s,r)=>s+r.amount,0);
  $("p-recurring").innerHTML=`
    <div class="page-header"><div><div class="page-title">${t("recurring")}</div><div class="page-sub">Monthly total: ${fmA(monthly)}</div></div>
      <button class="btn btn-primary btn-sm" onclick="showAddRecurring()">+ ${t("add")}</button></div>
    <div class="card" style="background:var(--accent-dim);padding:12px;font-size:12px;color:var(--text2);margin-bottom:12px;">
      💡 These run automatically on their day each month. Tap "Run Now" to add this month's entries.
      <button class="btn btn-primary btn-xs" onclick="runRecurringNow()" style="margin-top:8px;">▶ Run This Month</button>
    </div>
    <div class="card">${list}</div>`;
}
function showAddRecurring(eid){
  const r=eid?S.recurring_expenses.find(x=>x.id===eid):null;
  const accOpts=S.accounts.map(a=>`<option value="${a.id}" ${r?.account_id===a.id?"selected":""}>${AICONS[a.type]} ${a.name}</option>`).join("");
  const catOpts=TCATS.map(c=>`<option value="${c}" ${r?.category===c?"selected":""}>${c}</option>`).join("");
  modal(eid?"Edit Recurring":"New Recurring Expense",`
    <div class="fgrid">
      <div class="fg"><label class="fl">Name *</label><input class="fc" id="rcn" value="${r?.name||""}" placeholder="e.g. Rent, Salary"/></div>
      <div class="fg"><label class="fl">Amount *</label><input class="fc" type="number" id="rca" value="${r?.amount||""}" step="0.01"/></div>
      <div class="fg"><label class="fl">Category</label><select class="fc" id="rcc">${catOpts}</select></div>
      <div class="fg"><label class="fl">Account</label><select class="fc" id="rcacc">${accOpts}</select></div>
      <div class="fg"><label class="fl">Day of Month (1-28)</label><input class="fc" type="number" id="rcd" min="1" max="28" value="${r?.day_of_month||1}"/></div>
      <div class="fg"><label class="fl">Active</label><select class="fc" id="rcact"><option value="true" ${r?.active!==false?"selected":""}>Yes</option><option value="false" ${r?.active===false?"selected":""}>No (paused)</option></select></div>
    </div>`,
    `${eid?`<button class="btn btn-danger btn-sm" onclick="delRecurring('${eid}')">✕</button>`:""}
     <button class="btn btn-secondary" onclick="closeModal()">${t("cancel")}</button>
     <button class="btn btn-primary" onclick="saveRecurring('${eid||""}')">${t("save")}</button>`);
}
async function saveRecurring(eid){
  const name=$("rcn")?.value?.trim();if(!name){toast("Name?","err");return;}
  const amt=+$("rca")?.value;if(!amt||amt<=0){toast("Amount?","err");return;}
  const row={name,amount:amt,currency:S.currency,category:$("rcc")?.value||"other",account_id:$("rcacc")?.value||null,day_of_month:+$("rcd")?.value||1,active:$("rcact")?.value==="true"};
  if(eid){await upd("recurring_expenses",eid,row);const i=S.recurring_expenses.findIndex(x=>x.id===eid);if(i>=0)S.recurring_expenses[i]={...S.recurring_expenses[i],...row};}
  else{const d=await ins("recurring_expenses",row);if(!d)return;S.recurring_expenses.unshift(d);}
  closeModal(true);toast(t("saved"),"ok");render("recurring");
}
async function delRecurring(id){
  if(!confirm(t("confirmDel")))return;
  await del("recurring_expenses",id);
  S.recurring_expenses=S.recurring_expenses.filter(x=>x.id!==id);
  closeModal(true);toast(t("deleted"),"info");render("recurring");
}
async function runRecurringNow(){
  const tod=today();
  const monthStart=tod.substring(0,7)+"-01";
  const active=S.recurring_expenses.filter(r=>r.active);
  if(active.length===0){toast("No active expenses","info");return;}
  if(!confirm(`Add ${active.length} recurring expense(s) for this month?`))return;
  let added=0;
  for(const r of active){
    // Check if already run this month
    if(r.last_run&&r.last_run>=monthStart)continue;
    const day=String(r.day_of_month).padStart(2,"0");
    const txDate=tod.substring(0,7)+"-"+day;
    const txd=txDate>tod?tod:txDate;
    const tx=await ins("transactions",{type:"expense",amount:r.amount,currency:r.currency,account_id:r.account_id,category:r.category,note:`[Recurring] ${r.name}`,date:txd});
    if(tx){
      S.transactions.unshift(tx);
      if(r.account_id){const acc=getAcc(r.account_id);if(acc){acc.balance=(acc.balance||0)-r.amount;await upd("accounts",r.account_id,{balance:acc.balance});}}
      await upd("recurring_expenses",r.id,{last_run:tod});
      r.last_run=tod;
      added++;
    }
  }
  toast(`Added ${added} expense(s)`,"ok");render(S.page);
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
    <div class="card"><div class="card-head"><span class="card-title">${t("profile")} / Company</span></div><div class="card-body">
      <div class="fgrid">
        <div class="fg"><label class="fl">${t("companyName")}</label><input class="fc" id="pf-name" value="${S.profile.name||""}"/></div>
        <div class="fg"><label class="fl">${t("phone")}</label><input class="fc" id="pf-phone" value="${S.profile.phone||""}"/></div>
        <div class="fg"><label class="fl">Email</label><input class="fc" id="pf-email" value="${S.profile.email||""}"/></div>
        <div class="fg"><label class="fl">Company TRN</label><input class="fc" id="pf-trn" value="${localStorage.getItem("companyTRN")||""}" placeholder="100xxxxxxxxxxx3"/></div>
        <div class="fg"><label class="fl">${t("address")}</label><input class="fc" id="pf-addr" value="${S.profile.address||""}"/></div>
        <div class="fg"><label class="fl">Default Tax % (for new invoices)</label><input class="fc" type="number" id="pf-tax" value="${localStorage.getItem("defaultTax")||0}" step="0.01"/></div>
      </div>
      <div class="fg"><label class="fl">Company Logo URL (optional)</label><input class="fc" id="pf-logo" value="${localStorage.getItem("companyLogo")||""}" placeholder="https://...png"/></div>
      ${localStorage.getItem("companyLogo")?`<div style="margin-bottom:10px;"><img src="${localStorage.getItem("companyLogo")}" style="max-height:60px;border-radius:6px;"/></div>`:""}
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
      <button class="btn btn-primary btn-sm" onclick="exportBackup()">📥 Export Backup (JSON)</button>
      <button class="btn btn-secondary btn-sm" onclick="showImportDialog()">📤 Import Backup</button>
      <button class="btn btn-amber btn-sm" onclick="recalcBalances()">🔄 Fix Balances</button>
      <button class="btn btn-secondary btn-sm" onclick="showQuickStats()">📊 Quick Stats</button>
    </div></div>
    <div class="card"><div class="card-head"><span class="card-title">🧪 Testing & Cleanup</span></div><div class="card-body" style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-success btn-sm" onclick="generateTestData()">📝 Generate Test Data</button>
      <button class="btn btn-amber btn-sm" onclick="clearTestData()">🗑️ Clear Test Data Only</button>
      <button class="btn btn-danger btn-sm" onclick="clearAllData()">⚠️ Clear ALL Data</button>
    </div></div>
    <div class="card"><div class="card-head"><span class="card-title">Security & Audit</span></div><div class="card-body" style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-secondary btn-sm" onclick="showAuditLog()">📋 Activity Log</button>
      ${localStorage.getItem("lockedUntil")?`<button class="btn btn-amber btn-sm" onclick="unlockPeriod()">🔓 Unlock (${localStorage.getItem("lockedUntil")})</button>`:`<button class="btn btn-secondary btn-sm" onclick="lockPeriod()">🔒 Lock Period</button>`}
    </div></div>`;
}
function saveProfile(){
  S.profile={name:$("pf-name")?.value||"",phone:$("pf-phone")?.value||"",email:$("pf-email")?.value||"",address:$("pf-addr")?.value||""};
  localStorage.setItem("profile",JSON.stringify(S.profile));
  localStorage.setItem("companyTRN",$("pf-trn")?.value||"");
  localStorage.setItem("companyLogo",$("pf-logo")?.value||"");
  localStorage.setItem("defaultTax",$("pf-tax")?.value||"0");
  toast(t("saved"),"ok");render("settings");
}
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
  {id:"purchaseInv",icon:"🛒",label:"purchaseInv",mob:false},
  {id:"quotations",icon:"📝",label:"quotations",mob:false},
  {id:"vouchers",icon:"📋",label:"vouchers",mob:false},
  {id:"chequesIn",icon:"📥",label:"chequesIn",mob:false},
  {id:"chequesOut",icon:"📤",label:"chequesOut",mob:false},
  {id:"transactions",icon:"⇄",label:"transactions",mob:false},
  {id:"accounts",icon:"🏦",label:"accounts",mob:false},
  {id:"inventory",icon:"📦",label:"inventory",mob:false},
  {id:"customers",icon:"👥",label:"customers",mob:false},
  {id:"suppliers",icon:"🏭",label:"suppliers",mob:false},
  {id:"debtorsCreditors",icon:"💼",label:"debtorsCreditors",mob:false},
  {id:"recurring",icon:"🔁",label:"recurring",mob:false},
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
        <button class="t-refresh" onclick="showGlobalSearch()" title="Search Everywhere">🔍</button>
        <button class="t-refresh" onclick="showCalculator()" title="Calculator">🧮</button>
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
