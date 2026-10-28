export type TradingLesson = {
  slug: string
  title: string
  readMin: number
  level: 'beginner' | 'intermediate' | 'advanced'
  content: { type: 'p' | 'h2' | 'h3' | 'ul' | 'ol' | 'note' | 'svg' | 'formula'; text?: string; items?: string[]; svg?: string; caption?: string }[]
}

export type DemoPlatform = {
  name: string
  type: 'web' | 'android' | 'ios' | 'desktop'
  description: string
  startingCash: string
  realData: boolean
  crypto: boolean
  url: string
}

export const tradingLessons: TradingLesson[] = [
  { slug:'what-is-trading', title:'What Is Trading? A Beginner Guide', readMin:6, level:'beginner', content:[
    { type:'p', text:'Trading is buying and selling financial assets to profit from short-term price movements. Unlike investing (which holds for years), trading targets moves that happen over days, hours, or minutes.' },
    { type:'p', text:'Every trade involves a buyer who believes price will rise and a seller who believes it will fall. The price on a chart is where their opinions meet.' },
    { type:'h2', text:'The four markets' },
    { type:'ul', items:['Stocks — company ownership','Crypto — Bitcoin, Ethereum, altcoins','Forex — currency pairs','Commodities — gold, oil, agriculture'] },
    { type:'h2', text:'Why 70–90% of beginners lose money' },
    { type:'p', text:'Not because trading is rigged — because they trade without a plan, risk too much per trade, and let emotion drive decisions.' },
    { type:'note', text:'Never risk money you cannot afford to lose. Practice on demo for 3+ months before real money.' }
  ]},
  { slug:'how-markets-work', title:'How Markets Work: Orders and Spreads', readMin:7, level:'beginner', content:[
    { type:'p', text:'A market matches buyers and sellers. When you place an order, it enters an order book: all pending buy and sell orders.' },
    { type:'p', text:'The highest buy price is the bid. The lowest sell price is the ask. The difference is the spread — the exchange\'s fee for matching you.' },
    { type:'h2', text:'Market vs limit orders' },
    { type:'ul', items:['Market order — executes now at best price, no price guarantee','Limit order — executes only at your price or better, no timing guarantee'] },
    { type:'h2', text:'Liquidity' },
    { type:'p', text:'Bitcoin is highly liquid — you can trade millions without moving price. Small altcoins are not — trying to sell $10,000 can drop the price 10%.' },
    { type:'note', text:'Open Binance or Coinbase (no account) and watch the order book for 5 minutes.' }
  ]},
  { slug:'reading-charts-candlesticks', title:'Reading Candlestick Charts', readMin:8, level:'beginner', content:[
    { type:'p', text:'A candlestick shows open, high, low, close for one time period. Green = close > open (buyers won). Red = close < open (sellers won).' },
    { type:'h2', text:'Anatomy' },
    { type:'p', text:'The thick body is open-to-close. The thin wicks above and below are the extremes. A long lower wick = sellers pushed down but buyers rejected. A long upper wick = buyers pushed up but sellers rejected.' },
    { type:'h2', text:'Three patterns to know first' },
    { type:'ul', items:['Doji — open ≈ close, indecision','Hammer — small body, long lower wick, bullish reversal','Engulfing — large candle covers previous, momentum shift'] },
    { type:'h2', text:'Timeframes' },
    { type:'p', text:'1-min chart = noise. Daily chart = trend. Use 2–3: daily for direction, 4-hour for structure, 1-hour for entry.' },
    { type:'note', text:'Open a free chart and identify the last 10 candles as doji, hammer, or engulfing.' }
  ]},
  { slug:'risk-management', title:'Risk Management: The Only Skill That Matters', readMin:7, level:'beginner', content:[
    { type:'p', text:'You can be wrong 70% of the time and still make money if risk is managed. You can be right 90% and lose everything if it is not.' },
    { type:'h2', text:'The 1% rule' },
    { type:'p', text:'Never risk more than 1% of your account per trade. With $10,000, your max loss per trade is $100 — not your position size, but your loss if the stop hits.' },
    { type:'h2', text:'Risk:Reward ratio' },
    { type:'p', text:'Before entering, calculate profit vs loss. A 1:2.5 ratio means risking $2 to make $5. 40% win rate at 1:2.5 is profitable. 60% win rate at 1:0.5 is not.' },
    { type:'h2', text:'Position sizing formula' },
    { type:'p', text:'Size = (Account × Risk%) / (Entry − Stop). $10,000 account, 1% risk, entry $50, stop $48 → $100 / $2 = 50 shares.' },
    { type:'note', text:'Use the simulator. If you lose more than 1% on any paper trade, you broke the rule.' }
  ]},
  { slug:'support-resistance', title:'Support and Resistance Levels', readMin:6, level:'intermediate', content:[
    { type:'p', text:'Support is where buyers tend to step in. Resistance is where sellers do. These are psychological reference points — people remember Bitcoin bounced at $60,000, so they place buy orders there.' },
    { type:'h2', text:'How to draw them' },
    { type:'p', text:'Look for zones touched at least twice. Draw rectangles, not thin lines. $59,500–$60,500 is more useful than a line at $60,000.' },
    { type:'h2', text:'Why levels break' },
    { type:'p', text:'Support breaks when sellers overwhelm buyers. When it breaks, stop-losses trigger a cascade. This is what breakout traders wait for.' },
    { type:'note', text:'Practice: find 3 levels on a Bitcoin daily chart that held at least twice.' }
  ]},
  { slug:'trend-following', title:'Trend Following', readMin:6, level:'intermediate', content:[
    { type:'p', text:'Most beginners buy after a run-up and sell after a crash. Trend following means trading WITH the trend, not against it.' },
    { type:'h2', text:'Identifying a trend' },
    { type:'p', text:'Uptrend = higher highs and higher lows. Downtrend = lower highs and lower lows. If price bounces between the same levels, there is no trend — trend strategies fail here.' },
    { type:'h2', text:'Moving averages' },
    { type:'p', text:'50 and 200 MA are the standard filters. Price above 200 MA = long-term uptrend. Only take long trades in that condition.' },
    { type:'h2', text:'Pullback entry' },
    { type:'p', text:'Best entries are on pullbacks to support or a moving average. Tight stop, large reward.' },
    { type:'note', text:'Trend following feels slow because you do not catch every move. That is the point.' }
  ]},
  { slug:'crypto-specifics', title:'Crypto Trading: What Makes It Different', readMin:7, level:'intermediate', content:[
    { type:'p', text:'Crypto shares the same principles as stocks but has unique traits that make it more exciting and more dangerous.' },
    { type:'h2', text:'24/7 markets' },
    { type:'p', text:'No opening or closing bell. A major move can happen at 3am Sunday. Use stops and limit orders. Accept missing some moves.' },
    { type:'h2', text:'Higher volatility' },
    { type:'p', text:'Bitcoin moves 5–10% a day. Altcoins 20–50%. Position sizing matters more than in stocks.' },
    { type:'h2', text:'Liquidity risk' },
    { type:'p', text:'Major coins are liquid. Small caps are not. Check 24h volume — under $1M, avoid.' },
    { type:'note', text:'The simulator monitors live crypto prices. Practice before touching real money.' }
  ]},
  { slug:'trading-psychology', title:'Trading Psychology', readMin:6, level:'intermediate', content:[
    { type:'p', text:'You can have the best strategy and still lose if emotions drive decisions. Fear makes you sell early. Greed makes you hold too long.' },
    { type:'h2', text:'Four emotional traps' },
    { type:'ul', items:['FOMO — buying after a big green candle','Revenge trading — entering bigger after a loss','Moving stop-losses — turning small losses catastrophic','Overconfidence — doubling size after wins'] },
    { type:'h2', text:'Solution: written plan + journal' },
    { type:'p', text:'Plan: what you trade, when, where stop is, where target is, how much to risk. Journal: entry, exit, reason, emotion, outcome. After 50 trades, patterns appear.' },
    { type:'note', text:'The simulator tracks your P&L automatically. Write the reason for each trade. Review weekly.' }
  ]},
  { slug:'paper-trading-guide', title:'How to Use the Simulator', readMin:5, level:'beginner', content:[
    { type:'p', text:'$100,000 virtual cash, real crypto prices. Real prices, simulated orders. Practice without risking anything.' },
    { type:'h2', text:'What not to do' },
    { type:'p', text:'Do not try to win by risking 20% per trade. Doubling $100,000 that way teaches nothing except gambling sometimes works.' },
    { type:'h2', text:'What to do' },
    { type:'p', text:'Risk 1% per trade. Track every trade. After 20 trades, review win rate and average win/loss. Numbers never lie.' },
    { type:'note', text:'Reset is available if needed. Use it to start fresh after learning, not to hide bad trades.' }
  ]},
  { slug:'building-a-trading-plan', title:'Building a Trading Plan', readMin:6, level:'advanced', content:[
    { type:'p', text:'A plan is the difference between a trader and a gambler. It defines exactly how you operate, removing emotion from every decision.' },
    { type:'h2', text:'Eight sections' },
    { type:'ol', items:['Markets — which assets','Timeframes — which charts','Strategy — entry trigger','Risk per trade','Stop-loss placement','Take-profit placement','Maximum daily loss','Review process'] },
    { type:'h2', text:'Sample plan' },
    { type:'p', text:'Markets: BTC, ETH, SOL. Timeframes: 4h direction, 1h entry. Strategy: pullback to 50 EMA in uptrend. Risk: 1%. Stop: below pullback low. Target: 2× risk. Max daily loss: 3%. Review: Sunday.' },
    { type:'note', text:'Write your plan down. Print it. Read it before every session.' }
  ]},
  { slug:'common-mistakes', title:'10 Mistakes That Destroy Beginners', readMin:7, level:'beginner', content:[
    { type:'p', text:'Every trader makes mistakes. Survivors make them on demo first and do not repeat them with real money.' },
    { type:'h2', text:'The ten' },
    { type:'ol', items:['Risking too much per trade','No stop-loss','Averaging down into losers','Revenge trading','Over-leveraging','FOMO buying','Ignoring the trend','Not journaling','Trading on emotion','Expecting to get rich quick'] },
    { type:'h2', text:'The one rule' },
    { type:'p', text:'Before you enter any trade, write down three things: entry, stop, target. If you cannot, you are not ready.' },
    { type:'note', text:'Use the simulator. Make every mistake on demo so you never make them with real money.' }
  ]},
  { slug:'multi-timeframe-analysis', title:'Multi-Timeframe Analysis', readMin:6, level:'advanced', content:[
    { type:'p', text:'Professionals look at 2–3 timeframes. The daily chart shows the overall trend. The 4-hour shows structure. The 1-hour shows entry.' },
    { type:'h2', text:'The process' },
    { type:'ol', items:['Daily chart: is the trend up, down, or sideways?','4-hour: where are key support/resistance levels?','1-hour: is there a valid entry aligned with the higher timeframe?'] },
    { type:'h2', text:'Rule' },
    { type:'p', text:'Never take a 1-hour trade against the daily trend unless you have a very strong reason. Higher timeframe wins.' },
    { type:'note', text:'Try this on Bitcoin: find daily trend, mark 4h levels, watch 1h for entry.' }
  ]}
  ,
  // ============ CANDLESTICK PATTERNS ============
  { slug:'candlestick-anatomy', title:'Candlestick Anatomy: Reading Every Candle', readMin:7, level:'beginner', content:[
    { type:'p', text:'Every candlestick you see on a chart contains four prices: Open, High, Low, Close. Once you can read these four numbers from a single candle, you can read any chart in the world. Candlesticks were invented by Japanese rice traders in the 1700s — they are older than the stock market itself.' },
    { type:'svg', caption:'A bullish candle (green, close > open) and a bearish candle (red, close < open). Body = open-to-close range. Wicks (shadows) = the extremes.', svg:'<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><line x1="60" y1="25" x2="60" y2="50" stroke="#16a34a" stroke-width="2"/><rect x="48" y="50" width="24" height="70" fill="#16a34a"/><line x1="60" y1="120" x2="60" y2="150" stroke="#16a34a" stroke-width="2"/><text x="60" y="170" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">Bullish (green)</text><line x1="180" y1="25" x2="180" y2="50" stroke="#dc2626" stroke-width="2"/><rect x="168" y="50" width="24" height="70" fill="#dc2626"/><line x1="180" y1="120" x2="180" y2="150" stroke="#dc2626" stroke-width="2"/><text x="180" y="170" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Bearish (red)</text><text x="20" y="30" font-size="10" fill="#666">high</text><text x="20" y="145" font-size="10" fill="#666">low</text><text x="95" y="52" font-size="10" fill="#666">open</text><text x="95" y="120" font-size="10" fill="#666">close</text></svg>' },
    { type:'h2', text:'The four prices' },
    { type:'ul', items:['Open — the first trade of the time period','High — the highest price reached','Low — the lowest price reached','Close — the last price of the time period'] },
    { type:'h2', text:'Body vs wicks' },
    { type:'p', text:'The thick part (body) shows the range between open and close. A long body = strong conviction. A short body = indecision. The thin lines (wicks, shadows) show how far price went beyond the body before being rejected. A long lower wick on a green candle = sellers pushed price down but buyers rejected it — bullish. A long upper wick on a red candle = buyers pushed price up but sellers rejected it — bearish.' },
    { type:'h2', text:'A candle tells a story' },
    { type:'p', text:'A candle with a small body and long lower wick is a story of buyers defending a price level. A candle with a large body and no wicks shows complete conviction — buyers won every minute of the period. Learning to read the story is what separates technical analysts from chart-watchers.' },
    { type:'note', text:'Practice: open a 1-hour Bitcoin chart and look at the last 10 candles. For each one, describe the story it tells: who was in control, and who got rejected.' }
  ]},
  { slug:'doji-pattern', title:'The Doji: When Buyers and Sellers Tie', readMin:5, level:'beginner', content:[
    { type:'p', text:'A doji is a candle where the open and close are almost exactly the same. It looks like a cross. The doji represents complete indecision — neither buyers nor sellers won the period. It is one of the most important signals in candlestick analysis, but it is also one of the most misunderstood.' },
    { type:'svg', caption:'Three doji variations. Left: standard doji. Center: long-legged doji (extreme indecision). Right: dragonfly doji (bullish lean).', svg:'<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><line x1="60" y1="20" x2="60" y2="70" stroke="#666" stroke-width="2"/><rect x="48" y="70" width="24" height="3" fill="#666"/><line x1="60" y1="73" x2="60" y2="120" stroke="#666" stroke-width="2"/><text x="60" y="145" text-anchor="middle" font-size="10" fill="#666">Standard</text><line x1="160" y1="15" x2="160" y2="70" stroke="#666" stroke-width="2"/><rect x="148" y="70" width="24" height="3" fill="#666"/><line x1="160" y1="73" x2="160" y2="130" stroke="#666" stroke-width="2"/><text x="160" y="145" text-anchor="middle" font-size="10" fill="#666">Long-legged</text><line x1="260" y1="70" x2="260" y2="70" stroke="#666" stroke-width="2"/><rect x="248" y="70" width="24" height="3" fill="#16a34a"/><line x1="260" y1="73" x2="260" y2="135" stroke="#16a34a" stroke-width="2"/><text x="260" y="145" text-anchor="middle" font-size="10" fill="#16a34a">Dragonfly (bullish)</text></svg>' },
    { type:'h2', text:'What a doji means' },
    { type:'p', text:'A doji alone is not a buy or sell signal. It is a warning that the current trend may be running out of steam. A doji at the top of a strong uptrend often precedes a reversal down. A doji at the bottom of a downtrend often precedes a reversal up. Location matters more than the candle itself.' },
    { type:'h2', text:'Variations' },
    { type:'ul', items:['Standard doji — open ≈ close, small wicks. Basic indecision.','Long-legged doji — very long wicks both ways. Extreme volatility with no resolution. Often a turning point.','Dragonfly doji — long lower wick only. Sellers pushed hard but buyers recovered completely. Bullish bias.','Gravestone doji — long upper wick only. Buyers pushed hard but sellers recovered completely. Bearish bias.'] },
    { type:'note', text:'A doji on its own is weak. A doji that appears after a strong trend, at a key support/resistance level, with high volume is a strong signal. Context is everything.' }
  ]},
  { slug:'hammer-shooting-star', title:'Hammer and Shooting Star', readMin:6, level:'beginner', content:[
    { type:'p', text:'The hammer and shooting star are mirror images. Both have small bodies and long wicks. The hammer appears at the bottom of a downtrend and signals a bullish reversal. The shooting star appears at the top of an uptrend and signals a bearish reversal. They are among the most reliable single-candle signals.' },
    { type:'svg', caption:'Left: Hammer (bullish — long lower wick, small body near top). Right: Shooting star (bearish — long upper wick, small body near bottom).', svg:'<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><line x1="60" y1="30" x2="60" y2="40" stroke="#16a34a" stroke-width="2"/><rect x="48" y="40" width="24" height="20" fill="#16a34a"/><line x1="60" y1="60" x2="60" y2="140" stroke="#16a34a" stroke-width="2"/><text x="60" y="168" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">Hammer</text><text x="60" y="182" text-anchor="middle" font-size="10" fill="#666">bullish reversal</text><line x1="180" y1="30" x2="180" y2="110" stroke="#dc2626" stroke-width="2"/><rect x="168" y="110" width="24" height="20" fill="#dc2626"/><line x1="180" y1="130" x2="180" y2="140" stroke="#dc2626" stroke-width="2"/><text x="180" y="168" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">Shooting star</text><text x="180" y="182" text-anchor="middle" font-size="10" fill="#666">bearish reversal</text></svg>' },
    { type:'h2', text:'Anatomy of a hammer' },
    { type:'ul', items:['Small body (open and close close together)','Little to no upper wick','Lower wick at least 2× the body length','Appears AFTER a downtrend, not during one'] },
    { type:'p', text:'The story: sellers pushed price down hard, but buyers stepped in and drove it back up to nearly the open. The long lower wick is the footprint of that rejection. A hammer that closes above its open is strongest (it is technically a green hammer).' },
    { type:'h2', text:'Anatomy of a shooting star' },
    { type:'ul', items:['Small body','Little to no lower wick','Upper wick at least 2× the body length','Appears AFTER an uptrend'] },
    { type:'p', text:'The story: buyers pushed price up hard, but sellers stepped in and drove it back down to nearly the open. The long upper wick is the footprint of rejection. A shooting star that closes below its open is strongest (red shooting star).' },
    { type:'h2', text:'Confirmation' },
    { type:'p', text:'Never trade a hammer or shooting star on its own. Wait for the next candle to confirm the reversal — a strong bullish candle after a hammer, or a strong bearish candle after a shooting star. This filter dramatically improves win rate.' },
    { type:'note', text:'Best location: hammers work best at strong support levels. Shooting stars work best at strong resistance levels.' }
  ]},
  { slug:'bullish-engulfing', title:'Bullish Engulfing: The Reversal Confirmation', readMin:6, level:'intermediate', content:[
    { type:'p', text:'The bullish engulfing pattern is a two-candle formation that marks a strong shift in power from sellers to buyers. It is one of the most reliable reversal signals and is easy to spot once you know it.' },
    { type:'svg', caption:'Bullish engulfing: first a red candle (sellers in control), then a larger green candle that completely covers the red one (buyers take over).', svg:'<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><line x1="60" y1="70" x2="60" y2="80" stroke="#dc2626" stroke-width="2"/><rect x="48" y="80" width="24" height="40" fill="#dc2626"/><line x1="60" y1="120" x2="60" y2="135" stroke="#dc2626" stroke-width="2"/><line x1="120" y1="55" x2="120" y2="65" stroke="#16a34a" stroke-width="2"/><rect x="108" y="65" width="24" height="75" fill="#16a34a"/><line x1="120" y1="140" x2="120" y2="150" stroke="#16a34a" stroke-width="2"/><text x="90" y="172" text-anchor="middle" font-size="10" fill="#666">Green body fully covers the prior red body</text></svg>' },
    { type:'h2', text:'The rules' },
    { type:'ol', items:['The first candle must be bearish (red) and part of a downtrend','The second candle must be bullish (green)','The second candle body must completely cover the first candle body — open below the prior close, close above the prior open','The second candle should have a larger body than the first'] },
    { type:'h2', text:'Why it works' },
    { type:'p', text:'The first candle shows sellers maintaining control. The second candle opens lower (sellers trying to continue the trend) but then buyers overwhelm them and drive the price above the prior open. This is not indecision — it is a decisive shift in control. Sellers who were in profit from the first candle are now underwater. Their exits become the fuel for further buying.' },
    { type:'h2', text:'How to trade it' },
    { type:'ul', items:['Enter on the close of the engulfing candle, or on a breakout above its high','Place stop-loss just below the engulfing candle low','Target the next resistance zone','Confirm with volume — engulfing is more reliable when volume rises on the second candle'] },
    { type:'note', text:'The bearish engulfing is the exact opposite — a green candle followed by a larger red candle. Same rules, opposite direction. Works at resistance.' }
  ]},
  { slug:'morning-evening-star', title:'Morning Star and Evening Star', readMin:6, level:'intermediate', content:[
    { type:'p', text:'The morning star and evening star are three-candle patterns that mark powerful reversals. They are slower to form than engulfing patterns but often mark the beginning of larger moves. The morning star appears at the bottom of a downtrend; the evening star at the top of an uptrend.' },
    { type:'svg', caption:'Morning star: strong bearish candle, small indecision candle, strong bullish candle. A three-act story of reversal.', svg:'<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><line x1="50" y1="50" x2="50" y2="60" stroke="#dc2626" stroke-width="2"/><rect x="38" y="60" width="24" height="45" fill="#dc2626"/><line x1="50" y1="105" x2="50" y2="115" stroke="#dc2626" stroke-width="2"/><line x1="120" y1="105" x2="120" y2="120" stroke="#666" stroke-width="2"/><rect x="108" y="120" width="24" height="4" fill="#666"/><line x1="120" y1="124" x2="120" y2="135" stroke="#666" stroke-width="2"/><line x1="190" y1="45" x2="190" y2="55" stroke="#16a34a" stroke-width="2"/><rect x="178" y="55" width="24" height="55" fill="#16a34a"/><line x1="190" y1="110" x2="190" y2="120" stroke="#16a34a" stroke-width="2"/><text x="50" y="170" text-anchor="middle" font-size="10" fill="#666">1. Red</text><text x="120" y="170" text-anchor="middle" font-size="10" fill="#666">2. Small / gap</text><text x="190" y="170" text-anchor="middle" font-size="10" fill="#666">3. Green</text></svg>' },
    { type:'h2', text:'The morning star structure' },
    { type:'ol', items:['Candle 1: strong bearish candle — sellers in control','Candle 2: small body candle (often a doji or spinning top) — indecision, often gap down','Candle 3: strong bullish candle that closes well into candle 1\'s range — buyers take over'] },
    { type:'p', text:'The three-act structure is what makes it reliable. Act 1 establishes the trend. Act 2 is the hesitation. Act 3 is the reversal. You are trading the moment when a downtrend loses momentum and buyers seize control.' },
    { type:'h2', text:'How to trade the morning star' },
    { type:'ul', items:['Enter on the close of candle 3, or on the next candle break of candle 3\'s high','Stop-loss below the low of candle 2 (the middle candle)','Target: 2× the risk, or the next resistance zone','Confirm with volume — candle 3 should have higher volume than candle 1'] },
    { type:'note', text:'Evening star is the exact mirror: strong green, small hesitation, strong red. Appears at the top of an uptrend as a bearish reversal signal.' }
  ]},
  { slug:'three-soldiers-crows', title:'Three White Soldiers / Three Black Crows', readMin:5, level:'intermediate', content:[
    { type:'p', text:'These are momentum continuation patterns. Three White Soldiers = three consecutive strong bullish candles. Three Black Crows = three consecutive strong bearish candles. Both indicate a powerful trend is underway — not a reversal, but a continuation.' },
    { type:'svg', caption:'Three White Soldiers (bullish continuation) and Three Black Crows (bearish continuation).', svg:'<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><g transform="translate(0,0)"><line x1="40" y1="120" x2="40" y2="130" stroke="#16a34a" stroke-width="2"/><rect x="32" y="130" width="16" height="30" fill="#16a34a"/><line x1="70" y1="95" x2="70" y2="105" stroke="#16a34a" stroke-width="2"/><rect x="62" y="105" width="16" height="30" fill="#16a34a"/><line x1="100" y1="70" x2="100" y2="80" stroke="#16a34a" stroke-width="2"/><rect x="92" y="80" width="16" height="30" fill="#16a34a"/><text x="70" y="172" text-anchor="middle" font-size="10" fill="#16a34a">Three White Soldiers</text></g><g transform="translate(160,0)"><line x1="40" y1="55" x2="40" y2="65" stroke="#dc2626" stroke-width="2"/><rect x="32" y="65" width="16" height="30" fill="#dc2626"/><line x1="70" y1="80" x2="70" y2="90" stroke="#dc2626" stroke-width="2"/><rect x="62" y="90" width="16" height="30" fill="#dc2626"/><line x1="100" y1="105" x2="100" y2="115" stroke="#dc2626" stroke-width="2"/><rect x="92" y="115" width="16" height="30" fill="#dc2626"/><text x="70" y="172" text-anchor="middle" font-size="10" fill="#dc2626">Three Black Crows</text></g></svg>' },
    { type:'h2', text:'Three White Soldiers' },
    { type:'ul', items:['Three consecutive bullish candles','Each candle opens within the previous body, closes higher','Each candle closes near its high (small upper wicks)','Appears after a downtrend or consolidation — signals bullish trend start'] },
    { type:'p', text:'This pattern shows sustained buying pressure across three periods. It is strongest when it appears after a prolonged downtrend or a period of consolidation. It signals the start of a new uptrend, not a one-off bounce.' },
    { type:'h2', text:'Three Black Crows' },
    { type:'p', text:'The exact opposite: three consecutive bearish candles, each opening within the previous body and closing near its low. Appears after an uptrend or consolidation — signals bearish trend start.' },
    { type:'h2', text:'Trading considerations' },
    { type:'p', text:'These patterns are continuation signals — do not fade them. Wait for a pullback to enter the trend rather than chasing the third candle. A good entry is a retracement to the 50% area of the third candle, or to a nearby support level.' },
    { type:'note', text:'Warning: if the three candles are very large, price is likely overextended. Wait for a pullback. Do not enter at the extreme.' }
  ]},

  // ============ CHART PATTERNS ============
  { slug:'head-shoulders-pattern', title:'Head and Shoulders: The Classic Reversal', readMin:7, level:'intermediate', content:[
    { type:'p', text:'The head and shoulders pattern is the most famous reversal pattern in technical analysis. It marks the transition from an uptrend to a downtrend. When it completes, the previous trend is considered dead.' },
    { type:'svg', caption:'Head and shoulders top: three peaks — left shoulder, higher head, right shoulder — with a neckline connecting the troughs. Breakdown below the neckline confirms the reversal.', svg:'<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><polyline points="20,180 60,120 100,150 160,80 220,150 280,120 340,180" fill="none" stroke="#1a73e8" stroke-width="3"/><line x1="40" y1="140" x2="340" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/><text x="60" y="115" text-anchor="middle" font-size="11">L. Shoulder</text><text x="160" y="75" text-anchor="middle" font-size="11" font-weight="bold">Head</text><text x="280" y="115" text-anchor="middle" font-size="11">R. Shoulder</text><text x="340" y="135" font-size="10" fill="#dc2626">neckline</text><line x1="340" y1="140" x2="380" y2="200" stroke="#dc2626" stroke-width="2"/><text x="370" y="215" text-anchor="middle" font-size="10" fill="#dc2626">breakdown</text></svg>' },
    { type:'h2', text:'The structure' },
    { type:'ol', items:['Left shoulder: price rises to a peak, pulls back to a support level (the neckline)','Head: price rises to a HIGHER peak than the left shoulder, then pulls back to the same neckline','Right shoulder: price rises to a LOWER peak than the head (often similar to the left shoulder), then pulls back','Breakdown: price breaks below the neckline — pattern confirmed'] },
    { type:'h2', text:'How to trade it' },
    { type:'ul', items:['Entry: when price closes below the neckline (confirmed breakdown), or on a retest of the neckline from below','Stop-loss: just above the right shoulder, or just above the neckline','Target: measure the height of the head (peak) to the neckline, and project that distance below the neckline','Volume: should be highest on the left shoulder or head, and rise again on the breakdown'] },
    { type:'h2', text:'Head and shoulders bottom (inverse)' },
    { type:'p', text:'The reverse pattern at the bottom of a downtrend signals a bullish reversal. Three troughs instead of peaks: left shoulder (low), head (lower low), right shoulder (higher low). Breakout above the neckline confirms.' },
    { type:'note', text:'Failure to reach the target is a warning sign. If price breaks the neckline but reverses back above it quickly, the pattern has failed — exit immediately.' }
  ]},
  { slug:'triangle-patterns', title:'Triangle Patterns: Consolidation Before Breakout', readMin:6, level:'intermediate', content:[
    { type:'p', text:'Triangles are among the most common chart patterns. They form when price moves between converging trend lines — buyers and sellers are compressed into a smaller and smaller range until one side breaks out.' },
    { type:'svg', caption:'Three triangle types. Ascending: higher lows against flat resistance (bullish). Descending: lower highs against flat support (bearish). Symmetrical: converging trend lines (breakout either direction).', svg:'<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><g transform="translate(0,0)"><polyline points="20,140 40,90 60,130 80,80 100,110 120,60 140,50" fill="none" stroke="#1a73e8" stroke-width="2"/><line x1="20" y1="50" x2="140" y2="50" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="20" y1="140" x2="140" y2="50" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/><text x="70" y="172" text-anchor="middle" font-size="10" fill="#16a34a">Ascending</text></g><g transform="translate(180,0)"><polyline points="20,40 40,90 60,50 80,100 100,70 120,120 140,130" fill="none" stroke="#1a73e8" stroke-width="2"/><line x1="20" y1="40" x2="140" y2="130" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="20" y1="130" x2="140" y2="130" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/><text x="70" y="172" text-anchor="middle" font-size="10" fill="#dc2626">Descending</text></g><g transform="translate(360,0)"><polyline points="20,130 40,60 60,120 80,70 100,110 120,80 140,100" fill="none" stroke="#1a73e8" stroke-width="2"/><line x1="20" y1="140" x2="140" y2="60" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="20" y1="50" x2="140" y2="130" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,3"/><text x="70" y="172" text-anchor="middle" font-size="10" fill="#7c3aed">Symmetrical</text></g></svg>' },
    { type:'h2', text:'Ascending triangle (bullish bias)' },
    { type:'p', text:'Flat resistance at the top, rising support at the bottom. Buyers are pushing harder and harder against a fixed level. Eventually, buyers break through. Breakout above resistance confirms. Target = the height of the triangle projected upward from the breakout point.' },
    { type:'h2', text:'Descending triangle (bearish bias)' },
    { type:'p', text:'Flat support at the bottom, falling resistance at the top. Sellers are pushing harder against a fixed support. Break below support confirms. Target = the height of the triangle projected downward.' },
    { type:'h2', text:'Symmetrical triangle (direction neutral)' },
    { type:'p', text:'Both trend lines converge — no bias. Breakout direction determines the target. Volume should decrease during the triangle and spike on the breakout. Trade in the direction of the breakout.' },
    { type:'note', text:'False breakouts are common on triangles. Wait for a candle CLOSE beyond the trend line, not just an intra-candle break. Volume on the breakout confirms.' }
  ]},
  { slug:'flag-pattern', title:'Bull and Bear Flags', readMin:5, level:'intermediate', content:[
    { type:'p', text:'Flags are short consolidation patterns that appear after a strong directional move. They are one of the highest-probability continuation patterns. A bull flag appears after a strong rally and signals continuation higher. A bear flag appears after a strong drop and signals continuation lower.' },
    { type:'svg', caption:'Bull flag: strong rally (the pole), then a short pullback (the flag), then continuation. Enter on breakout above the flag.', svg:'<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><line x1="20" y1="150" x2="100" y2="40" stroke="#16a34a" stroke-width="4"/><text x="40" y="100" font-size="11" fill="#16a34a" font-weight="bold">pole</text><polyline points="100,40 130,70 160,50 190,65 210,45" fill="none" stroke="#1a73e8" stroke-width="2"/><text x="155" y="30" font-size="11" fill="#1a73e8" font-weight="bold">flag (pullback)</text><line x1="210" y1="45" x2="280" y2="20" stroke="#16a34a" stroke-width="4" stroke-dasharray="6,4"/><text x="260" y="60" font-size="11" fill="#16a34a" font-weight="bold">breakout</text></svg>' },
    { type:'h2', text:'Anatomy of a flag' },
    { type:'ol', items:['Pole: a strong, sharp directional move (usually with high volume)','Flag: a brief consolidation — usually 3–10 candles — drifting sideways or slightly against the trend','Breakout: price resumes the trend direction, often with a volume spike'] },
    { type:'h2', text:'How to trade it' },
    { type:'ul', items:['Entry: on breakout above the flag high (bull flag) or below the flag low (bear flag)','Stop-loss: just below the flag low (bull) or just above the flag high (bear)','Target: measure the pole length and project it from the breakout point','Volume: pole high, flag low, breakout high — this volume pattern is important'] },
    { type:'h2', text:'Why flags work' },
    { type:'p', text:'The pole shows aggressive buying (or selling). The flag is a pause — early buyers take profits, but the underlying trend is intact. When the pause resolves, the original buyers return and new buyers who missed the pole now enter. This fuels the second leg.' },
    { type:'note', text:'Flags should resolve quickly. If the consolidation lasts more than 2 weeks, it is no longer a flag — it has become a range. The flag loses validity.' }
  ]},
  { slug:'double-tops-bottoms', title:'Double Tops and Double Bottoms', readMin:5, level:'intermediate', content:[
    { type:'p', text:'Double tops and double bottoms are two of the most reliable reversal patterns. They form when price tests the same level twice and fails to break — signalling that the level has become exhausted.' },
    { type:'svg', caption:'Double top: two peaks at the same level, separated by a trough. Neckline break confirms the reversal. Target = height of pattern projected down from neckline.', svg:'<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><polyline points="20,180 60,50 100,130 160,50 210,130 260,180" fill="none" stroke="#1a73e8" stroke-width="2.5"/><line x1="40" y1="50" x2="280" y2="50" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="40" y1="130" x2="260" y2="130" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/><text x="60" y="45" text-anchor="middle" font-size="11" font-weight="bold">Top 1</text><text x="160" y="45" text-anchor="middle" font-size="11" font-weight="bold">Top 2</text><text x="100" y="150" font-size="10" fill="#dc2626">neckline</text></svg>' },
    { type:'h2', text:'Double top (bearish)' },
    { type:'ol', items:['Price rises to a peak (Top 1)','Price pulls back to a trough (the neckline)','Price rises back to approximately the same peak (Top 2) — this is the failure point','Price breaks below the neckline — confirmation','Target: distance from top to neckline, projected below the neckline'] },
    { type:'h2', text:'Double bottom (bullish)' },
    { type:'p', text:'The mirror pattern at the bottom of a downtrend. Two troughs at approximately the same level, separated by a peak. Breakout above the neckline confirms. Target = the depth of the pattern projected above.' },
    { type:'h2', text:'Traps to avoid' },
    { type:'ul', items:['Do not enter before the neckline break — that is anticipation, not confirmation','Watch the second top: if volume is significantly lower than the first top, the pattern is more reliable','If price breaks the second peak (making a new high), the pattern has failed — do not trade it'] },
    { type:'note', text:'The double top/bottom is a "failed breakout" pattern. Buyers could not make a new high at the second attempt. When supply overwhelms demand at the same level twice, the level breaks.' }
  ]},

  // ============ INDICATORS ============
  { slug:'moving-averages-guide', title:'Moving Averages: SMA, EMA, and Crossovers', readMin:7, level:'beginner', content:[
    { type:'p', text:'Moving averages are the most widely used technical indicators in the world. They smooth out price action to reveal the underlying trend, filtering out noise. If you learn only one indicator, learn moving averages.' },
    { type:'h2', text:'Simple Moving Average (SMA)' },
    { type:'p', text:'The SMA is the arithmetic mean of the last N closes. The 50 SMA = average of the last 50 closes. The 200 SMA = average of the last 200 closes. Simple, smooth, and slow to react to price changes.' },
    { type:'h2', text:'Exponential Moving Average (EMA)' },
    { type:'p', text:'The EMA weights recent prices more heavily. It reacts faster to price changes than the SMA. Common EMAs: 9, 21, 50, 200. Traders prefer EMAs for shorter timeframes because they capture trend shifts faster.' },
    { type:'svg', caption:'Golden cross: the 50 MA crosses above the 200 MA — long-term bullish signal. Death cross: opposite — long-term bearish signal.', svg:'<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><polyline points="20,180 70,140 120,100 170,60 220,80 270,40 320,30" fill="none" stroke="#16a34a" stroke-width="2.5"/><polyline points="20,140 70,130 120,110 170,90 220,70 270,55 320,45" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5,3"/><text x="60" y="125" font-size="11" fill="#16a34a" font-weight="bold">50 MA</text><text x="60" y="155" font-size="11" fill="#7c3aed" font-weight="bold">200 MA</text><circle cx="200" cy="78" r="8" fill="none" stroke="#f59e0b" stroke-width="2.5"/><text x="215" y="75" font-size="11" fill="#f59e0b" font-weight="bold">golden cross</text></svg>' },
    { type:'h2', text:'Golden cross and death cross' },
    { type:'p', text:'The golden cross occurs when a shorter MA (usually 50) crosses above a longer MA (usually 200). It signals the start of a long-term uptrend. The death cross is the opposite — 50 crosses below 200 — signalling a long-term downtrend. Both are lagging signals but are watched by institutional traders worldwide.' },
    { type:'h2', text:'Practical use' },
    { type:'ul', items:['Trend filter: only buy when price is above the 200 MA. Only sell when below.','Dynamic support: in uptrends, the 50 MA often acts as support on pullbacks','Crossovers: for swing trading, enter when 20 EMA crosses 50 MA in trend direction','Slope matters: an MA trending up confirms uptrend; flat MA means no trend'] },
    { type:'note', text:'Never use a single MA as a standalone signal. They work best as a filter combined with price action (support, trend) and momentum indicators.' }
  ]},
  { slug:'rsi-indicator', title:'RSI: Reading Overbought and Oversold', readMin:6, level:'intermediate', content:[
    { type:'p', text:'The Relative Strength Index (RSI) is a momentum oscillator that measures the speed and magnitude of price changes on a scale from 0 to 100. Above 70 = overbought. Below 30 = oversold. It is one of the most reliable momentum tools.' },
    { type:'h2', text:'The formula (simplified)' },
    { type:'formula', text:'RSI = 100 − [100 / (1 + (Average Gain / Average Loss))]' },
    { type:'p', text:'Over 14 periods (usually 14 candles), average the gains and average the losses. The ratio determines the RSI. You do not need to calculate it by hand — every charting platform does it automatically. What matters is interpretation.' },
    { type:'h2', text:'What RSI tells you' },
    { type:'ul', items:['Above 70 — overbought. Price has risen far and fast. Warning of a pullback (but not a guarantee).','Below 30 — oversold. Price has fallen hard. Warning of a bounce.','50 line — the dividing line between bullish and bearish momentum','Divergence — the most powerful RSI signal (see below)'] },
    { type:'h2', text:'RSI divergence' },
    { type:'p', text:'Divergence is when price makes a new high but RSI makes a LOWER high (bearish divergence), or price makes a new low but RSI makes a HIGHER low (bullish divergence). Divergence signals momentum is fading even as price continues — often precedes a reversal.' },
    { type:'h2', text:'Common mistakes' },
    { type:'ul', items:['Buying just because RSI is below 30 — in a strong downtrend, RSI can stay below 30 for weeks','Selling just because RSI is above 70 — in a strong uptrend, RSI can stay above 70 for weeks','Ignoring context — RSI works best combined with price action and trend','Using RSI on very short timeframes — 1-minute RSI is mostly noise'] },
    { type:'note', text:'Best signal: RSI divergence at a key support or resistance level, in a trending market. This combines three edges into one.' }
  ]},
  { slug:'macd-indicator', title:'MACD: Trend and Momentum in One', readMin:6, level:'intermediate', content:[
    { type:'p', text:'The Moving Average Convergence Divergence (MACD) indicator combines trend and momentum in a single visual tool. It consists of three components: the MACD line, the signal line, and the histogram. Once you understand how they interact, you can read trend strength and momentum shifts on any chart.' },
    { type:'h2', text:'The three components' },
    { type:'ul', items:['MACD line — the difference between the 12 EMA and the 26 EMA. Tells you if the short-term trend is stronger than the long-term trend.','Signal line — a 9 EMA of the MACD line. Slower, smoother version of MACD.','Histogram — the difference between MACD and signal line. Visual representation of momentum.'] },
    { type:'h2', text:'Reading signals' },
    { type:'ol', items:['Bullish crossover — MACD line crosses above the signal line. Buy signal.','Bearish crossover — MACD line crosses below the signal line. Sell signal.','MACD above zero — bullish momentum. Below zero — bearish momentum.','Histogram rising — momentum accelerating. Shrinking — momentum fading.'] },
    { type:'h2', text:'MACD divergence' },
    { type:'p', text:'Like RSI, MACD divergence is a powerful signal. Price makes a higher high but MACD makes a lower high — bearish divergence. Or price makes a lower low but MACD makes a higher low — bullish divergence. This often precedes trend reversals.' },
    { type:'h2', text:'Best timeframes' },
    { type:'p', text:'MACD works best on 4-hour and daily charts. On 1-minute and 5-minute charts, it lags too much and generates false signals. Traders using MACD for swing trading focus on the 4-hour chart.' },
    { type:'note', text:'MACD is a lagging indicator — it confirms trends rather than predicting them. Best used in combination with price action analysis, not as a standalone signal.' }
  ]},
  { slug:'bollinger-bands', title:'Bollinger Bands: Volatility and Price Extremes', readMin:5, level:'intermediate', content:[
    { type:'p', text:'Bollinger Bands are three lines plotted around price: a middle band (usually 20 SMA) and two outer bands (2 standard deviations above and below). They measure volatility — when the bands widen, volatility is high; when they contract, volatility is low.' },
    { type:'svg', caption:'Bollinger Bands: price usually stays within the bands. Touch of upper or lower band signals extreme, but not necessarily reversal.', svg:'<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><path d="M20,80 Q80,40 140,70 T260,50 T320,60" fill="none" stroke="#16a34a" stroke-width="2" opacity="0.6"/><path d="M20,100 Q80,80 140,90 T260,90 T320,85" fill="none" stroke="#666" stroke-width="2" stroke-dasharray="4,3"/><path d="M20,120 Q80,120 140,110 T260,130 T320,110" fill="none" stroke="#dc2626" stroke-width="2" opacity="0.6"/><polyline points="20,100 50,80 80,120 110,90 140,70 170,100 200,80 230,110 260,60 290,90 320,80" fill="none" stroke="#1a73e8" stroke-width="2.5"/><text x="330" y="60" text-anchor="end" font-size="10" fill="#16a34a">Upper (resistance)</text><text x="330" y="85" text-anchor="end" font-size="10" fill="#666">20 SMA</text><text x="330" y="110" text-anchor="end" font-size="10" fill="#dc2626">Lower (support)</text></svg>' },
    { type:'h2', text:'The rules' },
    { type:'ul', items:['Price near upper band — overbought relative to recent range (warning)','Price near lower band — oversold relative to recent range (warning)','Bands pinch (narrow) — volatility low, breakout likely','Bands widen (broad) — volatility high, trend may be ending'] },
    { type:'h2', text:'The squeeze' },
    { type:'p', text:'The most powerful Bollinger signal is the "squeeze" — when the bands narrow dramatically. This indicates a period of low volatility is ending, and a large move is about to begin. Direction is unknown until the breakout, but the move is usually substantial. Traders often enter on the first close outside the bands after a squeeze.' },
    { type:'h2', text:'Walking the band' },
    { type:'p', text:'In strong trends, price can "walk" the upper or lower band — closing outside the band for multiple candles in a row. This is NOT overbought — it is trend strength. Do not fade the trend just because price is at the band. Wait for a confirmed reversal candle.' },
    { type:'note', text:'Bollinger Bands work best combined with trend analysis. In a ranging market, fade the band touches. In a trending market, use the bands as dynamic support/resistance.' }
  ]},
  { slug:'volume-analysis', title:'Volume: The Confirmation Tool', readMin:6, level:'intermediate', content:[
    { type:'p', text:'Volume is the number of contracts (or coins, or shares) traded in a period. It is often ignored by beginner traders, but professional traders consider it essential. Volume tells you whether price moves are real or fake. Every breakout, pattern, or reversal is stronger when confirmed by volume.' },
    { type:'h2', text:'The core principle' },
    { type:'p', text:'Price moves on participation. A price move with high volume is a move that many traders are committed to. A price move with low volume is a move that few traders support. When a large number of participants agree on a price, the move is likely to continue. When few participants do, it is likely to reverse.' },
    { type:'h2', text:'Volume confirmations' },
    { type:'ul', items:['Breakouts — should have higher volume than the recent average. Low-volume breakouts often fail.','Reversals — the reversal candle should have higher volume than the candles that preceded it.','Trends — volume should rise with the trend and fall during pullbacks. A trend with falling volume is weakening.','Capitulation — a spike of volume at the bottom of a downtrend often marks the end of selling.'] },
    { type:'h2', text:'Volume divergence' },
    { type:'p', text:'Volume divergence is when price makes a new high but volume declines. This signals the buyers driving the move are running out of steam. Very similar to RSI divergence — often precedes a reversal. A classic setup is a triple top with declining volume across all three peaks.' },
    { type:'h2', text:'Volume and support/resistance' },
    { type:'p', text:'Levels with high volume are stronger support or resistance than levels with low volume. A price level where millions of trades occurred has real memory — many traders are anchored to that price. A level where few trades occurred is more likely to be broken.' },
    { type:'note', text:'On crypto exchanges, check whether the volume is real. Some exchanges inflate volume with wash trading. Cross-reference with CoinGecko or CoinMarketCap\'s "trust score" for legitimacy.' }
  ]},
  { slug:'fibonacci-retracement', title:'Fibonacci Retracement: Where Pullbacks End', readMin:6, level:'intermediate', content:[
    { type:'p', text:'Fibonacci retracement levels are horizontal lines drawn at 23.6%, 38.2%, 50%, 61.8%, and 78.6% of a price move. Traders use them to predict where a pullback will end within an ongoing trend. They are one of the most widely used tools in professional trading.' },
    { type:'h2', text:'The Fibonacci sequence (brief)' },
    { type:'p', text:'The Fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55... Each number is the sum of the two before it. Dividing adjacent numbers gives ratios that converge on 1.618 (the golden ratio). The reciprocal gives 0.618 — the famous "golden ratio" used in art, architecture, and trading.' },
    { type:'h2', text:'How to draw the levels' },
    { type:'ol', items:['Identify a clear trend leg — a strong move from a low to a high (uptrend) or high to a low (downtrend)','Draw the Fibonacci retracement tool from the start of the leg to the end','The tool will auto-draw horizontal levels at 23.6%, 38.2%, 50%, 61.8%, 78.6%','In an uptrend, expect pullbacks to find support at these levels — especially 38.2%, 50%, and 61.8%'] },
    { type:'h2', text:'The most important levels' },
    { type:'ul', items:['38.2% — shallow pullback, strong trend','50% — psychological middle point (not actually a Fibonacci number, but everyone uses it)','61.8% — the "golden" retracement — deepest pullback before the trend resumes','Below 78.6% — the trend may be failing; enter only with caution'] },
    { type:'h2', text:'Confluence is the key' },
    { type:'p', text:'Fibonacci levels work best when they align with other signals. A 61.8% Fibonacci level that coincides with a previous support, an uptrending 50 MA, and a bullish candlestick pattern is a very high-probability entry. Fibonacci alone is weak — Fibonacci + confluence is powerful.' },
    { type:'note', text:'Fibonacci is a self-fulfilling prophecy in part — so many traders use it that it works. But no level is guaranteed. Always use stop-losses below the next Fibonacci level.' }
  ]},
  { slug:'scalping-vs-swing', title:'Trading Styles: Scalping vs Swing vs Position', readMin:5, level:'beginner', content:[
    { type:'p', text:'Not all traders think the same way. Trading styles vary dramatically based on time commitment, personality, capital, and risk tolerance. Understanding the three main styles helps you choose the one that fits your life.' },
    { type:'h2', text:'Scalping' },
    { type:'ul', items:['Timeframe: seconds to minutes','Number of trades: 20–100 per day','Holding time: seconds to minutes','Focus: small, frequent gains','Best for: full-time traders with fast internet and low fees','Risk: high emotional stress, high fees eat profits, difficult to sustain'] },
    { type:'p', text:'Scalping captures very small price movements repeatedly. It requires split-second decisions, low-latency connections, and low trading fees. For most retail traders, scalping is a losing game — not because it does not work, but because fees and stress erode profits. Professional scalping firms dominate this niche.' },
    { type:'h2', text:'Swing trading' },
    { type:'ul', items:['Timeframe: hours to days','Number of trades: 2–10 per week','Holding time: hours to days','Focus: capturing multi-day moves','Best for: part-time traders with day jobs','Risk: moderate — overnight gaps can hurt, but manageable'] },
    { type:'p', text:'Swing trading is the best fit for most retail traders. You check the market 1–3 times per day, hold positions for hours to days, and capture the middle portion of trends. The lower frequency means lower fees and lower stress. You can work a full-time job and still swing trade.' },
    { type:'h2', text:'Position trading' },
    { type:'ul', items:['Timeframe: weeks to months','Number of trades: 1–5 per month','Holding time: weeks to months','Focus: capturing major trend moves','Best for: patient traders with strong analysis skills','Risk: low frequency but large position sizes possible'] },
    { type:'p', text:'Position traders hold for weeks or months, capturing the biggest moves. This requires less screen time than swing trading but deeper analysis. Most successful long-term crypto traders are position traders.' },
    { type:'h2', text:'Which fits you?' },
    { type:'p', text:'If you have 30+ hours per week — consider swing trading, not scalping (scalping requires years of experience to be profitable). If you have 5–10 hours per week — position trading. If you are a beginner — swing trading on the 4-hour or daily chart. Do not start with scalping. The failure rate for beginner scalpers is over 95%.' },
    { type:'note', text:'Use the paper trading simulator with each style. Swing trade for a month, position trade for a month. You will know quickly which one fits your personality.' }
  ]}
]

export const demoPlatforms: DemoPlatform[] = [
  { name:'Investopedia Stock Simulator', type:'web', description:'Free stock simulator with $100,000 virtual balance and built-in lessons.', startingCash:'$100,000', realData:true, crypto:false, url:'https://www.investopedia.com/simulator/' },
  { name:'MarketWatch Virtual Stock Exchange', type:'web', description:'Free simulator with private contests for friends and classmates.', startingCash:'$100,000', realData:true, crypto:false, url:'https://www.marketwatch.com/games' },
  { name:'Wall Street Survivor', type:'web', description:'Gamified simulator with badges and challenges.', startingCash:'$100,000', realData:true, crypto:false, url:'https://www.wallstreetsurvivor.com/' },
  { name:'eToro Virtual Portfolio', type:'web', description:'Practice trading 7,000+ shares and ETFs with $100,000 virtual cash.', startingCash:'$100,000', realData:true, crypto:true, url:'https://www.etoro.com/virtual-portfolio/' },
  { name:'Webull Paper Trading', type:'android', description:'Free paper trading with real-time data in the Webull app.', startingCash:'$100,000', realData:true, crypto:true, url:'https://www.webull.com/paper-trading' },
  { name:'CustomCrypto Simulator', type:'ios', description:'Practice crypto trading with 35+ coins. No sign-up.', startingCash:'$10,000', realData:true, crypto:true, url:'https://apps.apple.com/app/customcrypto-crypto-simulator/id6756681992' },
  { name:'Learn Crypto Trading Simulator', type:'ios', description:'Risk-free crypto practice with $10,000 virtual cash on live prices.', startingCash:'$10,000', realData:true, crypto:true, url:'https://apps.apple.com/app/learn-crypto-trading-simulator/id6474723954' },
  { name:'MockApe', type:'web', description:'Paper trade Solana and BNB meme coins with live data.', startingCash:'Varies', realData:true, crypto:true, url:'https://mockape.com/' },
  { name:'Trading Game', type:'android', description:'Learn day trading with real market data and no risk.', startingCash:'Varies', realData:true, crypto:false, url:'https://play.google.com/store/apps/details?id=com.tradinggame.app' },
  { name:'BullBearGame', type:'web', description:'Free browser-based trading game with virtual portfolios.', startingCash:'Varies', realData:true, crypto:false, url:'https://bullbeargame.com/' },
  { name:'JagSim', type:'web', description:'Clean paper trading simulator with real market data.', startingCash:'Varies', realData:true, crypto:false, url:'https://jagsim.com/' },
  { name:'TradingView Paper Trading', type:'web', description:'Built-in paper trading on professional charts. Free tier.', startingCash:'Varies', realData:true, crypto:true, url:'https://www.tradingview.com/paper-trading/' }
]


