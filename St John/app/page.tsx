import { Header } from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[700px] mt-[140px]">
        <img
          src="https://ext.same-assets.com/4058371479/1662290380.jpeg"
          alt="St. John School entrance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24">
          <h1 className="text-white text-8xl font-bold mb-10 tracking-wider drop-shadow-2xl">WELCOMING</h1>
          <div className="flex gap-4">
            <Link
              href="#"
              className="bg-primary text-white px-10 py-4 text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            >
              INQUIRE
            </Link>
            <Link
              href="#"
              className="bg-primary text-white px-10 py-4 text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            >
              APPLY
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-20 bg-[#a4a095]"></div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">SERVING GRADES PREK-8</h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed italic text-gray-700">
            St. John School is a welcoming Catholic community, committed to celebrating diversity
            and inspiring moral development, academic excellence, and the courage to act for the common good.
          </p>
        </div>
      </section>

      {/* We Believe Section 1 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">WE BELIEVE IN OUR MISSION.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="https://ext.same-assets.com/4058371479/1221456379.jpeg"
                alt="Students"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-6">
                St. John Catholic School is a strong, vibrant and inclusive community. We value Catholic
                moral teachings, embrace diversity and inspire academic excellence. We focus on educating
                the whole child, encouraging students to achieve, persevere, and serve others. We do this
                in partnership with parents/guardians and St. John the Evangelist Parish.
              </p>
              <Link
                href="#"
                className="inline-block bg-primary text-white px-8 py-3 font-semibold hover:bg-primary/90 transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* We Believe Section 2 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">WE BELIEVE IN INSPIRING MINDS & SHAPING FUTURES.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                St. John School is a fully accredited PreK-Grade 8 school with over 530 students. Our students are{" "}
                <span className="font-semibold italic">Active Learners</span> who exceed National and Archdiocesan
                academic standards and <span className="font-semibold italic">Christ-centered People</span> motivated
                to act for the common good. Our graduates represent St. John School at Catholic, private and public
                high schools across the city. Students who desire a Catholic high school experience are accepted at a
                99% success rate.
              </p>
              <Link
                href="#"
                className="inline-block bg-primary text-white px-8 py-3 font-semibold hover:bg-primary/90 transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/4058371479/3592489130.jpeg"
                alt="Graduation"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* We Believe Section 3 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">WE BELIEVE IN WELCOMING ALL FAMILIES.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="https://ext.same-assets.com/4058371479/5868175.jpeg"
                alt="Family"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-6">
                A defining characteristic of St. John School is our commitment to making Catholic education
                accessible to all who value it. Our <span className="font-semibold italic">Fair Share</span> program
                provides assistance to families with financial need and creates a socio-diverse student body. Not
                only a tuition model, Fair Share calls upon each community member to give through volunteerism,
                fundraising and active participation in school endeavors.
              </p>
              <Link
                href="#"
                className="inline-block bg-primary text-white px-8 py-3 font-semibold hover:bg-primary/90 transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">ACCEPTING NEW FAMILY APPLICATIONS FOR 26-27!</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Is your child ready to start their educational journey in a nurturing, faith-filled environment?
                St. John School is now accepting new family applications for the 2026-27 academic year! Give your
                child the gift of a St. John education. Apply today and become part of a vibrant community where
                students learn, grow, and thrive.
              </p>
              <Link
                href="#"
                className="inline-block bg-primary text-white px-8 py-3 font-semibold hover:bg-primary/90 transition-colors"
              >
                APPLY NOW
              </Link>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/4058371479/2518241911.jpeg"
                alt="Students"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">ST. JOHN AT A GLANCE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
              <div className="text-sm">Electives, Clubs & Activities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25%</div>
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
              <div className="text-sm">Students of Color</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">75%</div>
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
              <div className="text-sm">Faculty with Masters Degrees</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">530</div>
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
              <div className="text-sm">Average Enrollment</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">12:1</div>
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
              <div className="text-sm">Student-Teacher Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">13%</div>
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
              <div className="text-sm">Teachers of Color</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99%</div>
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
              <div className="text-sm">Catholic High Schools Acceptance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">26</div>
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
              <div className="text-sm">Average Class Size</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">LATEST NEWS</h2>
            <Link
              href="#"
              className="bg-[#a4a095] text-white px-6 py-2 text-sm hover:bg-[#8a8681] transition-colors"
            >
              see all news
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                image: "https://ext.same-assets.com/4058371479/1259167993.jpeg",
                date: "November 20, 2025",
                title: "Principal's Letter",
                excerpt: "We have a lot to be grateful for this week. To start, I want to share an important safety update regarding Joseph Backus, the individual who made threats against members..."
              },
              {
                image: "https://ext.same-assets.com/4058371479/1056944437.jpeg",
                date: "November 20, 2025",
                title: "Dates to Note",
                category: "DATES TO NOTE"
              },
              {
                image: "https://ext.same-assets.com/4058371479/3242594909.jpeg",
                date: "November 20, 2025",
                title: "Parent Action Items",
                excerpt: "ATTEND ORDER READ"
              },
              {
                image: "https://ext.same-assets.com/4058371479/2382605381.png",
                date: "November 20, 2025",
                title: "Camp Soaring Eagle News",
                excerpt: "Thank you to everyone who made it to the PA meeting last week. We're so very thankful for your time! If you weren't able to attend the PA meeting, here are..."
              }
            ].map((news, i) => (
              <div key={i} className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-xs text-gray-600 mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                  {news.excerpt && <p className="text-sm text-gray-700 mb-4">{news.excerpt}</p>}
                  {news.category && <div className="text-xs text-gray-600 mb-4">POSTED IN: {news.category}</div>}
                  <Link
                    href="#"
                    className="inline-block bg-[#a4a095] text-white px-6 py-2 text-sm hover:bg-[#8a8681] transition-colors"
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media and Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Social Media Feed */}
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-8">LATEST FROM SOCIAL MEDIA</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    text: "Flashback Friday! Guess who these two St. John teachers are? One of them is a veteran educator who...",
                    image: "https://ext.same-assets.com/4058371479/2002621968.jpeg"
                  },
                  {
                    text: "NewsViews for 11/20/2025 - Find out what's happening at St. John School!",
                    image: "https://ext.same-assets.com/4058371479/1462464190.jpeg"
                  }
                ].map((post, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-full"></div>
                      <div>
                        <div className="font-semibold text-sm">St. John Catholic School</div>
                        <div className="text-xs text-gray-600">4 days ago</div>
                      </div>
                    </div>
                    <p className="text-sm mb-4">{post.text}</p>
                    <img src={post.image} alt="Social post" className="w-full rounded" />
                    <div className="flex gap-4 mt-4 text-xs text-gray-600">
                      <Link href="#" className="hover:text-primary">View on Facebook</Link>
                      <Link href="#" className="hover:text-primary">Share</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="text-4xl font-bold mb-8">UPCOMING EVENTS</h2>
              <Link
                href="#"
                className="block w-full bg-primary text-white text-center px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
              >
                VIEW CALENDAR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Logos */}
      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-16">
            <img src="https://ext.same-assets.com/4058371479/2159489864.png" alt="WCEA Accredited" className="h-20 object-contain" />
            <img src="https://ext.same-assets.com/4058371479/4050464801.png" alt="NCEA" className="h-16 object-contain" />
            <img src="https://ext.same-assets.com/4058371479/3930143846.png" alt="Ashoka" className="h-20 object-contain" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            {/* School Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50 10 L30 35 L40 35 L40 60 L35 60 L50 85 L65 60 L60 60 L60 35 L70 35 Z"
                          fill="#c8a882" stroke="#c8a882" strokeWidth="2"/>
                    <rect x="45" y="45" width="10" height="15" fill="#331555"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-sm">ST. JOHN CATHOLIC</div>
                  <div className="font-bold text-sm">SCHOOL</div>
                </div>
              </div>
              <p className="text-sm mb-2">120 N. 79th St.</p>
              <p className="text-sm mb-4">Seattle, WA 98103</p>
              <p className="text-sm">206-783-0337</p>
            </div>

            {/* Parish Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">ST. JOHN PARISH</h3>
              <p className="text-sm mb-2">106 N. 79th St.</p>
              <p className="text-sm mb-4">Seattle, WA 98103</p>
              <p className="text-sm">206-782-2810</p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-lg mb-4">SOCIAL MEDIA</h3>
              <div className="flex gap-3">
                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                  <span className="text-xl">f</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                  <span className="text-xl">▶</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                  <span className="text-xl">📷</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block hover:text-accent transition-colors">Employment</Link>
                <Link href="#" className="block hover:text-accent transition-colors">Staff Directory</Link>
                <Link href="#" className="block hover:text-accent transition-colors">Giving</Link>
                <Link href="#" className="block hover:text-accent transition-colors">Calendar</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm">
            <p>Copyright © 2025 St. John Catholic School All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

