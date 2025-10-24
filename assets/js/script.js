    const hamburger = document.querySelector('.hamburger');
    const navLinks1 = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');

    // Open menu
    hamburger.addEventListener('click', () => {
      navLinks1.classList.add('show');
      overlay.classList.add('show');
      hamburger.setAttribute('aria-expanded', 'true');
    });

    // Close menu
    closeBtn.addEventListener('click', () => {
      navLinks1.classList.remove('show');
      overlay.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
    });

    // Close when clicking overlay
    overlay.addEventListener('click', () => {
      navLinks1.classList.remove('show');
      overlay.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });
    document.querySelectorAll('.card').forEach(el => observer.observe(el));



    // ===== Product data (demo) =====
    const PRODUCTS = [
      {
        id:"ENG-2018-35E-ATL", 
        year:2018,
        engine:"3.5L EcoBoost", 
        mileage:82, 
        price:4200, 
        zip:"30303", 
        yard:"Atlanta, GA", 
        img:"./assets/images/engine/3.5 L EcoBoost V6 (standard version)-1.jpg",
        shortDescription:`<li class="list-group-item">Twin-turbo powerhouse for towing & hauling</li>
                          <li class="list-group-item">~375 hp / ~470 lb-ft torque</li>
                          <li class="list-group-item">Great for heavy-duty performance builds</li>
                          <li class="list-group-item">Fits 2015 – 2020 F-150 3.5L EcoBoost models</li>
                          `,
        productDescription:`<p><strong>Description:</strong></p>The High-Output 3.5L EcoBoost is the top-tier engine for the F-150 Raptor and Limited models, tuned for maximum power and off-road performance. With advanced twin-turbo technology, it delivers sports-car-like acceleration and class-leading towing capacity.
        <p><strong>Specifications:</strong></p>
        <p>Engine Type: High-Output Twin-Turbo V6<br>
        Displacement: 3.5L<br>
        Horsepower: ~450 hp<br>
        Torque: ~510 lb-ft<br>
        Enhanced internals and stronger turbos</p>
        <strong>Why Choose This Engine:</strong>
        <p>Ultimate performance for off-road and high-speed builds<br>
        Factory-engineered for Raptor toughness<br>
        Premium option for top-spec F-150 restorations</p>
        <p><strong>Compatibility:</strong></p>
        Fits Ford F-150 Raptor and Limited trims (2017 – 2020).</p>`
      },
      {
        id:"ENG-2019-27E-LA", 
        year:2019,
        engine:"2.7L EcoBoost", 
        mileage:64, 
        price:4550, 
        zip:"90011", 
        yard:"Los Angeles, CA", 
        img:"./assets/images/engine/2.7 L EcoBoost V6 (twin-turbo)-1.jpg",
        shortDescription:`<li class="list-group-item">Twin-turbo V6 with excellent power & fuel efficiency</li>
                          <li class="list-group-item">~325 hp / ~400 lb-ft torque</li>
                          <li class="list-group-item">Best for daily driving, light towing & work trucks</li>
                          <li class="list-group-item">Fits 2015 – 2020 F-150 2.7L EcoBoost models</li>`,
        productDescription:`<p><strong>Description:</strong></p> 
        <p>The 2.7L EcoBoost V6 is one of Ford’s most popular twin-turbo engines, known for its perfect balance of power, fuel efficiency, and lightweight design. Ideal for daily driving and light towing, it delivers strong torque and responsive acceleration while maintaining excellent fuel economy.</p>
        <p><strong>Specifications:</strong></p>
        <p>Engine Type: Twin-Turbocharged Gasoline Direct Injection (GDI) V6<br>
        Displacement: 2.7L<br>
        Horsepower: ~325 hp<br>
        Torque: ~400 lb-ft<br>
        Aluminum Block & Cylinder Heads for improved efficiency</p>
        <p><strong>Why Choose This Engine:</strong></p>
        <p>Perfect replacement for daily-use F-150s<br>
        Excellent balance of power and MPG<br>
        Popular choice for fleet trucks and light-duty pickups</p>
        <p><p><strong>Compatibility:</strong></p>
        Fits Ford F-150 models from 2015 – 2020 equipped with 2.7L EcoBoost engines.</p>`
      },
      {
        id:"ENG-2016-50V8-DAL", 
        year:2016,
        engine:"5.0L V8", 
        mileage:110, 
        price:3650, 
        zip:"75201", 
        yard:"Dallas, TX", 
        img:"./assets/images/engine/5.0 L Ti-VCT V8.jpg",
        shortDescription:`<li class="list-group-item">Legendary V8 power with classic sound</li>
                      <li class="list-group-item">~395 hp / ~400 lb-ft torque</li>
                      <li class="list-group-item">Excellent for hauling, heavy-duty jobs, and upgrades</li>
                      <li class="list-group-item">Fits 2015 – 2020 F-150 5.0L V8 models</li>
                      `,
        productDescription:`<p><strong>Description:</strong></p>  The legendary 5.0L “Coyote” V8 is a favorite among truck enthusiasts for its raw power, classic V8 sound, and proven durability. Perfect for heavy-duty work, performance builds, or those who love traditional V8 muscle, this engine is both powerful and reliable.
        <p><strong>Specifications:</strong></p>
        <p>Engine Type: Naturally Aspirated V8<br>
        Displacement: 5.0L<br>
        Horsepower: ~395 hp<br>
        Torque: ~400 lb-ft<br>
        Aluminum Block with Forged Internals</p>
        <strong>Why Choose This Engine:</strong>
        <p>Classic V8 power and sound<br>
        Excellent for towing and hauling<br>
        Highly durable and performance-friendly</p>
        <p><strong>Compatibility:</strong></p>
        Fits Ford F-150 models from 2015 – 2020 with 5.0L V8 engines.</p>`
      },
      {
        id:"ENG-2015-30V8-DAL", 
        year:2015,
        engine:"3.0L V8", 
        mileage:110, 
        price:3650, 
        zip:"71520", 
        yard:"Dallas, TX", 
        img:"./assets/images/engine/3.0 L PowerStroke V6 Turbo Diesel-2.jpg",
        shortDescription:`<li class="list-group-item">Turbo-diesel torque & superior fuel economy</li>
                          <li class="list-group-item">~250 hp / ~440 lb-ft torque</li>
                          <li class="list-group-item">Ideal for towing, long-distance, and commercial use</li>
                          <li class="list-group-item">Fits 2018 – 2020 F-150 3.0L Diesel models</li>`,
        productDescription:`<p><strong>Description:</strong></p>  The 3.0L Power Stroke Turbo Diesel offers exceptional fuel economy and towing torque, making it the ideal choice for long-distance hauling or heavy-duty commercial use. Known for its longevity and low-RPM power, it’s a favorite among diesel enthusiasts.
        <p><strong>Specifications:</strong></p>
        <p>Engine Type: Turbocharged Diesel V6<br>
        Displacement: 3.0L<br>
        Horsepower: ~250 hp<br>
        Torque: ~440 lb-ft<br>
        Fuel System: Common-Rail Direct Injection</p>
        <strong>Why Choose This Engine:</strong>
        <p>Superior torque and fuel efficiency<br>
        Long-life design for high-mileage trucks<br>
        Perfect for towing and commercial use</p>
        <p><strong>Compatibility:</strong></p>
        Fits Ford F-150 models 2018 – 2020 with 3.0L Power Stroke Diesel engines.</p>`
      },
      {
        id:"ENG-2017-33V6-CHI", 
        year:2017,
        engine:"3.3L V6", 
        mileage:95, 
        price:3150, 
        zip:"60604", 
        yard:"Chicago, IL", 
        img:"./assets/images/engine/3.3 L Ti-VCT V6-2.jpg",
        shortDescription:`<li class="list-group-item">Reliable, naturally aspirated base engine</li>
        <li class="list-group-item">~290 hp / ~265 lb-ft torque</li>
        <li class="list-group-item">Low-maintenance, ideal for fleet & utility trucks</li>
        <li class="list-group-item">Fits 2018 – 2020 F-150 3.3L V6 models</li>`,
        productDescription:`<p><strong>Description:</strong></p> The 3.3L Ti-VCT V6 is Ford’s base engine for later F-150 models, delivering reliable performance and low maintenance costs. With dual independent variable cam timing (Ti-VCT) and a naturally aspirated design, it’s built for long-lasting durability and everyday utility.
        <p><strong>Specifications:</strong></p>
        <p>Engine Type: Naturally Aspirated V6<br>
        Displacement: 3.3L<br>
        Horsepower: ~290 hp<br>
        Torque: ~265 lb-ft<br>
        Fuel System: Direct + Port Fuel Injection</p>
        <strong>Why Choose This Engine:</strong>
        <p>Reliable and affordable replacement choice<br>
        Great for work trucks and general-purpose use<br>
        Simple, robust, and low-maintenance design</p>
        <p><strong>Compatibility:</strong></p>
        Fits Ford F-150 models 2018 – 2020 with 3.3L Ti-VCT V6 engines.</p>`
      }
    ];

    // ===== Blogs (dynamic) =====
    const BLOGS = [
      { 
        id:1, 
        title:"Choosing the Right Used Ford F-150 Engine for Your Needs",
        cover:"./assets/images/blogs/1.jpg", 
        excerpt:"Selecting the right used engine for your Ford F-150 (2015–2020) is crucial to ensure performance and compatibility. This blog will walk you through a systematic process for making an informed decision and avoiding costly mistakes.", 
        content:`<h4>Understanding Engine Codes and VIN Decoding</h4>
                  <p>Each Ford F-150 engine is identified by a unique engine code, and the 8th digit of the Vehicle Identification Number (VIN) reveals the specific type of engine your truck requires. Common codes include 2.7L EcoBoost, 3.5L EcoBoost, 5.0L V8, and 3.3L V6. Start by locating your truck’s VIN and using it to cross-match the donor engine for seamless fitment.</p>
                  <h4>Compatibility Checklist</h4>
                  <p>Before purchasing, ensure year-to-year compatibility and match sensor plug types and mounting points. Engines for 2015–2020 mostly interchange, but always double-check wiring harnesses and transmission pairings. Ask for compression or leakdown test results from the seller and verify warranty terms for additional peace of mind.</p>
                  <h4>Accessory Transfer and Planning</h4>
                  <p>Used engines rarely come with every accessory, so plan for new gaskets, fluids, and the transfer of fuel rails, sensors, or manifolds. Confirm the warranty and return policy from the salvage yard. Finally, trust Spairo LLC to verify inventory and help select the best match by ZIP for shipping efficiency</p>` 
      },
      { 
        id:2, 
        title:"Mileage vs. Price: Finding the Best Value in Used Truck Engines",
        cover:"./assets/images/blogs/2.jpg", 
        excerpt:"The mileage on a used truck engine is one of the most important factors affecting price and value. Here’s how to strike the right balance for your Ford F-150 engine purchase.", 
        content:`<h4>How Mileage Influences Cost and Lifespan</h4>
        <p>Engines with lower mileage typically cost more, but this does not always mean higher quality or longer life. Engines in the 60,000–100,000 mile range often hit the sweet spot between affordability and reliability. Evaluate the engine’s maintenance records and ask about prior service, oil changes, ad any major repairs.</p>
        <h4>Warranty and Yard Reputation</h4>
        <p>Regardless of mileage, warranty terms matter greatly. Salvage yards that offer guarantees provide peace of mind, and established yards with positive reputations often have stringent quality checks. Asking for available warranty coverage—even on higher-mileage engines—can protect your investment.</p>
        <h4>Freight Costs and Yard Proximity</h4>
        <p>Don’t overlook shipping expenses. Closer yards mean lower freight costs and reduced transit times. Spairo LLC’s service matches you to the nearest available yard based on your ZIP code, optimizing cost and delivery speed for your F-150 engine purchase.</p>` 
      },
      { 
        id:3, 
        title:"What to Expect with Shipping and Delivery for Used Engines", 
        cover:"./assets/images/blogs/3.jpg", 
        excerpt:"Logistics are often the biggest source of anxiety for used engine buyers. Here’s what you need to know about shipping timelines, fees, and preparations when sourcing through Spairo LLC.", 
        content:`<h4>Typical Shipping Timelines and Procedures</h4>
        <p>Most orders ship within 2–5 business days after the salvage yard receives payment. Buyers receive tracking information and regular delivery updates, allowing you to plan for installation without guesswork. Double-check the estimated ship date with the seller and clarify whether weekend delivery is available.</p>
        <h4>Liftgate Fees and Delivery Requirements</h4>
        <p>Large engine shipments may require a liftgate truck at delivery—especially for residential or shop locations without loading docks. It’s wise to confirm with the yard if liftgate service is needed, and factor in any associated fees at the time of purchase. Be present for delivery, as the Bill of Lading (BOL) must be inspected immediately.</p>
        <h4>Inspection on Arrival and After-Sales Service</h4>
        <p>Upon crate arrival, inspect for visible damage and document issues on the BOL before signing. Salvage yards will typically address any shipment issues promptly. With Spairo LLC, you benefit from coordinated after-sales support and access to responsive customer service should any problems arise.</p>
` 
      }
    ];


    document.addEventListener('DOMContentLoaded',()=>{
      const qEngine = document.getElementById('qe-engine');
      const fEngine = document.getElementById('f-engine');
      let optionEngine="<option value=''>All</option>";
      PRODUCTS.map((e)=>{
        optionEngine+=`<option>${e.engine}</option>`;
      })
      console.log(optionEngine)
      qEngine.innerHTML=optionEngine;
      fEngine.innerHTML=optionEngine;
    })

    

    // Proximity scorer (rough)
    function distanceScore(a,b){ if(!a||!b) return 0; let s=0; for(let i=0;i<Math.min(a.length,b.length);i++){ if(a[i]===b[i]) s++; else break; } return s; }

    function renderProducts(list) {
      const grid = document.getElementById('product-grid');
      grid.innerHTML = '';

      list.forEach(p => {
        const el = document.createElement('article');
        el.className = 'card';
        el.innerHTML = `
        <h4 class='m-0 p-0'>${p.engine}</h4>
          <div class="body m-0">
            ${p.shortDescription 
              ? `<div class="short-desc">
                  <ul class='short-desc list-group'>
                    <li class='list-group-item m-0 p-1'>
                      <img 
                        src="${p.img}" 
                        alt="${p.engine} engine for ${p.year} Ford F-150 from ${p.yard}" 
                        loading="lazy"
                        class='myImg'
                      />
                    </li>
                    <li class='list-group-item'>
                      <div class="card-header m-0 p-0 bb">
                        <span class="bg-primary badge" aria-label="Model year">${p.year}</span>
                        <span class="price text-black" aria-label="Price">$${p.price.toLocaleString()}</span>
                      </div>
                    </li>
                    <li class='list-group-item p-2'>  
                      <span><b>Mileage: </b>${p.mileage}kmph</span>
                      <br>
                      <b>Yard:</b> <span class="muted">${p.yard}</span><span> | <b>ZIP:</b> ${p.zip}</span>
                    </li>

                    ${p.shortDescription}
                </div>` 
              : `<p class="muted">No short description available</p>`}

            

            <div class="card-actions">
              <a class="btn btn-outline-success" 
                onclick="openEnquiry('${p.id}'); return false;">
                <i class="fa fa-question"></i> Enquire
              </a>
              <a class="btn btn-outline-danger" 
                onclick="openDetails('${p.id}',\`${p.zip}\`); return false;">
                <i class="fa fa-eye"></i> Details
              </a>
            </div>
          </div>
        `;
        grid.appendChild(el);
      });

      document.getElementById('no-results').style.display = list.length ? 'none' : 'block';
    }

    function applyFilters(){
      const q = document.getElementById('f-search').value.toLowerCase();
      const year = document.getElementById('f-year').value;
      const engine = document.getElementById('f-engine').value;
      const maxMileage = +document.getElementById('f-mileage').value;
      const maxPrice = +document.getElementById('f-price').value;
      const zip = document.getElementById('f-zip').value;
      const sort = document.getElementById('f-sort').value;

      let list = PRODUCTS.filter(p=>{
        const matchQ = !q || (`${p.year} ${p.engine} ${p.yard}`.toLowerCase().includes(q));
        const matchYear = !year || p.year==year;
        const matchEngine = !engine || p.engine===engine;
        const matchMileage = p.mileage <= maxMileage;
        const matchPrice = p.price <= maxPrice;
        return matchQ && matchYear && matchEngine && matchMileage && matchPrice;
      });

      if(sort==='priceAsc') list.sort((a,b)=>a.price-b.price);
      else if(sort==='priceDesc') list.sort((a,b)=>b.price-a.price);
      else if(sort==='mileageAsc') list.sort((a,b)=>a.mileage-b.mileage);
      else if(sort==='yearDesc') list.sort((a,b)=>b.year-a.year);
      else if(zip){ list.sort((a,b)=>distanceScore(zip,b.zip)-distanceScore(zip,a.zip)); }

      renderProducts(list);
      buildProductSchema(list);
    }

    // Product modal
    const modal = document.getElementById('product-modal');
    const pmImg = document.getElementById('pm-img');
    const pmSpecs = document.getElementById('pm-specs');
    const pmEnquire = document.getElementById('pm-enquire');
    const productTitle = document.getElementById('product-title');
    const productDescription = document.getElementById('product-description');

    function openDetails(productId) {
    
      const p = PRODUCTS.find(x => x.id === productId);
      if (!p) return;

      // Update modal content
      productTitle.textContent = `${p.year} Ford F-150 — ${p.engine}`;
      pmImg.src = p.img;
      pmImg.alt = `${p.engine} for ${p.year} Ford F-150`;
      productDescription.innerHTML=p.productDescription;
      // Build product specs
      pmSpecs.innerHTML = '';
      const fields = [
        ['Product ID', p.id],
        ['Engine', p.engine],
        ['Year', p.year],
        ['Mileage', `${p.mileage}k mi`],
        ['Price', `$${p.price.toLocaleString()}`],
        ['Yard', p.yard],
        ['ZIP', p.zip],
      ];

      fields.forEach(([k, v]) => {
        const s = document.createElement('div');
        s.className = 'spec';
        s.innerHTML = `
          <div class="spec-key">${k}</div>
          <div class="spec-value">${v}</div>
        `;
        pmSpecs.appendChild(s);
        console.log(s);
        
      });

      // Set up enquiry button
      pmEnquire.onclick = function (e) {
        e.preventDefault();
        openEnquiry(p.id);
      };

      // Show modal
      modal.classList.add('show');
      modal.removeAttribute('aria-hidden');

      // Focus on close button
      setTimeout(() => {
        modal.querySelector('.modal-close').focus();
      }, 0);
    }

    function closeDetails() {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }

    // Close modal when clicking outside
    modal.addEventListener('click', e => {
      if (e.target === modal) closeDetails();
    });

    // Close modal with ESC key
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('show')) closeDetails();
    });


    // Enquiry modal
    const enquiry = document.getElementById('enquiry-modal');
    const eProduct = document.getElementById('e-product');
    const eTitle = document.getElementById('enquiry-title');

    function openEnquiry(productId){
      const p = PRODUCTS.find(x=>x.id===productId);
      if(p){
        eProduct.value = p.id;
        eTitle.textContent = `Raise Enquiry — ${p.year} F-150 ${p.engine}`;
        const msg = document.getElementById('e-msg');
        msg.value = `Please confirm stock, price and ETA for ${p.year} Ford F-150 ${p.engine} (${p.mileage}k mi), Product ID ${p.id}. Ship to ZIP ____.`;
      }
      enquiry.classList.add('show'); enquiry.removeAttribute('aria-hidden');
      setTimeout(()=>{ document.getElementById('e-name').focus(); },0);
    }
    function closeEnquiry(){ enquiry.classList.remove('show'); enquiry.setAttribute('aria-hidden','true'); }
    enquiry.addEventListener('click', (e)=>{ if(e.target===enquiry) closeEnquiry(); });
    window.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && enquiry.classList.contains('show')) closeEnquiry(); });

    function submitEnquiry(e){
      e.preventDefault();
      const name=document.getElementById('e-name').value;
      const email=document.getElementById('e-email').value;
      const phone=document.getElementById('e-phone').value;
      const zip=document.getElementById('e-zip').value;
      const msg=document.getElementById('e-msg').value;
      const product=eProduct.value;
      const subject = encodeURIComponent(`Enquiry ${product} — Spairo LLC`);
      const body = encodeURIComponent(`Product: ${product}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nZIP: ${zip}\n\nMessage:\n${msg}`);
      window.location.href = `mailto:care@boltontrade.com?subject=${subject}&body=${body}`;
      return false;
    }


    const blogModal = document.getElementById('blog-modal');
    const blogTitle = document.getElementById('blog-title');
    const blogCover = document.getElementById('blog-cover');
    const blogContent = document.getElementById('blog-content');

    let blogSwiper; // store swiper instance


    function renderBlogs() {
      let num=0;
      const grid = document.getElementById('blog-grid');
      grid.innerHTML = '';
      BLOGS.forEach(b => {
        const el = document.createElement('div');
        el.className = 'swiper-slide';
        el.innerHTML = `<article class="card post">
            <div class="body blogPost">
              <h3 class="post-title">${b.title}</h3>
              <img src="${b.cover}" alt="${b.title}" loading="lazy"/>
              <p class="muted">${b.excerpt}</p>
              <a class="btn btn-outline-primary" href="#" onclick="openPost(${b.id});return false;"><i class='fa fa-eye'></i>View Blog</a>
            </div>
          </article>`;
        grid.appendChild(el);
      });

      // Destroy previous swiper instance if exists
      if(blogSwiper) blogSwiper.destroy(true, true);

      // Initialize Swiper after slides are in DOM
      blogSwiper = new Swiper('.blogSwiper', {
        loop: true,
        speed:700,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
        autoplay: {
          delay:3000,
          disableOnInteraction: false,
        },
      });
    }

    function openPost(id) {
      const blog = BLOGS.find(b => b.id === id);
      if (!blog) return;
      blogTitle.textContent = blog.title;
      blogCover.src = blog.cover;
      blogCover.alt = blog.title;
      blogContent.innerHTML = blog.content;
      blogModal.classList.add('show');
      blogModal.removeAttribute('aria-hidden');
    }

    function closePost() {
      blogModal.classList.remove('show');
      blogModal.setAttribute('aria-hidden', 'true');
    }

    // Close modal on click outside or ESC
    blogModal.addEventListener('click', e => { if (e.target === blogModal) closePost(); });
    window.addEventListener('keydown', e => { if (e.key === 'Escape' && blogModal.classList.contains('show')) closePost(); });

    // Render blogs on DOM ready
    document.addEventListener('DOMContentLoaded', renderBlogs);


    // Contact (mailto)
    function submitContact(e){
      e.preventDefault();
      const name=document.getElementById('c-name').value;
      const email=document.getElementById('c-email').value;
      const phone=document.getElementById('c-phone').value;
      const zip=document.getElementById('c-zip').value;
      const msg=document.getElementById('c-msg').value;
      const subject = encodeURIComponent('New Enquiry — Spairo LLC');
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nZIP: ${zip}\n\nMessage:\n${msg}`);
      window.location.href = `mailto:care@boltontrade.com?subject=${subject}&body=${body}`;
      return false;
    }

    // Scrollspy
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navLinks = Array.from(document.querySelectorAll('nav a'));
    const byId = id => navLinks.find(a => a.getAttribute('href') === `#${id}`);
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if(e.isIntersecting){ navLinks.forEach(a=>a.removeAttribute('aria-current')); const link = byId(e.target.id); if(link) link.setAttribute('aria-current','page'); } }); }, {rootMargin: '-40% 0px -55% 0px', threshold: 0});
    sections.forEach(s=>obs.observe(s));

    // JSON-LD (Products)
    function buildProductSchema(current=PRODUCTS){
      const itemList = {"@context":"https://schema.org","@type":"ItemList","itemListElement": current.map((p,i)=>({"@type":"ListItem","position": i+1,"item": {"@type":"Product","name": `${p.year} Ford F-150 ${p.engine} Used Engine`,"sku": p.id,"brand": {"@type":"Brand","name":"Ford"},"category": "Engines","itemCondition": "https://schema.org/UsedCondition","offers": {"@type":"Offer","price": p.price,"priceCurrency": "USD","availability": "https://schema.org/InStock","url": "https://www.boltontrade.com/#shop"}}}))};
      document.getElementById('ld-products').textContent = JSON.stringify(itemList);
    }

    // Init
    document.getElementById('year').textContent = new Date().getFullYear();
    (function init(){ renderProducts(PRODUCTS); renderBlogs(); applyFilters(); buildProductSchema(PRODUCTS); })();

     document.querySelectorAll('.accordion-header').forEach(btn => {
        btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
        });
    });
   

    document.addEventListener("DOMContentLoaded", () => {
      const stepsData = [
        { title: "Browse & Enquire", description: "View F‑150 engine listings with price & details. Tap Enquire.", icon: "1" },
        { title: "We Confirm with Yard", description: "We confirm nearest yard, stock & quote based on your ZIP.", icon: "2" },
        { title: "Payment Process", description: "You pay the amount to Spairo LLC", icon: "3" },
        { title: "Ship & Support", description: "Yard ships, we share tracking & delivery updates plus after‑sales support.", icon: "4" },
      ];

      const stepsContainer = document.getElementById('steps');
      // Create step elements with icons
      stepsData.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.classList.add('step');
        const marker = document.createElement('div');
        marker.classList.add('step-marker');
        const icon = document.createElement('i');
        icon.innerHTML = step.icon;
        marker.appendChild(icon);
        const title = document.createElement('div');
        title.classList.add('step-title');
        title.textContent = step.title;
        const desc = document.createElement('div');
        desc.classList.add('step-description');
        desc.textContent = step.description;
        stepDiv.appendChild(marker);
        stepDiv.appendChild(title);
        stepDiv.appendChild(desc);
        stepsContainer.appendChild(stepDiv);
      });
      const allSteps = document.querySelectorAll('.step');
      let currentStep = 0;

      function highlightNextStep() {
        // Mark previous step as completed
        if(currentStep > 0) {
          allSteps[currentStep - 1].classList.remove('active');
          allSteps[currentStep - 1].classList.add('completed');
        }
        // Reset all future steps
        allSteps.forEach((step, index) => {
          if(index > currentStep) {
            step.classList.remove('active', 'completed');
          }
        });
        // Highlight current step
        allSteps[currentStep].classList.add('active');
        // Move to next step
        currentStep = (currentStep + 1) % allSteps.length;
      }
      // Initial highlight
      highlightNextStep();
      // Change step every 1 second
      setInterval(highlightNextStep, 2000);

});

let lastScrollTop = 0;
const header = document.querySelector("header");
let disableHide = false; // Flag to disable hiding temporarily

// Listen for link clicks inside the header
header.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    disableHide = true;
    header.classList.remove("hide"); 
    setTimeout(() => disableHide = false, 1000); // 1 second is enough
  });
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if(window.innerWidth >= 700 && !disableHide){
    if (currentScroll <= 150) {
      header.classList.remove("hide");
      return;
    }
    if (currentScroll >= 2000) {
      // Always show after certain scroll
      header.classList.remove("hide");
    } else {
      // Hide header while scrolling down
      if (currentScroll > lastScrollTop) {
        header.classList.add("hide"); // Scrolling down
      } else {
        header.classList.remove("hide"); // Scrolling up
      }
    }
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});