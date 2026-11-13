(function () {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  const hardwareButtons = document.querySelectorAll('[data-match]');
  const result = document.querySelector('[data-match-result]');
  const planDetails = document.querySelectorAll('[data-plan]');
  const labels = {
    light: '推荐：轻量版 · 8GB 内存、无独显优先',
    balanced: '推荐：均衡版 · 16GB 内存，核显也能用',
    performance: '推荐：性能版 · 16GB 内存 + 8GB 显存',
    advanced: '高级模式：Qwen3.8 27B · NVIDIA 12GB+，建议 18–32GB'
  };
  if (hardwareButtons.length && result) {
    hardwareButtons.forEach(button => {
      button.addEventListener('click', () => {
        hardwareButtons.forEach(item => item.classList.remove('active'));
        button.classList.add('active');
        const match = button.dataset.match;
        result.textContent = labels[match] || '请选择配置。';
        planDetails.forEach(plan => plan.classList.toggle('recommended', plan.dataset.plan === match));
        const target = document.querySelector(`[data-plan="${match}"]`);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  const header = document.querySelector('[data-header]');
  if (header) {
    const onScroll = () => {
      document.body.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
