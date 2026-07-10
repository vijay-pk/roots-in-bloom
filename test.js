fetch('https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}).then(r => r.text()).then(t => {
  const m = t.match(/<span class="a-price-whole">([0-9,]+)[^<]*<\/span>/);
  console.log('Match:', m ? m[1] : 'None');
  console.log('Contains Captcha:', t.toLowerCase().includes('captcha'));
});
