export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Slack Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Find Productivity Killers<br />
          <span className="text-[#58a6ff]">in Your Slack Workspace</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Slack workspace and instantly surface time-wasting channels,
          notification overload, and meeting-heavy members — so your team can focus on real work.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Get Started — $13/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📢</div>
            <h3 className="font-semibold text-white mb-1">Noisy Channels</h3>
            <p className="text-sm text-[#8b949e]">Identify channels with high message volume but low engagement — the biggest attention drains.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="font-semibold text-white mb-1">Notification Overload</h3>
            <p className="text-sm text-[#8b949e]">Spot members drowning in @mentions and DMs that fragment deep work throughout the day.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📅</div>
            <h3 className="font-semibold text-white mb-1">Meeting Overload</h3>
            <p className="text-sm text-[#8b949e]">Detect team members whose calendars are packed with meetings, leaving no time for async work.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <span className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest">Pro Plan</span>
          <div className="mt-3 mb-1">
            <span className="text-5xl font-extrabold text-white">$13</span>
            <span className="text-[#8b949e] ml-1">/mo</span>
          </div>
          <p className="text-sm text-[#8b949e] mb-6">Per workspace. Unlimited members analyzed.</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Slack OAuth — connect in 30 seconds</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Weekly productivity leak reports</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Channel noise scoring</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Per-member notification analysis</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Actionable recommendations</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> CSV export for HR reviews</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base py-3 rounded-lg transition-colors duration-150"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What Slack permissions does this require?</h3>
            <p className="text-sm text-[#8b949e]">We request read-only OAuth scopes — channels:read, users:read, and messages:read. We never post to your workspace or modify any data.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How is the productivity score calculated?</h3>
            <p className="text-sm text-[#8b949e]">We analyze message frequency, @mention density, response latency, and channel membership overlap to produce a composite leak score for each channel and member.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your billing dashboard. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Slack Productivity Leak Detector. Not affiliated with Slack Technologies.
      </footer>
    </main>
  );
}
