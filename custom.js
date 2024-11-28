<script>

document.addEventListener("DOMContentLoaded", function () {
  /*
  * Redirect to Home when clicking on Splash
  */
  if (document.querySelector('body#collection-67239a1574aed97b3c95e8c9')) {
    // var splashPage = document.querySelector('[data-section-id="67239a25a2017c0662719dab"]');
    var splashPage = document.querySelector('body#collection-67239a1574aed97b3c95e8c9');
    if (splashPage) {
      console.log('splash page!!!')
      splashPage.addEventListener("click", function(event) {
        event.preventDefault(); 
        console.log('Image clicked! Redirecting to home...');
        window.location.href = "/home";
      });
    } 
  }
  
  /* 
  * Adding a class for blog page
  */
  if (document.querySelector('[data-section-id="6724372ebe9e195b54478118"]')) {
    const blogSection = document.querySelector('[data-section-id="6724372ebe9e195b54478118"]');
      if (blogSection) {
          blogSection.classList.add("blog-section");
      }
  }
  
  /* 
  * Add the dividers above drawer section 
  */
  // Massage page
  if (document.querySelector('[data-section-id="673aac9f9db00c5a997c6175"]')) {
    const therapistDivider = document.querySelector('[data-section-id="673aac9f9db00c5a997c6175"]');
    therapistDivider.classList.add("divider");
  }
  if (document.querySelector('[data-section-id="673ab4ba18cc943de2c47225"]')) {
    const massageRoomDivider = document.querySelector('[data-section-id="673ab4ba18cc943de2c47225"]');
    massageRoomDivider.classList.add("divider");
  }
  
  // bodywork page
  // Process
  if (document.querySelector('[data-section-id="6740fe629892ba5758e8e095"]')) {
    const processDivider = document.querySelector('[data-section-id="6740fe629892ba5758e8e095"]');
    processDivider.classList.add("divider");
  }
  // Therapist
  if (document.querySelector('[data-section-id="6740feedf6146a12dfff05ed"]')) {
    const divider = document.querySelector('[data-section-id="6740feedf6146a12dfff05ed"]');
    divider.classList.add("divider");
  }
  
  // Sauna page
  // What is infrafred
  if (document.querySelector('[data-section-id="674103f28803a117d33b7f88"]')) {
    const divider = document.querySelector('[data-section-id="674103f28803a117d33b7f88"]');
    divider.classList.add("divider");
  }
  // see our saunas 
  if (document.querySelector('[data-section-id="6741041bc4ae3272f6baea54"]')) {
    const divider = document.querySelector('[data-section-id="6741041bc4ae3272f6baea54"]');
    divider.classList.add("divider");
  }
  // memberships
  if (document.querySelector('[data-section-id="6741033e71646b00a43275f5"]')) {
    const divider = document.querySelector('[data-section-id="6741033e71646b00a43275f5"]');
    divider.classList.add("divider");
  }
  // packages
  if (document.querySelector('[data-section-id="674103721435b762a1f1bc37"]')) {
    const divider = document.querySelector('[data-section-id="674103721435b762a1f1bc37"]');
    divider.classList.add("divider");
  }
  
  // FAQ page
  // cancellation policy
  if (document.querySelector('[data-section-id="674113a486ae13443e9c28b9"]')) {
    const divider = document.querySelector('[data-section-id="674113a486ae13443e9c28b9"]');
    divider.classList.add("divider");
  }
  // Are masks mandatory?
  if (document.querySelector('[data-section-id="674113ee8803a117d33fe775"]')) {
    const divider = document.querySelector('[data-section-id="674113ee8803a117d33fe775"]');
    divider.classList.add("divider");
  }
  // what should I expect during my first massage
  if (document.querySelector('[data-section-id="6741159f3d7bd26b6bcd68e1"]')) {
    const divider = document.querySelector('[data-section-id="6741159f3d7bd26b6bcd68e1"]');
    divider.classList.add("divider");
  }
  // Do I have to be compoletely undressed?
  if (document.querySelector('[data-section-id="674115b4f6146a12df05c3bc"]')) {
    const divider = document.querySelector('[data-section-id="674115b4f6146a12df05c3bc"]');
    divider.classList.add("divider");
  }
  // How long will a massage treatment last?
  if (document.querySelector('[data-section-id="6741142dc4ae3272f6bf8f4f"]')) {
    const divider = document.querySelector('[data-section-id="6741142dc4ae3272f6bf8f4f"]');
    divider.classList.add("divider");
  }
  // will the massage hurt?
  if (document.querySelector('[data-section-id="67411458b9c027065d828bec"]')) {
    const divider = document.querySelector('[data-section-id="67411458b9c027065d828bec"]');
    divider.classList.add("divider");
  }
  // How often should I get a massage?
  if (document.querySelector('[data-section-id="67411643a494452e87b8c617"]')) {
    const divider = document.querySelector('[data-section-id="67411643a494452e87b8c617"]');
    divider.classList.add("divider");
  }
  // How will I feel after my massage treatment
  if (document.querySelector('[data-section-id="67411489585d70486117088b"]')) {
    const divider = document.querySelector('[data-section-id="67411489585d70486117088b"]');
    divider.classList.add("divider");
  }
  // when should I not get a mssage
  if (document.querySelector('[data-section-id="674114a9b9c027065d829989"]')) {
    const divider = document.querySelector('[data-section-id="674114a9b9c027065d829989"]');
    divider.classList.add("divider");
  }
  // Can minors get a massage?
  if (document.querySelector('[data-section-id="674114cec4309807d299fcbc"]')) {
    const divider = document.querySelector('[data-section-id="674114cec4309807d299fcbc"]');
    divider.classList.add("divider");
  }
  // insurance?
  if (document.querySelector('[data-section-id="6741150819edd11c5580aa34"]')) {
    const divider = document.querySelector('[data-section-id="6741150819edd11c5580aa34"]');
    divider.classList.add("divider");
  }
  // Lost and found?
  if (document.querySelector('[data-section-id="6741152354a15a4d73b07fa6"]')) {
    const divider = document.querySelector('[data-section-id="6741152354a15a4d73b07fa6"]');
    divider.classList.add("divider");
  }
  // empty line on bottom
  if (document.querySelector('[data-section-id="67411ff2c992c418a061b3b4"]')) {
    const divider = document.querySelector('[data-section-id="67411ff2c992c418a061b3b4"]');
    divider.classList.add("divider");
  }
  
  // First Timers
  // Massage
  if (document.querySelector('[data-section-id="67411de09ea5b531943a91b8"]')) {
    const divider = document.querySelector('[data-section-id="67411de09ea5b531943a91b8"]');
    divider.classList.add("divider");
  }
  // Bodywork
  if (document.querySelector('[data-section-id="67411df7a4c3c208266718f0"]')) {
    const divider = document.querySelector('[data-section-id="67411df7a4c3c208266718f0"]');
    divider.classList.add("divider");
  }
  // Sauna
  if (document.querySelector('[data-section-id="67411e0c03d30c1016f3906e"]')) {
    const divider = document.querySelector('[data-section-id="67411e0c03d30c1016f3906e"]');
    divider.classList.add("divider");
  }
  // empty line on bottom
  if (document.querySelector('[data-section-id="67411f45be0cee777ca6d249"]')) {
    const divider = document.querySelector('[data-section-id="67411f45be0cee777ca6d249"]');
    divider.classList.add("divider");
  }
  
  /* 
  * footer email newsletter (arrow symbol) 
  */
  document.querySelectorAll('.newsletter-form-button-label').forEach((label) => {
    const text = label.textContent.trim();
    label.innerHTML = `<span class="text-underline">${text}</span><span>→</span>`;
  });
  
  /* 
  * Drawer function
  */
  // Check if edit mode */
  const isEdit = document.querySelectorAll('section > .fluid-engine.is-editting');
  if (isEdit.length > 0) {
    console.log('Mode -----:', 'Edit mode');
    return;
  }
  
  console.log('Mode ------:', 'no Edit mode');
  const allSections = document.querySelectorAll('section[data-section-id]');
  const toggleSections = Array.from(allSections).filter(section => 
    section.querySelector('.section-title.toggle-title')
  );

  if (toggleSections) {
    toggleSections.forEach((toggleSection) => {
      const indexInAllSections = Array.from(allSections).indexOf(toggleSection);

      const contentSection = allSections[indexInAllSections + 1];

      if (!contentSection) return;

      toggleSection.classList.add('extendable-section');
      /* The first status of content section is a hidden status */
      contentSection.classList.add('extendable-section', 'hidden-area', 'hidden-content'); 
      
      const toggleButton = toggleSection.querySelector('button.toggle-button');
      if (!toggleButton) return; 

      const toggleText = toggleButton.querySelector('.toggle-text');
      const toggleArrow = toggleButton.querySelector('.custom-arrow');

      toggleText.textContent = 'MORE';

      toggleButton.addEventListener('click', function () {
        const isVisible = contentSection.classList.toggle('hidden-content');
        toggleText.textContent = isVisible ? 'MORE' : 'LESS';
        toggleArrow.style.transform = !isVisible ? "rotate(180deg)" : "rotate(0deg)";
      });
    });
  }
  
  /* 
  * Blog
  * Moving metadata into a title block in summary block
  */
  // For 3 image blocks
  if (document.querySelector('[data-section-id="6724372ebe9e195b54478118"]')) {
    const blogMetadataBlocks = document.querySelectorAll('[data-section-id="6724372ebe9e195b54478118"] .summary-content');

    blogMetadataBlocks.forEach((block) => {
        const titleElement = block.querySelector('.summary-title');
        const metadataElement = block.querySelector('.summary-metadata-container.summary-metadata-container--below-content');

        if (titleElement && metadataElement) {
            titleElement.appendChild(metadataElement);
        }
    });
  }
  // For blog list
  if (document.querySelector('[data-section-id="672437714b6da543427a1216"]')) {
    const blogMetadataBlocks = document.querySelectorAll('[data-section-id="672437714b6da543427a1216"] .summary-content');

    blogMetadataBlocks.forEach((block) => {
        const titleElement = block.querySelector('.summary-title');
        const metadataElement = block.querySelector('.summary-metadata-container.summary-metadata-container--below-content');

        if (titleElement && metadataElement) {
            titleElement.insertAdjacentElement('afterend', metadataElement);
        }
    });
  }
  
  /* 
  * mobile nav menu 
  */
  const mobileMenu = document.querySelector(".header-menu--folder-list .header-menu-nav-wrapper");
  if (mobileMenu) {
    const wrapper = document.querySelector('.header-menu-nav-wrapper');
    wrapper.style.height = `calc(100vh - 106px)`;
  	mobileMenu.innerHTML = `
	  <div class="mobile-nav-item nav-list--primary">
        <div class="container header-menu-nav-item header-menu-nav-item--collection header-menu-nav-item--active">
          <a href="/massage">
            <div class="header-menu-nav-item-content">
              <span class="text-underline">Massage</span>
              <span> → </span>
            </div>
          </a>
        </div>
        <div class="container header-menu-nav-item header-menu-nav-item--collection">
          <a href="/bodywork">
            <div class="header-menu-nav-item-content">
              <span class="text-underline">Bodywork</span>
              <span> → </span>
            </div>
          </a>
        </div>  
        <div class="container header-menu-nav-item header-menu-nav-item--collection">
          <a href="/sauna">
            <div class="header-menu-nav-item-content">
              <span class="text-underline">Sauna</span>
              <span> → </span>
            </div>
          </a>
        </div>
      </div>
      <div class="mobile-nav-item nav-list--secondary">
        <div class="container header-menu-nav-item header-menu-nav-item--collection">
          <a href="/about">
            <div class="header-menu-nav-item-content">
              <span class="text-underline">About</span>
              <span> → </span>
            </div>
          </a>
        </div>
        <div class="container header-menu-nav-item header-menu-nav-item--collection">
          <a href="/blog">
            <div class="header-menu-nav-item-content">
              <span class="text-underline">Blog</span>
              <span> → </span>
            </div>
          </a>
        </div>  
        <div class="container header-menu-nav-item header-menu-nav-item--collection">
          <a href="/frequently-asked-questions">
            <div class="header-menu-nav-item-content">
              <span class="text-underline">Faqs</span>
              <span> → </span>
            </div>
          </a>
        </div>
        <div class="container header-menu-nav-item header-menu-nav-item--collection">
          <a href="/first-timers">
            <div class="header-menu-nav-item-content">
              <span class="text-underline">First Timers</span>
              <span> → </span>
            </div>
          </a>
        </div>
      </div>
      <div class="mobile-nav-item nav-list--third">
        <div class="container header-menu-nav-item header-menu-nav-item--collection">
          <a href="/policies">
            <div class="header-menu-nav-item-content">
              <span class="text-underline">Cancellation Policy</span>
              <span> → </span>
            </div>
          </a>
        </div>
        <div class="container header-menu-nav-item header-menu-nav-item--collection">
          <a href="/gift-certificates">
            <div class="header-menu-nav-item-content">
              <span class="text-underline">Gift Certificates</span>
              <span> → </span>
            </div>
          </a>
        </div>  
        <div class="container header-menu-nav-item header-menu-nav-item--collection">
          <a href="/careers">
            <div class="header-menu-nav-item-content">
              <span class="text-underline">Careers</span>
              <span> → </span>
            </div>
          </a>
        </div>
      </div>
	`;
  }
});
    
</script>


