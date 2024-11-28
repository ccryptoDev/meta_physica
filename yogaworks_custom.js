<script>
  {% comment %} $('.widget-product-carousel li.slick-slide .card').on('mouseover', '.card__inner', function () {
    console.log('hover on slide!');
    $(this).closest('.card').find('.quick-add').css({
      opacity: '1',
      visibility: 'visible'
    });
  });

  $('.widget-product-carousel').on('mouseout', '.card__inner', function () {
    $(this).closest('.card').find('.quick-add').css({
      opacity: '0',
      visibility: 'hidden'
    });
  });  {% endcomment %}

  {% comment %} let hideTimeout;

  // Handle mouseover for .card__inner
  $('.widget-product-carousel').on('mouseover', '.card__inner', function () {
    clearTimeout(hideTimeout); // Cancel any pending hide action
    $(this).closest('.card').find('.quick-add').css({
      opacity: '1',
      visibility: 'visible'
    });
  });

  // Handle mouseover for .quick-add (to prevent hiding when transitioning)
  $('.widget-product-carousel').on('mouseover', '.quick-add', function () {
    clearTimeout(hideTimeout); // Prevent flickering
    $(this).css({
      opacity: '1',
      visibility: 'visible'
    });
  });

  // Handle mouseout for .card__inner
  $('.widget-product-carousel').on('mouseout', '.card__inner', function () {
    const quickAdd = $(this).closest('.card').find('.quick-add');
    // Delay hiding to prevent flickering
    hideTimeout = setTimeout(() => {
      quickAdd.css({
        opacity: '0',
        visibility: 'hidden'
      });
    }, 1); // Adjust delay as needed
  });

  // Handle mouseout for .quick-add
  $('.widget-product-carousel').on('mouseout', '.quick-add', function () {
    const quickAdd = $(this);
    // Delay hiding to ensure smooth interaction
    hideTimeout = setTimeout(() => {
      quickAdd.css({
        opacity: '0',
        visibility: 'hidden'
      });
    }, 1); // Adjust delay as needed
  }); {% endcomment %}
</script>