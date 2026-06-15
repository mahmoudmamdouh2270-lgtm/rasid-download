// تحسينات تقدّمية فقط (الموقع يعمل بدونها) — تُحمّل كموديول خارجي ليتوافق مع CSP الصارم.

// كشف الأقسام عند التمرير لحركة دخول واحدة منظّمة.
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12 },
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// حالة الهيدر مع التمرير.
const head = document.getElementById('head');
const onScroll = () => head && head.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });