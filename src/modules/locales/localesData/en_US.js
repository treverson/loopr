export default {
  navbar:{
    home:"Home",
    trade:"Trade",
    wallet:"Wallet",
    settings:"Settings",
    portfolio:"Portfolio",
    account:"Account",
    subs:{
      copy:'Copy',
      copy_success:'Copy Successfully!',
      copy_failed:'Copy Failed',
      unlock:'Unlock Wallet',
      generate:'Generate Wallet',
      export: "Export Keystore",
      help:'Help',
      tools:'Tools',
      qrcode:'QR Code',
      airdrop:'Airdrop',
      quit:'Quit',
    },
  },
  order:{
    buy:'Buy',
    sell:'Sell',
    receive:'Receive',
    convert:"Convert",
    buying:"You are buying",
    selling:"You are selling",
    lrcfee:"LRC Fee",
    margin:"Margin Split",
    since:"Valid Since",
    till:"Valid Until",
    raw:"Raw Order",
    sign:"Sign",
    signed:"Signed Order",
    place_tip:"Submit order is free and does no consume gas",
    placing_order:"Placing Order",
    place_success:"Success!",
    place_success_tip:'Congratulation! Your order is under trading now!',
    place_warn:'Before your orders can be filled. You should do things followed:',
    balance_not_enough:'{token} balance is not enough',
    submit:"Submit Order",
    confirm_cancel_order:"Do you Want to cancel this order ?",
    confirm_cancel_all:"Do you Want to cancel all {pair} orders?",
    cancel_order_success:"Cancel Order Success",
    cancel_order_failed:"Cancel Order Failed",
    cancel_all_success:"Cancel All {pair} Orders Success",
    cancel_all_failed:"Cancel All {pair} Orders Failed"
  },
  ticker:{
    last:'Last Price',
    change:'Change',
    low:'Low',
    high:'High',
    vol:'Volume',
    market:'Market',
    favorites:'Favorites',
  },
  exchanges:{
    loopr:'Loopring DEX',
    binance:'Binance',
    okex:'Okex',
    huobi:'Huobi',
  },
  home:{
    title:'Welcome To Loopring Wallet & DEX',
    subtitle:'Secure token trading right from your own wallet.',
  },
  buttons:{
    unlock_wallet:'Unlock Wallet',
    generate_wallet:'Generate Wallet',
  },
  tabs:{
    my_open_orders:'My Open Orders',
    my_recent_trades:'My Recent Trades',
    my_assets:'My Assets',
    my_orders:'My Orders',
    my_trades:'My Trades',
  },
  txs:{
    title:'Transactions',
    status:'Status',
    status_pending:'Pending',
    status_success:'Success',
    status_failed:'Failed',
    type:'Type',
    type_transfer:'Send',
    type_convert:'Convert',
    type_convert_title_eth:'Convert ETH To WETH',
    type_convert_title_weth:'Convert WETH To ETH',
    type_receive:'Receive',
    type_enable:'Enable',
    type_enable_title: "Enable {symbol} To Trade",
    type_transfer_title: "Send {symbol}",
    type_receive_title: "Receive {symbol}",
  },
  orders:{
    market:'Market',
    status:'Status',
    status_opened:'Opend',
    status_completed:'Completed',
    status_canceled:'Cancelled',
    status_expired:'Expired',
    side:'Side',
    side_sell:'Sell',
    side_buy:'Buy',
    create_time:'Create Time',
    update_time:'Update Time',
    amount:'Amount',
    price:'Price',
    total:'Total',
    LrcFee:'LrcFee',
    filled:'Filled',
  },
  global:{
    all:'All',
    market:'Market',
    options:'Options',
  },
  settings:{
    preference:"Preference",
    trade:"Trade",
    relay:"Relay",
    language:"Language",
    currency:"Currency",
    timezone:"Timezone",
    reset:"Reset",
    contract:"Contract Version",
    ttl:"Time to live",
    ttl_tip:"Please input integer value",
    lrcfee:"LRC Fee",
    margin:"Margin S",
    gasPrice:"Gas Price",
    slow:"Slow",
    fast:"Fast",
    edit:"Edit",
    save:"Save",
    delete:"Delete",
    addRelay:"Add Custom Relay",
    editRelay:"Edit Relay",
    chooseRelay:"Choose Relay",
    relayName:"Relay Name",
    relayUrl:"Relay URL",
    select :"Select"
  },
  trade:{
    orderForm: "Order Form",
    sell:"Sell",
    buy:"Buy",
    balance: "Balance",
    price: "Price",
    price_verification_message: "Please input valid price",
    amount: "Amount",
    amount_verification_message: "Please input valid amount",
    available_amount: "Available Amount",
    total: "Total",
    advanced: "Advanced",
    time_to_live: "Time to live",
    more: "More",
    popular_option: "Popular option",
    integer_verification_message: "Please input integer value",
    second: "Second",
    minute: "Minute",
    hour: "Hour",
    day: "Day",
    week: "Week",
    month: "Month",
    lrc_fee: "Lrc Fee",
    margin_split: "MarginSplit",
    place_order: "Place Order",
    unlock_your_wallet: "Unlock Your Wallet",
    to_trade: "To Trade",
    lrcFee_increased: "According to your setting, lrcFee is {userSet}LRC, we increase it to a minimum value: {increased}LRC, will you continue place order?",
    notice: "Please Notice",
    placing_order: 'Placing Order',
    place_order_failed: "Place Order Failed !",
    you_should_do_things: "You should do things followed",
    why: "Why",
    balance_not_enough:'{token} is not enough, required {required}.',
    receive: 'Receive',
    to_buy: 'Buy'
  },
  token:{
    convert_title: "Convert",
    amount: "Amount",
    amount_verification_message: "Please input valid amount",
    convert_max: "Convert Max",
    min_gas_remain_warn: "0.1 ETH is reserved as gas so that you can send transactions.",
    no_eth_balance_warn: "You do not or will not have sufficient ETH as gas for sending transactions.",
    convert_confirm: "Yes, Convert Now!",
    send_title: "Send",
    result_failed: "Your have failed {do} {amount} {token}, cause:{reason}",
    completed: "Completed",
    result_success: "You have successfully {do} {amount} {token}",
    view_transaction: 'View Transaction In Etherscan',
    send_again: 'Send Again',
    convert_again: 'Convert Again',
    ethereum_address:"My Ethereum Address",
    copy:"Copy",
    copy_success:"Copy Successfully",
    copy_failed:"Copy Failed",
    send: "Send",
    recipient:"Recipient",
    eth_address_verification_message: "Invalid Ethereum address",
    send_max: "Send Max",
    transaction_fee: "Transaction Fee",
    advanced: "Advanced",
    data: "Data",
    gas_limit: "Gas Limit",
    gas_price: "Gas Price",
    continue:"Continue",
    slow: "Slow",
    fast: "Fast",
    transfer_preview_title: "You are about to send",
    from: "From",
    to: "To",
    gas: "Gas",
    transfer_cancel: "No, Cancel It",
    transfer_send: "Yes, Send Now",
    to_confirm_title: "To Confirm",
    to_confirm_ledger_content: "Please confirm transaction on your Ledger device"
  },
  wallet: {
    bind_tip: "Bind Address For Airdrop",
    bind_type: "Type",
    type_tip: "Select Token To Bind",
    address_tip: "Paste corresponding address here",
    address: "Address",
    bind_address: "Bind Address",
    bind_type_address:"Bind {type} Address",
    unlock_tip:"How would you like to access your wallet",
    metamask: "MetaMask",
    trezor: "Trezor",
    ledger: "Ledger",
    keystore: "Keystore",
    privateKey: "Private Key",
    mnemonic: "Mnemonic",
    no_wallet:"Don't have a Wallet? Let's",
    generate_one:"generate one",
    error_title: "Error",
    content_ledger_unlock_require_https: "Unlocking a Ledger hardware wallet is only possible on pages served over HTTPS",
    content_ledger_connect_failed: "Failed to connect with your Ledger device, you could follow these advices and have a try later. 1、Make sure your Ledger device has connected with your computer and unlocked. 2、Set this to 'yes': Settings->Browser support 3、Enter into Ethereum app",
    content_leder_locked:"Your Ledger seems to be locked",
    recommended:"Recommended",
    recommend_way: "This is a recommended way to access your wallet.",
    connect_to_ledger: "Connect to Ledger",
    content_metamask_mainnet: "We only support Ethereum mainnet when using MetaMask",
    warning_title: "Warning",
    content_metamask_logout: "You have logout from MetaMask",
    content_metamask_unlock_again : "You may have changed your MetaMask network, or your computer has ever been locked. For either reason, you should make sure your MetaMask is using MainNetwork and unlock your wallet again",
    content_metamask_install: "Your may need to install MetaMask extension to your browser first",
    content_metamask_locked: "Failed to connect with MetaMask, please unlock and use",
    get_metamask:"Get MetaMask Chrome extension (for Chrome Firefox Opera)",
    connect_to_metamask: "Connect To MetaMask",
    recommend_tip: "This is a recommended way to access your wallet.",
    not_recommended: "Not Recommended",
    not_recommended_tip: "This is a NOT recommended way to access your wallet.",
    select_keystore: "Select Your Keystore File",
    select_json: "Select JSON File",
    unlock: "Unlock",
    password: "Password",
    connect_trezor: "Connect To Trezor",
    paste_mnemonic: "Paste Your Mnemonic Here",
    select_wallet: "Select Your Wallet Type",
    optional: "Optional",
    mnemonic_tip: "Please input valid phrase",
    paste_privatekey: "Paste Your PrivateKey Here",
    select_account: "Select Your Account",
    pre_page: "Previous Page",
    next_page: "Next Page",
    confirm: "Confirm",
    cancel: "Cancel",
    generate_wallet: "Generate Wallet",
    generate: "Generate Now",
    have_one: "Already have a Wallet",
    to_unlock: "Click to unlock",
    set_password: "Set A Strong Password",
    backup: {
      backup_wallet: "Backup Wallet",
      keystore: "Keystore",
      privatekey: "Private Key",
      mnemonic: "Mnemonic",
      not_lose: "Don't Lose It",
      not_share: "Do not share it",
      not_recover: 'It cannot be recovered if you lose it',
      stolen: "Your funds will be stolen if you use this file on a malicious/phishing site.",
      backup: "Make a backup",
      secure: "Secure it like the millions of dollars it may one day be worth.",
      download: "I Understand, Download Wallet File",
      copy_mnemonic: "I Understand, Copy Mnemonic",
      copy_privatekey: "I Understand, Copy Private Key",
      wrong_password: "Wrong Password",
      input_password: "Please input password first",
      get_keystore: "Get Keystore",
      download_keystore: "Download Keystore File",
      enter_wallet_password: "Enter wallet Password",
      enter_password: "Enter a password to protect your wallet",
      file_keystore: "File Keystore",
      text_keystore: "Text Keystore",
      qr_keystore: "Qrcode Keystore"
    },
    token:"Token",
  },
  tokens:{
    "hide_small_balances":" Hide Small Balances",
    "only_show_favorites":"Only Show My Favorites",
    "options":"Options",
    "options_transfer":"Send",
    "options_receive":"Receive",
    "options_convert":"Convert",
    "options_trade":"Trade",
    "options_edit":"Edit",
  }
}
