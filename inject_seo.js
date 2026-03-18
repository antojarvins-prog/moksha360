const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'app', 'blog');
const directories = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const titles = {
  'how-to-become-a-music-artist-in-bangalore': 'How to Become a Music Artist in Bangalore',
  'best-music-promotion-strategies-in-india': 'Best Music Promotion Strategies in India',
  'how-artist-management-works': 'How Artist Management Works',
  'top-music-events-in-bangalore-2026': 'Top Music Events in Bangalore 2026',
  'how-to-get-your-first-gig': 'How to Get Your First Gig',
  'ai-in-music-industry-explained': 'AI in the Music Industry Explained',
  'xr-concerts-future-of-music': 'XR Concerts: The Future of Music Experiences',
  'how-to-build-a-music-brand': 'How to Build a Music Brand',
  'indie-artist-growth-guide': 'Indie Artist Growth Guide',
  'music-marketing-checklist': 'Music Marketing Checklist',
  'how-to-get-spotify-streams': 'How to Get Spotify Streams',
  'best-recording-studios-in-bangalore': 'Best Recording Studios in Bangalore',
  'music-career-mistakes-to-avoid': 'Music Career Mistakes to Avoid',
  'how-to-get-signed-to-a-label': 'How to Get Signed to a Label',
  'event-management-guide-live-music': 'Event Management Guide for Live Music'
};

directories.forEach((dir, index) => {
    const filePath = path.join(blogDir, dir, 'page.tsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Swap Featured Snippet to Quick Answer
        content = content.replace('🔍 Featured Snippet', '⚡ Quick Answer');

        const midCta = `
               <div className="bg-[#13AFF0]/10 border-l-4 border-[#13AFF0] p-6 rounded-r-3xl my-10 backdrop-blur-md">
                  <p className="m-0 text-white font-medium text-lg">🚀 Want dedicated help growing your music career? <Link href="/artist-management" className="text-[#13AFF0] hover:underline transition-colors">Work with Moksha360</Link>.</p>
               </div>
        `;

        if (!content.includes('Want dedicated help')) {
            let sections = content.split('</section>');
            if (sections.length > 3) {
                sections[2] = sections[2] + midCta;
                content = sections.join('</section>');
            } else {
                content = content.replace('</section>', '</section>' + midCta);
            }
        }
        
        // Grab 3 other links to satisfy Topical Cluster Links requirement
        const link1 = directories[(index + 1) % directories.length];
        const link2 = directories[(index + 2) % directories.length];
        const link3 = directories[(index + 3) % directories.length];

        const endCta = `
             <section className="bg-[#3D7500]/10 p-10 rounded-[2rem] border border-[#3D7500]/20 mt-16 mb-12 backdrop-blur-2xl">
               <h2 className="text-3xl font-bold font-poppins text-white mb-6">Work With Moksha360</h2>
               <p className="leading-relaxed text-gray-300 mb-6">If you're serious about growing your music career in Bangalore, explore our professional infrastructure:</p>
               <ul className="space-y-4 mb-8">
                 <li><Link href="/artist-management" className="text-[#4ade80] hover:underline transition-colors flex items-center">→ Artist Management</Link></li>
                 <li><Link href="/music-promotion" className="text-[#4ade80] hover:underline transition-colors flex items-center">→ Music Promotion</Link></li>
                 <li><Link href="/live-events" className="text-[#4ade80] hover:underline transition-colors flex items-center">→ Live Events</Link></li>
               </ul>
               <h3 className="text-2xl font-bold font-poppins text-white mb-6 pt-6 border-t border-[#3D7500]/20">Explore More Authority Guides</h3>
               <ul className="space-y-4">
                 <li><Link href="/blog/${link1}" className="text-[#13AFF0] hover:underline transition-colors flex items-center">→ ${titles[link1] || link1.replace(/-/g, ' ')}</Link></li>
                 <li><Link href="/blog/${link2}" className="text-[#13AFF0] hover:underline transition-colors flex items-center">→ ${titles[link2] || link2.replace(/-/g, ' ')}</Link></li>
                 <li><Link href="/blog/${link3}" className="text-[#13AFF0] hover:underline transition-colors flex items-center">→ ${titles[link3] || link3.replace(/-/g, ' ')}</Link></li>
               </ul>
             </section>
`;

        if (!content.includes('Work With Moksha360')) {
            content = content.replace('</article>', endCta + '\n          </article>');
        }

        fs.writeFileSync(filePath, content);
    }
});
console.log('Successfully injected AST mappings.');
