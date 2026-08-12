<template>
  <section id="wishes" class="py-16 md:py-24 px-4 relative z-20">
    <div class="max-w-5xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold text-xs uppercase tracking-widest text-gold-300 font-bold mb-3 border border-gold-400/30">
          <BookOpenCheck class="w-3.5 h-3.5 text-gold-400" />
          Guestbook &amp; Duas
        </div>
        <h2 class="font-cinzel text-3xl md:text-5xl font-bold text-gold-gradient tracking-wide mb-3">
          Prayers &amp; Wishes Wall
        </h2>
        <p class="font-sans text-sm md:text-base text-cream-200/90 max-w-md mx-auto">
          Leave a blessed prayer or warm congratulatory wish for Rasniya &amp; Afsad.
        </p>
      </div>

      <!-- Add New Wish Form -->
      <div class="glass-card-gold p-6 rounded-3xl border border-gold-400/40 mb-10 max-w-2xl mx-auto shadow-xl">
        <h3 class="font-cinzel text-base font-bold text-gold-300 mb-3 flex items-center gap-2">
          <MessageSquarePlus class="w-4 h-4 text-gold-400" />
          Send Your Dua / Blessing
        </h3>
        <form @submit.prevent="addWish" class="space-y-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              v-model="newSender"
              type="text"
              required
              placeholder="Your Name"
              class="px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-gold-400/30 text-cream-100 placeholder-cream-300/40 text-xs md:text-sm focus:outline-none focus:border-gold-400"
            />
            <input
              v-model="newRelation"
              type="text"
              placeholder="e.g. Cousin / Friend / Well-wisher"
              class="px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-gold-400/30 text-cream-100 placeholder-cream-300/40 text-xs md:text-sm focus:outline-none focus:border-gold-400"
            />
          </div>
          <textarea
            v-model="newMessage"
            rows="2"
            required
            placeholder="Write your Dua (e.g. May Allah grant you both endless joy, peace, and righteous offspring...)"
            class="w-full px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-gold-400/30 text-cream-100 placeholder-cream-300/40 text-xs md:text-sm focus:outline-none focus:border-gold-400"
          ></textarea>

          <button
            type="submit"
            class="px-6 py-2.5 rounded-full btn-gold font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 ml-auto shadow-md"
          >
            <Send class="w-3.5 h-3.5" />
            Post Prayer
          </button>
        </form>
      </div>

      <!-- Wishes Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(wish, index) in wishes"
          :key="index"
          class="glass-card-gold p-6 rounded-2xl border border-gold-400/30 flex flex-col justify-between hover:border-gold-400/60 transition-all shadow-lg relative group"
        >
          <div>
            <div class="flex items-center justify-between mb-3 border-b border-gold-400/20 pb-2">
              <div>
                <h4 class="font-cinzel text-sm font-bold text-gold-200">
                  {{ wish.sender }}
                </h4>
                <span class="text-[10px] text-gold-400/80 font-medium">
                  {{ wish.relation || 'Well-wisher' }}
                </span>
              </div>
              <Quote class="w-5 h-5 text-gold-400/30 group-hover:text-gold-400/60 transition-colors" />
            </div>

            <p class="font-sans text-xs md:text-sm text-cream-100 italic leading-relaxed">
              "{{ wish.message }}"
            </p>
          </div>

          <div class="mt-4 pt-2 flex items-center justify-between text-[11px] text-cream-300/70">
            <span class="font-amiri text-gold-300">بارك الله لكما</span>
            <span>{{ wish.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { BookOpenCheck, MessageSquarePlus, Send, Quote } from 'lucide-vue-next'

const newSender = ref('')
const newRelation = ref('')
const newMessage = ref('')

const defaultWishes = [
  {
    sender: 'Uncle Faizal & Family',
    relation: 'Family',
    message: 'Barakallahu lakuma wa baraka alaykuma wa jamaa baynakuma fee khayr! Dearest Rasniya & Afsad, may Allah shower your marriage with eternal harmony.',
    time: 'Aug 10, 2026'
  },
  {
    sender: 'Amina & Haris',
    relation: 'Close Friends',
    message: 'So incredibly happy for both of you! Wishing Rasniya and Afsad a lifetime of laughter, tranquility, and strong faith together.',
    time: 'Aug 11, 2026'
  },
  {
    sender: 'Zayd & Samar',
    relation: 'Well-wishers',
    message: 'May your union be a source of peace in this world and a path to Jannah. Mubarak on your Nikah!',
    time: 'Aug 12, 2026'
  }
]

const wishes = ref([...defaultWishes])

const addWish = () => {
  if (!newSender.value || !newMessage.value) return

  const item = {
    sender: newSender.value,
    relation: newRelation.value || 'Well-wisher',
    message: newMessage.value,
    time: 'Just now'
  }

  wishes.value.unshift(item)
  localStorage.setItem('afsad_rasniya_wishes', JSON.stringify(wishes.value))

  newSender.value = ''
  newRelation.value = ''
  newMessage.value = ''
}

onMounted(() => {
  const saved = localStorage.getItem('afsad_rasniya_wishes')
  if (saved) {
    try {
      wishes.value = JSON.parse(saved)
    } catch (e) {
      console.error(e)
    }
  }
})
</script>
