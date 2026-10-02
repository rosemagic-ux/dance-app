const CLASSES = [
  { id: "sig-onyx", title: "Signature Choreo", teacher: "Onyx", time: "6:30pm - 7:30pm", dateLabel: "TUESDAY 24/06", weekday: "Tue 26", status: "catch-up", openTo: [3], description: "Signature Choreo with Onyx, a dark, exotic pole style of dance. New choreography every 3 weeks.", color: "#b9e0d5", dayIndex: 1, row: 4 },
  { id: "level3-onyx", title: "Level 3", teacher: "Onyx", time: "7:30pm - 8:30pm", dateLabel: "TUESDAY 24/06", weekday: "Tue 26", status: "cancelled", openTo: [3], description: "Level 3 with Onyx. Intermediate combinations, strength, and flow.", color: "#a0c1be", dayIndex: 1, row: 5 },
  { id: "flex-luci", title: "Flex", teacher: "Luci", time: "1:00pm - 2:00pm", dateLabel: "SATURDAY 27/06", weekday: "Sat 30", status: "weekly", openTo: [1, 2, 3], description: "Flex with Luci — mobility, splits, and backbends to support your pole practice.", color: "#fde698", dayIndex: 5, row: 1 },
  { id: "twerkshop", title: "Twerkshop", teacher: "Ahlex", time: "5:30pm - 6:30pm", dateLabel: "MONDAY 25/06", weekday: "Mon 25", status: "weekly", openTo: [2, 3], description: "Twerkshop with Ahlex. Isolations, bounce, and floorwork.", color: "#fde698", dayIndex: 0, row: 3 },
  { id: "sensual", title: "Sensual Swagg", teacher: "Ahlex", time: "6:30pm - 7:30pm", dateLabel: "MONDAY 25/06", weekday: "Mon 25", status: "weekly", openTo: [2, 3], description: "Sensual Swagg with Ahlex — floorwork and body waves.", color: "#b9e0d5", dayIndex: 0, row: 4 },
  { id: "ophidian", title: "Ophidian", teacher: "Ophelia", time: "5:30pm - 6:30pm", dateLabel: "THURSDAY 28/07", weekday: "Thu 28", status: "weekly", openTo: [2, 3], description: "Ophidian with goddess Ophelia, her style is slinky, basework heavy and absolutely divine.\n\nNew choreo every two weeks.", color: "#fde698", dayIndex: 3, row: 4 },
  { id: "spin", title: "Spin Solstice", teacher: "Luci", time: "6:30pm - 7:30pm", dateLabel: "WEDNESDAY 27/06", weekday: "Wed 27", status: "weekly", openTo: [2, 3], full: true, description: "Spin conditioning and the prettiest spin combos with Luci, the angel herself.\n\nNo choreo, just tricks and flow.", color: "#e5ecee", dayIndex: 2, row: 4 },
  { id: "sig-luci", title: "Signature Choreo", teacher: "Luci", time: "7:30pm - 8:30pm", dateLabel: "WEDNESDAY 27/06", weekday: "Wed 27", status: "weekly", openTo: [2, 3], description: "Signature Choreo with Luci.", color: "rgba(116,195,188,0.5)", dayIndex: 2, row: 5 },
  { id: "temptress", title: "Temptress", teacher: "Luci", time: "5:30pm - 6:30pm", dateLabel: "SATURDAY 30/06", weekday: "Sat 30", status: "weekly", openTo: [1], description: "Temptress with Luci — slinky flow and tricks.", color: "#fde698", dayIndex: 5, row: 3 },
  { id: "music-video", title: "Music Video", teacher: "Ophelia", time: "5:30pm - 6:30pm", dateLabel: "SUNDAY 31/06", weekday: "Sun 31", status: "weekly", openTo: [1], description: "Music Video with Ophelia.", color: "#a0c1be", dayIndex: 6, row: 3 },
];

const DAY_NAMES = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
const CURRENT_WEEK = 3;
const WEEK_3_MONDAY = Date.UTC(2025, 5, 23);
const TIMES = ["1pm", "3pm", "4pm", "5:30pm", "6:30pm", "7:30pm"];
const PRACTICE = [
  { dayIndex: 2, row: 2 },
  { dayIndex: 5, row: 2 },
];
const EVENTS = [
  {
    id: "showcase",
    name: "Term 4 Showcase",
    headline: "Term 4 Showcase!",
    blurb: "Book in for our term 4 showcase, themed “Mother”",
    date: "18th April",
    day: "Thursday",
    time: "7pm",
    venue: "The Golden Era Dance Studio",
    address: "107 Clarence Street, Sydney NSW 2000",
    description: "Price includes a spot at showcase, drinks and light snacks for you and your guests!",
    extra: "Doors open at 6:30pm. Guests welcome. Please arrive 15 minutes early.",
    price: 30,
    photo: "assets/ophidian.jpg",
  },
  {
    id: "new-moon",
    name: "New Moon Manifestation",
    headline: "New Moon Manifestation",
    blurb: "Manifestation workshop with Luna Angel, featuring sing-bowls, journaling prompts and cosy vibes",
    date: "21st April",
    day: "Saturday",
    time: "4pm",
    venue: "The Golden Era Dance Studio",
    address: "107 Clarence Street, Sydney NSW 2000",
    description: "A gentle evening of sound, journaling, and new-moon intention setting with Luna Angel.",
    extra: "Please bring a notebook. Mats and tea provided.",
    price: 30,
    photo: "assets/new-moon.jpg",
  },
];

const NOTIFICATIONS = [
  {
    id: "new-moon-open",
    from: "The Golden Era",
    time: "Today · 9:12am",
    html: `Hi Leah — bookings are open for the New Moon Manifestation Workshop.<br><br>It’s a gentle evening with Luna Angel: singing bowls, journaling prompts, and cosy vibes for setting intentions at the new moon. Tea is included, and we’ll have mats ready — just bring a notebook.<br><br>Saturday 21 April, 4pm at the studio. You can book it now on the Events page. <button type="button" class="bubble-link" data-action="open-event" data-id="new-moon">View event</button>`,
  },
];

const CURRENT_STUDENT = "Leah";

const TEACHER_ROSTER = [
  { name: "Rose" },
  { name: "Angela" },
  { name: "Sienna" },
  { name: "James" },
  { name: "Lisa" },
  { name: "Jo", cancelled: true },
  { name: "Paige", cancelled: true },
  { name: "Rhiannon" },
];

const ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.2 3.5 10.2V21h6.2v-6.4h4.6V21H20.5V10.2L12 3.2Z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3.5h2v2h6v-2h2v2h2.5A1.5 1.5 0 0 1 21 7v13.5A1.5 1.5 0 0 1 19.5 22h-15A1.5 1.5 0 0 1 3 20.5V7A1.5 1.5 0 0 1 4.5 5.5H7v-2ZM5 10h14v10H5V10Z"/></svg>',
  events: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.2 3h15.6l-6.3 9.2V18h3.2v2H7.3v-2h3.2v-5.8L4.2 3Zm3.3 2 4.5 6.6L16.5 5H7.5Z"/></svg>',
  profile: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.2a4.1 4.1 0 1 0-4.1-4.1A4.1 4.1 0 0 0 12 12.2Zm0 1.8c-3.2 0-8 1.6-8 4.8V21h16v-2.2c0-3.2-4.8-4.8-8-4.8Z"/></svg>',
};

const PAY_PLANS = [
  {
    id: "weekly",
    title: "Weekly Payment",
    copy: "1 class per week $18 for the duration of the 10 week term. Automatically deducted.",
    total: "$18 Per Week (10 Week Term)",
    extra: "Charged each week of the 10 week term. Cancel anytime before the weekly deduction.",
  },
  {
    id: "upfront",
    title: "Upfront",
    copy: "Pay for the full term’s course now: $180",
    total: "$180",
    extra: "One payment covering all 10 weeks of the term.",
  },
  {
    id: "deposit",
    title: "Deposit",
    copy: "Pay $90 now and the remaining $90 will be deducted from your account in week 1.",
    total: "$90 now",
    extra: "The remaining $90 is taken automatically in week 1.",
  },
];

const COL = 108;
const LEFT = 12.7;
const ROW_TOP = [95, 281, 392, 498, 603];

const state = {
  tab: "home",
  week: 3,
  view: "calendar",
  classId: null,
  weekOpen: false,
  bookingKind: "casual",
  modal: false,
  paid: false,
  bookings: [
    { classId: "sig-onyx", kind: "casual", week: 3, status: "catch-up" },
    { classId: "level3-onyx", kind: "term" },
    { classId: "flex-luci", kind: "term" },
  ],
  cancellations: [
    { classId: "level3-onyx", week: 3, studio: true },
    { classId: "flex-luci", week: 1 },
    { classId: "flex-luci", week: 2 },
  ],
  expandedId: null,
  cancelClassId: null,
  cancelWeek: null,
  mode: "book",
  bookLevel: 3,
  levelOpen: false,
  waitlists: [],
  eventId: null,
  eventBookings: [],
  eventDetailsOpen: false,
  step: "class",
  payPlan: "weekly",
  payDetailsOpen: false,
  profileView: null,
  inboxOpen: false,
  inboxRead: false,
  rebookFlashes: [],
  role: "student",
  teacherClassId: null,
  teacherMarks: {},
  addedStudents: {},
  newStudentName: "",
  newStudentNotes: "",
  attendanceSubmitted: {},
  teacherAddOpen: false,
  teacherExtras: [],
  addKind: "private",
  addDate: "",
  addStart: "",
  addEnd: "",
  addNotes: "",
  addStudents: [""],
  addStudentSuggest: null,
  editingExtraId: null,
  email: "leah@goldeneradance.com",
  notify: {
    classReminders: true,
    waitlist: true,
    events: true,
    studioNews: false,
  },
};

function mondayOfWeek(week) {
  return WEEK_3_MONDAY + (week - 3) * 7 * 86400000;
}

function dateLabelFor(week, dayIndex) {
  const d = utcDate(week, dayIndex);
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  return `${DAY_NAMES[dayIndex]} ${dd}/${mm}`;
}

function dayHeads(week) {
  const short = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return short.map((name, i) => `${name} ${utcDate(week, i).getUTCDate()}`);
}

function weekRangeLabel(week) {
  const start = utcDate(week, 0);
  const end = utcDate(week, 6);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const sm = months[start.getUTCMonth()];
  const em = months[end.getUTCMonth()];
  if (sm === em) return `${start.getUTCDate()}–${end.getUTCDate()} ${sm}`;
  return `${start.getUTCDate()} ${sm}–${end.getUTCDate()} ${em}`;
}

function weeklyClassCount() {
  return state.bookings.filter((b) => b.status !== "cancelled").length;
}

function catchUpUsed() {
  return state.bookings.filter((b) => b.status === "catch-up").length;
}

function catchUpCount() {
  const earned = state.cancellations.filter((x) => !x.studio).length;
  return Math.max(0, earned - catchUpUsed());
}

function utcDate(week, dayIndex) {
  return new Date(mondayOfWeek(week) + dayIndex * 86400000);
}

function isoFromUtc(d) {
  return d.toISOString().slice(0, 10);
}

function weekAndDayFromISO(iso) {
  const [y, mo, da] = String(iso).split("-").map(Number);
  const ms = Date.UTC(y, mo - 1, da);
  const diffDays = Math.round((ms - WEEK_3_MONDAY) / 86400000);
  const week = 3 + Math.floor(diffDays / 7);
  const dayIndex = ((diffDays % 7) + 7) % 7;
  return { week, dayIndex };
}

function parseClockToMinutes(label) {
  const s = String(label).trim().toLowerCase().replace(/\s/g, "");
  if (/^\d{1,2}:\d{2}$/.test(s)) return minutesOf(s);
  const m = s.match(/^(\d{1,2})(?::(\d{2}))?(am|pm)$/);
  if (!m) return null;
  let h = Number(m[1]);
  const min = Number(m[2] || 0);
  if (m[3] === "pm" && h !== 12) h += 12;
  if (m[3] === "am" && h === 12) h = 0;
  return h * 60 + min;
}

function rangeFromLabel(time) {
  const parts = String(time).split(/\s*-\s*/);
  if (parts.length < 2) return null;
  const start = parseClockToMinutes(parts[0]);
  const end = parseClockToMinutes(parts[1]);
  if (start == null || end == null) return null;
  return { start, end };
}

function practiceRange(row) {
  const starts = {
    1: 13 * 60,
    2: 15 * 60,
    3: 17 * 60 + 30,
    4: 18 * 60 + 30,
    5: 19 * 60 + 30,
  };
  const start = starts[row] || 13 * 60;
  return { start, end: start + 60 };
}

function extraRange(x) {
  if (x.start) {
    const end = x.end && minutesOf(x.end) > minutesOf(x.start) ? x.end : addHour(x.start);
    return { start: minutesOf(x.start), end: minutesOf(end) };
  }
  return x.timeLabel ? rangeFromLabel(x.timeLabel) : null;
}

function slotTaken(dateISO, start, end, ignoreId) {
  if (!dateISO || !start) return false;
  const endUse = !end || minutesOf(end) <= minutesOf(start) ? addHour(start) : end;
  const a0 = minutesOf(start);
  const a1 = minutesOf(endUse);
  const overlaps = (b0, b1) => a0 < b1 && b0 < a1;
  const { week, dayIndex } = weekAndDayFromISO(dateISO);
  for (const c of CLASSES) {
    if (c.dayIndex !== dayIndex) continue;
    const r = rangeFromLabel(c.time);
    if (r && overlaps(r.start, r.end)) return true;
  }
  for (const p of PRACTICE) {
    if (p.dayIndex !== dayIndex) continue;
    const r = practiceRange(p.row);
    if (overlaps(r.start, r.end)) return true;
  }
  for (const x of state.teacherExtras || []) {
    if (ignoreId && x.id === ignoreId) continue;
    if (x.week !== week || x.dayIndex !== dayIndex) continue;
    const r = extraRange(x);
    if (r && overlaps(r.start, r.end)) return true;
  }
  return false;
}

function bookingDurationLabel(start, end) {
  if (!start) return "";
  const a0 = minutesOf(start);
  const a1 = !end || minutesOf(end) <= a0 ? a0 + 60 : minutesOf(end);
  const mins = a1 - a0;
  if (mins <= 0) return "";
  if (mins < 60) return `${mins} minute${mins === 1 ? "" : "s"}`;
  const hours = mins / 60;
  if (mins % 60 === 0) return hours === 1 ? "1 hour" : `${hours} hours`;
  const rounded = Math.round(hours * 100) / 100;
  const text = Number.isInteger(rounded) ? String(rounded) : String(rounded);
  return `${text} hours`;
}

function timesMetaHTML(start, end, taken) {
  const duration = bookingDurationLabel(start, end);
  return `${duration ? `<p class="slot-duration">${duration}</p>` : ""}${taken ? `<p class="slot-taken">Time slot already booked</p>` : ""}`;
}

function refreshSlotTakenUI() {
  const form = document.querySelector(".add-booking");
  if (!form) return;
  const pay = form.querySelector('[data-action="save-add-booking"]');
  const meta = form.querySelector(".times-meta");
  if (!pay || !meta) return;
  const taken = slotTaken(state.addDate, state.addStart, state.addEnd, state.editingExtraId);
  pay.disabled = taken;
  meta.innerHTML = timesMetaHTML(state.addStart, state.addEnd, taken);
}

function formatClock(t) {
  const [h, m] = String(t).split(":").map(Number);
  const ampm = h >= 12 ? "pm" : "am";
  const hr = h % 12 || 12;
  return m ? `${hr}:${String(m).padStart(2, "0")}${ampm}` : `${hr}${ampm}`;
}

function timeRangeLabel(start, end) {
  return `${formatClock(start)} - ${formatClock(end)}`;
}

function minutesOf(t) {
  const [h, m] = String(t).split(":").map(Number);
  return h * 60 + (m || 0);
}

function addHour(t) {
  const [h, m] = String(t).split(":").map(Number);
  return `${String((h + 1) % 24).padStart(2, "0")}:${String(m || 0).padStart(2, "0")}`;
}

function rowFromTime(t) {
  const [h, m] = String(t).split(":").map(Number);
  const mins = h * 60 + (m || 0);
  const anchors = [
    [13 * 60, 1],
    [15 * 60, 2],
    [16 * 60, 2],
    [17 * 60 + 30, 3],
    [18 * 60 + 30, 4],
    [19 * 60 + 30, 5],
  ];
  let best = 1;
  let bestDiff = Infinity;
  anchors.forEach(([stamp, row]) => {
    const diff = Math.abs(stamp - mins);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = row;
    }
  });
  return best;
}

function extraSessionsForWeek(week) {
  return (state.teacherExtras || []).filter((x) => x.week === week).map((x) => ({
    id: x.id,
    title: x.kind === "private" ? "Private Lesson" : "Practice Time",
    teacher: "Onyx",
    time: x.timeLabel,
    dayIndex: x.dayIndex,
    row: x.row,
    color: "#fde698",
    notes: x.notes,
    extra: true,
    start: x.start,
    end: x.end,
    students: x.students || [],
  }));
}

function extraHasStudent(session, name) {
  const needle = String(name || "").trim().toLowerCase();
  if (!needle) return false;
  return (session.students || []).some((n) => String(n).trim().toLowerCase() === needle);
}

function extrasForStudent(week, name = CURRENT_STUDENT) {
  return extraSessionsForWeek(week).filter((x) => extraHasStudent(x, name));
}

function enrolledStudentNames() {
  const names = new Set([CURRENT_STUDENT]);
  TEACHER_ROSTER.forEach((s) => names.add(s.name));
  Object.values(state.addedStudents || {}).forEach((list) => {
    list.forEach((x) => {
      const n = String(typeof x === "string" ? x : x.name || "").trim();
      if (n) names.add(n);
    });
  });
  (state.teacherExtras || []).forEach((x) => {
    (x.students || []).forEach((n) => {
      const name = String(n || "").trim();
      if (name) names.add(name);
    });
  });
  return [...names].sort((a, b) => a.localeCompare(b));
}

function canonicalStudentName(name) {
  const trimmed = String(name || "").trim();
  if (!trimmed) return "";
  const match = enrolledStudentNames().find((n) => n.toLowerCase() === trimmed.toLowerCase());
  return match || trimmed;
}

function studentSuggestions(query, index) {
  const q = String(query || "").trim().toLowerCase();
  if (!q) return [];
  const used = new Set(
    (state.addStudents || [])
      .map((n, i) => (i === index ? "" : String(n).trim().toLowerCase()))
      .filter(Boolean)
  );
  return enrolledStudentNames().filter((n) => n.toLowerCase().includes(q) && !used.has(n.toLowerCase()));
}

function restoreStudentField(index, caret) {
  const next = document.querySelector(`[data-field="add-student"][data-index="${index}"]`);
  if (!next) return;
  next.focus();
  const pos = Math.max(0, Math.min(next.value.length, caret == null ? next.value.length : caret));
  next.setSelectionRange(pos, pos);
}

let pendingStudentFocus = null;

function applyStudentFocus() {
  if (!pendingStudentFocus) return;
  const { index, caret } = pendingStudentFocus;
  pendingStudentFocus = null;
  restoreStudentField(index, caret);
}

function ordinal(n) {
  const v = n % 100;
  if (v >= 11 && v <= 13) return `${n}th`;
  if (n % 10 === 1) return `${n}st`;
  if (n % 10 === 2) return `${n}nd`;
  if (n % 10 === 3) return `${n}rd`;
  return `${n}th`;
}

function shortDate(week, dayIndex) {
  const d = utcDate(week, dayIndex);
  return `${d.getUTCDate()}/${d.getUTCMonth() + 1}`;
}

function longDate(week, dayIndex) {
  const d = utcDate(week, dayIndex);
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getUTCDay()];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][d.getUTCMonth()];
  return `${weekday}, ${ordinal(d.getUTCDate())} of ${month}`;
}

function remainingWeeks(fromWeek) {
  const weeks = [];
  for (let w = fromWeek; w <= 10; w += 1) weeks.push(w);
  return weeks;
}

function sparkle() {
  return `<svg class="sparkle" viewBox="0 0 24 24" aria-hidden="true"><path fill="#FAB701" d="M12 1.2 13.6 8.8 21 10.4 13.6 12l-1.6 7.6L10.4 12 3 10.4l7.4-1.6L12 1.2Zm7.2 12.2 1 3.2 3.2 1-3.2 1-1 3.2-1-3.2-3.2-1 3.2-1 1-3.2Z"/></svg>`;
}

function isCancelled(classId, week) {
  return state.cancellations.some((x) => x.classId === classId && x.week === week);
}

function isRebooked(classId, week) {
  return state.rebookFlashes.some((x) => x.classId === classId && Number(x.week) === Number(week) && x.seen <= 2);
}

function countHomeView() {
  state.rebookFlashes = state.rebookFlashes
    .map((x) => ({ ...x, seen: x.seen + 1 }))
    .filter((x) => x.seen <= 2);
}

function bookingFor(classId, week) {
  const term = state.bookings.find((b) => b.classId === classId && b.kind === "term");
  if (term) return term;
  return state.bookings.find((b) => b.classId === classId && b.kind === "casual" && Number(b.week) === Number(week));
}

function upcomingForWeek(week) {
  const items = [];
  for (const booking of state.bookings) {
    if (booking.kind === "casual" && Number(booking.week) !== Number(week)) continue;
    const c = CLASSES.find((x) => x.id === booking.classId);
    if (!c) continue;
    const cancelled = isCancelled(booking.classId, week);
    if (booking.kind === "casual" && cancelled) continue;
    const pastWeek = Number(week) < CURRENT_WEEK;
    items.push({
      ...c,
      booking: cancelled && !pastWeek ? { ...booking, status: "cancelled" } : booking,
      dateLabel: dateLabelFor(week, c.dayIndex),
    });
  }
  for (const entry of state.waitlists) {
    if (Number(entry.week) !== Number(week)) continue;
    if (items.some((item) => item.id === entry.classId)) continue;
    const waitClass = CLASSES.find((x) => x.id === entry.classId);
    if (!waitClass) continue;
    items.push({
      ...waitClass,
      booking: { classId: entry.classId, kind: "waitlist", week, status: "waitlist" },
      dateLabel: dateLabelFor(week, waitClass.dayIndex),
    });
  }
  extrasForStudent(week).forEach((extra) => {
    items.push({
      ...extra,
      booking: { classId: extra.id, kind: "casual", week, status: "private" },
      dateLabel: dateLabelFor(week, extra.dayIndex),
    });
  });
  items.sort((a, b) => a.dayIndex - b.dayIndex || a.row - b.row);
  return items;
}

function isEnrolled(classId, week) {
  return Boolean(bookingFor(classId, week)) && !isCancelled(classId, week);
}

function isWaitlisted(classId, week) {
  return state.waitlists.some((x) => x.classId === classId && Number(x.week) === Number(week));
}

function bellIcon(fill = "currentColor") {
  return `<svg class="bell-icon" width="22" height="22" viewBox="0 0 24 24" fill="${fill}" aria-hidden="true"><path d="M12 22a2.2 2.2 0 0 0 2.2-2.1h-4.4A2.2 2.2 0 0 0 12 22Zm8-6V11a8 8 0 1 0-16 0v5L2 18v1h20v-1l-2-2Z"/></svg>`;
}

function commitBooking() {
  const classId = state.classId;
  const kind = state.bookingKind;
  const week = state.week;
  const cls = CLASSES.find((x) => x.id === classId);
  if (!classId || isEnrolled(classId, week) || cls?.full) return;
  if (kind === "catch-up") {
    if (catchUpCount() < 1) return;
    state.bookings.push({ classId, kind: "casual", week, status: "catch-up" });
    return;
  }
  if (kind === "term") {
    state.bookings = state.bookings.filter((b) => b.classId !== classId);
    state.bookings.push({ classId, kind: "term" });
    return;
  }
  if (state.bookings.some((b) => b.classId === classId && b.kind === "term")) return;
  if (state.bookings.some((b) => b.classId === classId && b.kind === "casual" && b.week === week)) return;
  state.bookings.push({ classId, kind: "casual", week });
}

function confirmCancel() {
  const classId = state.cancelClassId;
  const week = Number(state.cancelWeek);
  const booking = bookingFor(classId, week);
  if (!booking || isCancelled(classId, week)) return;
  if (booking.kind === "casual") {
    state.bookings = state.bookings.filter((b) => !(b.classId === classId && b.kind === "casual" && Number(b.week) === week));
    return;
  }
  state.cancellations.push({ classId, week });
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content;
}

function statusBar() {
  return `<div class="status-bar">
    <div class="side"><p class="time">9:41</p></div>
    <div class="island"></div>
    <div class="side"><img src="assets/status-right.svg" alt="" /></div>
  </div>`;
}

function classesForLevel(level) {
  return CLASSES.filter((c) => c.openTo.includes(level));
}

function classLevelLabel(c) {
  if (c.openTo.length === 3) return "All levels";
  if (c.openTo.length === 1) return `Level ${c.openTo[0]}`;
  return `Level ${Math.min(...c.openTo)}+`;
}

function levelPicker() {
  const menu = state.levelOpen
    ? `<div class="week-menu level-menu" role="listbox">${[1, 2, 3].map((n) =>
        `<button type="button" data-action="set-level" data-level="${n}" ${n === state.bookLevel ? 'aria-current="true"' : ""}>Level ${n}</button>`
      ).join("")}</div>`
    : "";
  return `<div class="level-chip">
    <button type="button" data-action="toggle-level">
      <span>Level ${state.bookLevel}</span>
    </button>
    ${menu}
  </div>`;
}

function weekPicker(minWeek = 1, opts = {}) {
  const weeks = [];
  for (let w = minWeek; w <= 10; w += 1) weeks.push(w);
  const menu = state.weekOpen
    ? `<div class="week-menu${opts.withDates ? " with-dates" : ""}" role="listbox">${weeks.map((w) =>
        `<button type="button" data-action="set-week" data-week="${w}" class="${w === CURRENT_WEEK ? "is-now" : ""}" ${w === state.week ? 'aria-current="true"' : ""}>Week ${w}${opts.withDates ? ` · ${weekRangeLabel(w)}` : ""}</button>`
      ).join("")}</div>`
    : "";
  return `<div class="week-btn${opts.compact ? " is-compact" : ""}">
    <button type="button" data-action="toggle-week" style="display:flex;align-items:center">
      <span>Week ${state.week}</span>
      <img src="assets/chevron.svg" alt="" />
    </button>
    ${menu}
  </div>`;
}

function nav() {
  if (state.classId || state.eventId || state.profileView === "levels" || state.inboxOpen || state.teacherClassId || state.teacherAddOpen) return "";
  const items = [
    ["home", "Home"],
    ["book", state.role === "teacher" ? "Classes" : "Book"],
    ["events", "Events"],
    ["profile", "Profile"],
  ];
  return `<nav class="nav">${items.map(([id, label]) => {
    const locked = state.role === "teacher" && id !== "home" && id !== "book";
    return `
    <button class="nav-item ${state.tab === id ? "active" : ""}" data-action="${locked ? "noop" : "tab"}" data-tab="${id}">
      ${ICONS[id]}<span>${label}</span>
    </button>`;
  }).join("")}</nav>`;
}

function classStatus(item) {
  if (item.extra || item.booking?.status === "private") return `<strong>Private</strong>`;
  if (isRebooked(item.id, state.week)) return `<strong>Weekly</strong><span class="rebooked">REBOOKED</span>`;
  const status = item.booking?.status || (item.booking?.kind === "term" ? "weekly" : "casual");
  if (status === "waitlist") return `<strong>Catch Up</strong><span class="waitlist-tag">WAITLIST</span>`;
  if (status === "catch-up") return `<strong>Catch Up</strong>`;
  if (status === "casual") return `<strong>Casual</strong>`;
  if (status === "weekly") return `<strong>Weekly</strong>`;
  return `<strong>Weekly</strong><span class="cancel">CANCELLED </span>`;
}

function cancelModals() {
  if (state.modal === "delete-account") {
    return `<div class="scrim" data-action="close-modal">
      <div class="modal cancel-modal" data-stop="true">
        <p class="modal-title">Delete your account?</p>
        <p class="success-note">This preview won’t remove anything. In the live app, this would permanently delete Leah’s account.</p>
        <button class="pay cancel-yes" data-action="close-modal">Delete account</button>
        <button class="cancel-link" data-action="close-modal">Keep account</button>
      </div>
    </div>`;
  }
  if (state.modal === "rebook-success") {
    return `<div class="scrim" data-action="close-modal">
      <div class="modal cancel-modal" data-stop="true">
        <p class="modal-title">${sparkle()} Class Rebooked Successfully</p>
        <p class="success-note">You’re back in for this week.</p>
        <button class="pay" data-action="close-modal">Okay!</button>
      </div>
    </div>`;
  }
  if (state.modal === "delete-session") {
    const extra = (state.teacherExtras || []).find((x) => x.id === state.editingExtraId);
    const title = extra && extra.kind === "practice" ? "Practice Time" : "Private Lesson";
    const meta = extra
      ? `${extra.timeLabel || timeRangeLabel(extra.start, extra.end)}<br>${longDate(extra.week, extra.dayIndex)}`
      : "";
    return `<div class="scrim" data-action="close-modal">
      <div class="modal book-cancel-modal" data-stop="true">
        <button type="button" class="modal-x" data-action="close-modal" aria-label="Close">×</button>
        <p class="modal-title">Delete this session?</p>
        <p class="cancel-name">${title}</p>
        ${meta ? `<p class="cancel-meta">${meta}</p>` : ""}
        <button class="pay cancel-yes" data-action="confirm-delete-session">Yes, Delete</button>
        <button class="cancel-link" data-action="close-modal">No, Back</button>
      </div>
    </div>`;
  }
  if (state.modal !== "cancel-confirm" && state.modal !== "cancel-success" && state.modal !== "book-cancel") return "";
  const c = CLASSES.find((x) => x.id === state.cancelClassId);
  if (!c) return "";
  const week = Number(state.cancelWeek);
  if (state.modal === "book-cancel") {
    return `<div class="scrim" data-action="close-modal">
      <div class="modal book-cancel-modal" data-stop="true">
        <button type="button" class="modal-x" data-action="close-modal" aria-label="Close">×</button>
        <p class="modal-title">Are you sure you want to cancel?</p>
        <p class="cancel-name">${c.title}</p>
        <p class="cancel-meta">With ${c.teacher}<br>${c.time}<br>${longDate(week, c.dayIndex)}</p>
        <button class="pay cancel-yes" data-action="confirm-cancel">Yes, Cancel</button>
        <button class="cancel-link" data-action="close-modal">No, Back</button>
      </div>
    </div>`;
  }
  if (state.modal === "cancel-success") {
    return `<div class="scrim" data-action="close-modal">
      <div class="modal cancel-modal" data-stop="true">
        <p class="modal-title">${sparkle()} Class Cancelled Successfully</p>
        <p class="success-lead">1 catch-up added to your profile!</p>
        <p class="success-note">Be sure to book them before the end of the term.</p>
        <button class="pay" data-action="close-modal">Okay!</button>
      </div>
    </div>`;
  }
  return `<div class="scrim" data-action="close-modal">
    <div class="modal cancel-modal" data-stop="true">
      <p class="modal-title">${sparkle()} Are you sure you’d like to cancel?</p>
      <p class="cancel-name">${c.title}</p>
      <p class="cancel-meta">With ${c.teacher}<br><strong>Time:</strong> ${c.time.replace(" - ", "-")}<br><strong>Date:</strong> ${longDate(week, c.dayIndex)}</p>
      <button class="pay" data-action="confirm-cancel">Confirm Cancellation</button>
      <button class="cancel-link" data-action="close-modal">Cancel</button>
    </div>
  </div>`;
}

function sessionActions(itemId, week, gone) {
  if (week < CURRENT_WEEK) return "";
  if (isRebooked(itemId, week) && week === CURRENT_WEEK) {
    return `<div class="session-actions"><span class="rebooked">REBOOKED</span></div>`;
  }
  if (gone) {
    if (week !== CURRENT_WEEK) return `<div class="session-actions"><span class="cancel">CANCELLED</span></div>`;
    return `<div class="session-actions"><span class="cancel">CANCELLED</span><button type="button" class="chip-cancel chip-rebook" data-action="rebook" data-id="${itemId}" data-week="${week}">Rebook</button></div>`;
  }
  return `<button type="button" class="chip-cancel" data-action="ask-cancel" data-id="${itemId}" data-week="${week}">Cancel Class</button>`;
}

function home() {
  const viewingPast = state.week < CURRENT_WEEK;
  const items = upcomingForWeek(state.week);
  const groups = [];
  items.forEach((c) => {
    const last = groups[groups.length - 1];
    if (!last || last.date !== c.dateLabel) groups.push({ date: c.dateLabel, rows: [c] });
    else last.rows.push(c);
  });
  const list = items.length
    ? groups.map(({ date, rows }) => `
        <section>
          <button type="button" class="date-label" data-action="expand-day" data-ids="${rows.filter((r) => r.booking?.kind === "term").map((r) => r.id).join(",")}">${date}</button>
          <div class="day-stack">
            ${rows.map((item) => {
              const term = item.booking?.kind === "term";
              const waitlisted = item.booking?.status === "waitlist";
              const cancelled = item.booking?.status === "cancelled";
              const open = state.expandedId === item.id && term;
              const sessions = open
                ? remainingWeeks(state.week).map((w) => {
                    const past = w < CURRENT_WEEK;
                    const gone = !past && isCancelled(item.id, w);
                    return `<div class="session-row ${gone ? "is-cancelled" : ""} ${w === CURRENT_WEEK ? "is-current" : ""} ${past ? "is-past" : ""}">
                      <div>
                        <strong>${shortDate(w, item.dayIndex)}</strong>
                        <span>${prettyDay(item)}</span>
                        <em>Week ${w}${w === CURRENT_WEEK ? " · This week" : ""}</em>
                      </div>
                      ${sessionActions(item.id, w, gone)}
                    </div>`;
                  }).join("")
                : "";
              return `<div class="class-block ${open ? "is-open" : ""} ${cancelled ? "cancelled" : ""} ${waitlisted ? "is-waitlist" : ""} ${viewingPast ? "is-past" : ""}">
                <button type="button" class="class-row" data-action="${term ? "toggle-expand" : "noop"}" data-id="${item.id}">
                  <div class="pair">
                    <div class="info"><strong>${item.title}</strong><br><em>${item.teacher}</em><br>${item.time.replace("1:00pm - 2:00pm", "1pm - 2pm")}</div>
                    <div class="status">${classStatus(item)}${term ? `<span class="expand-hint ${open ? "is-open" : ""}"><img src="assets/chevron.svg" alt="" /></span>` : ""}</div>
                  </div>
                </button>
                ${sessions ? `<div class="session-list">${sessions}</div>` : ""}
                <div class="divider"></div>
              </div>`;
            }).join("")}
          </div>
        </section>`).join("")
    : `<div class="empty"><p>You have no upcoming classes yet!</p><button class="small-btn" data-action="tab" data-tab="book">Book a Class</button></div>`;

  return `<div class="screen">
    <header class="header">
      <button type="button" class="brand" data-action="toggle-teacher" aria-label="Switch to teacher view">
        <img src="assets/logo.png" alt="The Golden Era Dance Studio" />
      </button>
      <div class="header-copy">
        <div class="header-title">
          <h1>Welcome, Leah</h1>
          <button type="button" class="home-bell ${state.inboxRead ? "" : "is-new"}" data-action="open-inbox" aria-label="Notifications">
            ${bellIcon("currentColor")}
            ${state.inboxRead ? "" : `<span class="home-bell-count">1</span>`}
          </button>
        </div>
        <div class="header-meta">
          <div><strong>Level 3</strong><br>${weeklyClassCount()} class${weeklyClassCount() === 1 ? "" : "es"}</div>
          <div class="right"><p><strong>Catch-ups: </strong>${catchUpCount()}</p>
            <button type="button" class="gold" data-action="tab" data-tab="book">Book a Class</button>
          </div>
        </div>
      </div>
    </header>
    <div class="upcoming"><h2>UPCOMING CLASSES</h2>${weekPicker(1, { withDates: true })}</div>
    <div class="class-list">${list}</div>
  </div>`;
}

function teacherHome() {
  const teacherName = "Onyx";
  const items = CLASSES.filter((c) => c.teacher === teacherName)
    .concat(extraSessionsForWeek(state.week))
    .map((c) => ({ ...c, dateLabel: dateLabelFor(state.week, c.dayIndex) }))
    .sort((a, b) => a.dayIndex - b.dayIndex || a.row - b.row);
  const groups = [];
  items.forEach((c) => {
    const last = groups[groups.length - 1];
    if (!last || last.date !== c.dateLabel) groups.push({ date: c.dateLabel, rows: [c] });
    else last.rows.push(c);
  });
  const list = items.length
    ? groups.map(({ date, rows }) => `
        <section>
          <p class="date-label">${date}</p>
          <div class="day-stack">
            ${rows.map((item) => {
              const done = Boolean(state.attendanceSubmitted[attendanceKey(item.id, "_all")]);
              return `<button type="button" class="class-block" data-action="${item.extra ? "open-edit-booking" : "open-teacher-class"}" data-id="${item.id}">
              <div class="class-row">
                <div class="pair">
                  <div class="info"><strong>${item.title}</strong><br>${item.time.replace("1:00pm - 2:00pm", "1pm - 2pm")}${item.students && item.students.length ? `<br><em>${escapeHtml(item.students.join(", "))}</em>` : ""}${item.notes ? `<br><em>${escapeHtml(item.notes)}</em>` : ""}</div>
                  ${done ? `<span class="teacher-done-tick" aria-label="Attendance submitted">${tickIcon()}</span>` : ""}
                </div>
              </div>
              <div class="divider"></div>
            </button>`;
            }).join("")}
          </div>
        </section>`).join("")
    : `<div class="empty"><p>You have no classes this week.</p></div>`;

  return `<div class="screen">
    <header class="header">
      <button type="button" class="brand" data-action="toggle-teacher" aria-label="Switch to student view">
        <img src="assets/logo.png" alt="The Golden Era Dance Studio" />
      </button>
      <div class="header-copy">
        <div class="header-title">
          <div>
            <h1>Welcome, Onyx</h1>
            <p class="header-role">Teacher</p>
          </div>
          <button type="button" class="home-bell ${state.inboxRead ? "" : "is-new"}" data-action="open-inbox" aria-label="Notifications">
            ${bellIcon("currentColor")}
            ${state.inboxRead ? "" : `<span class="home-bell-count">1</span>`}
          </button>
        </div>
      </div>
    </header>
    <div class="upcoming"><h2>UPCOMING CLASSES</h2>${weekPicker(1, { withDates: true })}</div>
    <div class="class-list">${list}</div>
    <button type="button" class="teacher-fab" data-action="open-add-booking" aria-label="Add booking">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
    </button>
  </div>`;
}

function teacherAddBooking() {
  const editing = Boolean(state.editingExtraId);
  const kind = state.addKind === "practice" ? "practice" : "private";
  const min = isoFromUtc(utcDate(1, 0));
  const max = isoFromUtc(utcDate(10, 6));
  const taken = slotTaken(state.addDate, state.addStart, state.addEnd, state.editingExtraId);
  return `<div class="screen add-booking">
    <div class="page-heading">
      <button class="back" data-action="close-add-booking" aria-label="Back"><img src="assets/back.svg" alt="" /></button>
      <h1>${editing ? "Edit booking" : "Add booking"}</h1>
      <div></div>
    </div>
    <div class="add-booking-body">
      <p class="add-label">Type</p>
      <div class="add-kind">
        <button type="button" class="book-card ${kind === "private" ? "selected" : ""}" data-action="set-add-kind" data-kind="private">
          <span class="add-kind-icon" aria-hidden="true">${privateLessonIcon()}</span>
          <strong>Private Lesson</strong>
        </button>
        <button type="button" class="book-card ${kind === "practice" ? "selected" : ""}" data-action="set-add-kind" data-kind="practice">
          <span class="add-kind-icon" aria-hidden="true">${practiceTimeIcon()}</span>
          <strong>Practice Time</strong>
        </button>
      </div>
      <label class="add-field">Date
        <input class="student-name-input" data-field="add-date" type="date" min="${min}" max="${max}" value="${escapeHtml(state.addDate || "")}" />
      </label>
      <div class="add-times-block">
        <div class="add-times">
          <label class="add-field">Start time
            <input class="student-name-input" data-field="add-start" type="time" value="${escapeHtml(state.addStart || "")}" />
          </label>
          <label class="add-field">End time
            <input class="student-name-input" data-field="add-end" type="time" value="${escapeHtml(state.addEnd || "")}" />
          </label>
        </div>
        <div class="times-meta">${timesMetaHTML(state.addStart, state.addEnd, taken)}</div>
      </div>
      ${kind === "private" ? `
      <p class="add-label">Student</p>
      <div class="add-students">
        ${(state.addStudents && state.addStudents.length ? state.addStudents : [""]).map((name, i, list) => {
          const suggestions = state.addStudentSuggest === i ? studentSuggestions(name, i) : [];
          return `
          <div class="add-student-row">
            <div class="student-suggest-wrap">
              <input class="student-name-input" data-field="add-student" data-index="${i}" type="text" placeholder="Student name" value="${escapeHtml(name)}" autocomplete="off" />
              ${suggestions.length ? `<ul class="student-suggest" role="listbox">${suggestions.map((n) => `<li><button type="button" data-action="pick-student" data-index="${i}" data-name="${escapeHtml(n)}">${escapeHtml(n)}</button></li>`).join("")}</ul>` : ""}
            </div>
            ${i === list.length - 1 ? `<button type="button" class="add-student-plus" data-action="add-private-student" aria-label="Add another student">+</button>` : ""}
          </div>`;
        }).join("")}
      </div>` : ""}
      <label class="add-field">Notes
        <textarea class="student-notes-input" data-field="add-notes" rows="4" placeholder="Optional notes">${escapeHtml(state.addNotes || "")}</textarea>
      </label>
      <button type="button" class="pay" data-action="save-add-booking" ${taken ? "disabled" : ""}>${editing ? "Save" : "Add"}</button>
      ${editing ? `<button type="button" class="delete-session" data-action="ask-delete-session">Delete</button>` : ""}
    </div>
  </div>`;
}

function teacherRoster(classId) {
  const extras = state.addedStudents[classId] || [];
  return TEACHER_ROSTER.map((s) => ({ name: s.name, notes: "", cancelled: Boolean(s.cancelled) })).concat(
    extras.map((x) => (typeof x === "string" ? { name: x, notes: "" } : x))
  );
}

function attendanceKey(classId, name) {
  return `${classId}|${state.week}|${name}`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

function tickIcon() {
  return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5 9.5 17 19 7"/></svg>`;
}

function privateLessonIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5.6 9.8 8.8 4.6h6.4l3.2 5.2L12 20.4Z"/>
    <path d="M5.6 9.8h12.8"/>
    <path d="M8.8 4.6 12 9.8 15.2 4.6"/>
    <path d="M12 9.8v10.6"/>
  </svg>`;
}

function practiceTimeIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="8"/>
    <path d="M12 7.6V12l3.4 2.1"/>
  </svg>`;
}

function teacherClass() {
  const c = CLASSES.find((x) => x.id === state.teacherClassId);
  if (!c) return teacherHome();
  const date = dateLabelFor(state.week, c.dayIndex);
  const students = teacherRoster(c.id);
  const submitted = Boolean(state.attendanceSubmitted[attendanceKey(c.id, "_all")]);
  const addModal = state.modal === "add-student"
    ? `<div class="scrim" data-action="close-modal">
        <div class="modal cancel-modal" data-stop="true">
          <p class="modal-title">Add student</p>
          <input class="student-name-input" data-field="new-student" type="text" placeholder="Student name" value="${escapeHtml(state.newStudentName || "")}" />
          <textarea class="student-notes-input" data-field="new-student-notes" rows="3" placeholder="Notes for this student">${escapeHtml(state.newStudentNotes || "")}</textarea>
          <button class="pay" data-action="confirm-add-student">Add</button>
          <button class="cancel-link" data-action="close-modal">Cancel</button>
        </div>
      </div>`
    : "";
  const submittedModal = state.modal === "attendance-success"
    ? `<div class="scrim" data-action="close-modal">
        <div class="modal cancel-modal" data-stop="true">
          <p class="modal-title">${sparkle()} Attendance submitted</p>
          <p class="success-note">Present students are ticked. Anyone left unticked is marked absent.</p>
          <button class="pay" data-action="close-modal">Okay!</button>
        </div>
      </div>`
    : "";
  return `<div class="screen teacher-class">
    <div class="page-heading">
      <button class="back" data-action="close-teacher-class" aria-label="Back"><img src="assets/back.svg" alt="" /></button>
      <h1>${c.title}</h1>
      <div></div>
    </div>
    <div class="teacher-class-body">
      <p class="teacher-class-date">${date}</p>
      <p class="teacher-class-time">${c.time}</p>
      <div class="roster-head">
        <p class="roster-count">${students.length} student${students.length === 1 ? "" : "s"}</p>
        <button type="button" class="add-student-top" data-action="ask-add-student" ${submitted ? "disabled" : ""}>+ Add student</button>
      </div>
      <ul class="roster">
        ${students.map((student, i) => {
          const present = state.teacherMarks[attendanceKey(c.id, student.name)] === "present";
          return `<li class="roster-row${student.cancelled ? " is-cancelled" : ""}${present ? " is-present" : ""}">
          <div class="roster-who">
            <span><b class="roster-num">${i + 1}</b> ${escapeHtml(student.name)}</span>
            ${student.cancelled ? `<em>Cancelled by Student</em>` : ""}
            ${student.notes ? `<em>${escapeHtml(student.notes)}</em>` : ""}
          </div>
          <button type="button" class="mark ${present ? "is-on" : ""}" data-action="toggle-mark" data-name="${escapeHtml(student.name)}" ${submitted ? "disabled" : ""} aria-label="Present">${present ? tickIcon() : ""}</button>
        </li>`;
        }).join("")}
      </ul>
    </div>
    <div class="attend-bar">
      <button type="button" class="submit-attendance" data-action="submit-attendance" ${submitted ? "disabled" : ""}>${submitted ? "Attendance submitted" : "Submit attendance"}</button>
      ${submitted ? `<button type="button" class="edit-attendance" data-action="edit-attendance">Edit</button>` : ""}
    </div>
    ${addModal}${submittedModal}
  </div>`;
}

function timetable() {
  const browse = state.role === "teacher";
  if (!browse && state.week < CURRENT_WEEK) state.week = CURRENT_WEEK;
  const extras = extrasForStudent(state.week);
  const catalog = browse ? CLASSES.concat(extraSessionsForWeek(state.week)) : classesForLevel(state.bookLevel).concat(extras);
  const calendar = `<div class="timetable-wrap">
    <div class="time-col">${TIMES.map((t) => `<p>${t}</p>`).join("")}</div>
    <div class="grid-scroll"><div class="grid">
      ${dayHeads(state.week).map((d, i) => `<p class="day" style="left:${17.7 + i * COL}px">${d}</p>`).join("")}
      ${[95, 203, 282, 392, 498, 603].map((top) => `<div class="hline" style="top:${top}px"></div>`).join("")}
      ${browse || state.bookLevel === 1 ? PRACTICE.map((p) => `<div class="slot practice" style="left:${LEFT + p.dayIndex * COL}px;top:${ROW_TOP[p.row - 1]}px${browse ? ";background:#cfe8e8" : ""}"><strong>Practice<br>Time</strong></div>`).join("") : ""}
      ${catalog.map((c) => {
        const enrolled = !browse && (c.extra || isEnrolled(c.id, state.week));
        const waitlisted = !browse && !c.extra && isWaitlisted(c.id, state.week);
        const fill = browse ? (c.teacher === "Onyx" ? "#fde698" : "#cfe8e8") : c.color;
        return `
        <button type="button" class="slot ${enrolled ? "is-booked" : ""}" data-action="${browse ? (c.extra ? "open-edit-booking" : "noop") : (c.extra ? "noop" : "open-class")}" data-id="${c.id}"
          style="left:${LEFT + c.dayIndex * COL}px;top:${ROW_TOP[c.row - 1] || 390}px;background:${fill}">
          <strong>${c.title}</strong><span>${c.teacher}</span>
          ${browse ? "" : enrolled ? `<span class="booked-flag">Booked</span>` : waitlisted ? `<span class="booked-flag">Waitlist</span>` : ""}
          ${browse || !c.full ? "" : `<span class="bell">${bellIcon("#04262a")}</span>`}
        </button>`;
      }).join("")}
    </div></div>
  </div>`;

  const sorted = catalog.slice().sort((a, b) => a.dayIndex - b.dayIndex || a.row - b.row);
  const groups = [];
  sorted.forEach((c) => {
    const date = dateLabelFor(state.week, c.dayIndex);
    const last = groups[groups.length - 1];
    if (!last || last.date !== date) groups.push({ date, rows: [c] });
    else last.rows.push(c);
  });
  const list = `<div class="list-book">${groups.map(({ date, rows }) => `
    <section>
      <p class="date-label">${date}</p>
      <div class="day-stack">
        ${rows.map((c) => {
          const enrolled = !browse && (c.extra || isEnrolled(c.id, state.week));
          const waitlisted = !browse && !c.extra && isWaitlisted(c.id, state.week);
          const right = browse
            ? ""
            : enrolled
              ? "Booked"
              : waitlisted
                ? "Waitlist"
                : c.full
                  ? `<span class="class-full">CLASS FULL</span>`
                  : classLevelLabel(c);
          return `
        <button type="button" class="class-row ${enrolled ? "is-booked" : ""} ${!browse && c.full && !enrolled ? "is-full" : ""}" data-action="${browse ? (c.extra ? "open-edit-booking" : "noop") : (c.extra ? "noop" : "open-class")}" data-id="${c.id}">
          <div class="pair">
            <div class="info"><strong>${c.title}</strong><br><em>${c.teacher}</em><br>${c.time.replace("1:00pm - 2:00pm", "1pm - 2pm")}${browse && c.students && c.students.length ? `<br><em>${escapeHtml(c.students.join(", "))}</em>` : ""}${browse && c.notes ? `<br><em>${escapeHtml(c.notes)}</em>` : ""}</div>
            ${browse ? "" : `<div class="status">${c.full && !enrolled && !waitlisted ? right : `<strong>${right}</strong>`}</div>`}
          </div>
          <div class="divider"></div>
        </button>`;
        }).join("")}
      </div>
    </section>`).join("")}</div>`;

  return `<div class="screen">
    <div class="page-heading">
      <button class="back" data-action="tab" data-tab="home" aria-label="Back"><img src="assets/back.svg" alt="" /></button>
      <h1>Timetable</h1>
      ${browse ? "<div></div>" : levelPicker()}
    </div>
    <div class="view-row">
      <div class="view-toggle">
        <button type="button" class="${state.view === "calendar" ? "active" : ""}" data-action="view" data-view="calendar" aria-label="Calendar view">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h2v2h6V3h2v2h3v16H4V5h3V3Zm11 6H6v10h12V9Z"/></svg>
          ${state.view === "calendar" ? '<span class="underline"></span>' : ""}
        </button>
        <button type="button" class="${state.view === "list" ? "active" : ""}" data-action="view" data-view="list" aria-label="List view">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z"/></svg>
          ${state.view === "list" ? '<span class="underline"></span>' : ""}
        </button>
      </div>
      <div class="view-week">${weekPicker(browse ? 1 : CURRENT_WEEK, { compact: true, withDates: true })}</div>
    </div>
    ${state.view === "calendar" ? calendar : list}
  </div>`;
}

function prettyDay(item) {
  return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][item.dayIndex] || item.weekday;
}

function detail() {
  const c = CLASSES.find((x) => x.id === state.classId);
  const label = dateLabelFor(state.week, c.dayIndex);
  const dateBits = label.replace(/^[A-Z]+ /, "");
  const booking = bookingFor(c.id, state.week);
  const enrolled = Boolean(booking);
  const onWaitlist = isWaitlisted(c.id, state.week);

  const hasCatchUp = catchUpCount() > 0;
  const bookModal = (state.modal === "book" && !enrolled && !c.full) ? `<div class="scrim" data-action="close-modal">
    <div class="modal" data-stop="true">
      <div class="modal-head"><img src="assets/logo.png" alt="" /><p>${state.bookingKind === "catch-up" ? "Catch Up Class" : state.bookingKind === "casual" ? "Casual Class Booking" : "Term Booking - Weekly Payment"}</p></div>
      <div class="copy">${c.title} With ${c.teacher}<br>Time: ${c.time.replace("pm - ", "-")}<br>Day: ${prettyDay(c)}s</div>
      <div class="totals">
        <p>Total: ${state.bookingKind === "catch-up" ? "1 Catch-up Credit" : state.bookingKind === "casual" ? "$40" : "$30 Per Week (10 Week Term)"}</p>
        <div class="line"></div>
        <div class="more"><span>More Details</span><span>›</span></div>
      </div>
      ${state.paid
        ? `<p class="copy">You’re booked in. See you on the pole.</p><button class="pay" data-action="go-home">Home</button>`
        : `<button class="pay" data-action="pay">${state.bookingKind === "catch-up" ? "Confirm" : "Pay Now"}</button><button class="cancel-link" data-action="close-modal">Cancel</button>`}
    </div>
  </div>` : "";

  const cancelModal = "";

  let actions;
  if (enrolled) {
    actions = `<div class="book-options">
      <p class="enrolled-note">You’re already booked into this class.</p>
      ${state.week >= CURRENT_WEEK ? `<button type="button" class="chip-cancel" data-action="ask-cancel" data-id="${c.id}" data-week="${state.week}">Cancel Class</button>` : ""}
    </div>`;
  } else if (c.full) {
    actions = `<div class="book-options">
      <button type="button" class="waitlist-row" data-action="toggle-waitlist" aria-pressed="${onWaitlist ? "true" : "false"}">
        <span class="waitlist-bell">${bellIcon("#0b5059")}</span>
        <span class="waitlist-copy"><strong>Join waitlist</strong><em>Get notified when a spot becomes available</em></span>
        <span class="toggle ${onWaitlist ? "is-on" : ""}"></span>
      </button>
    </div>`;
  } else {
    actions = `<div class="book-options">
        ${hasCatchUp
          ? `<button type="button" class="book-card ${state.bookingKind === "catch-up" ? "selected" : ""}" data-action="kind" data-kind="catch-up">
          <strong>Catch Up Class</strong><span>Use 1 credit</span>
        </button>`
          : `<button type="button" class="book-card ${state.bookingKind === "casual" ? "selected" : ""}" data-action="kind" data-kind="casual">
          <strong>Casual Class</strong><span>$40</span>
        </button>`}
        <button type="button" class="book-card ${state.bookingKind === "term" ? "selected" : ""}" data-action="kind" data-kind="term">
          <strong>Term Booking</strong><span class="row">$115 <span class="muted">7 weeks left</span></span>
        </button>
        <button class="pay" data-action="open-modal">Continue</button>
      </div>`;
  }

  return `<div class="screen">
    <div class="page-heading">
      <button class="back" data-action="close-class" aria-label="Back"><img src="assets/back.svg" alt="" /></button>
      <h1>Book Class</h1>
      <div></div>
    </div>
    <div class="hero">
      <img src="assets/ophidian.jpg" alt="" />
      ${onWaitlist ? `<div class="waitlist-banner">${sparkle()}<p>You’re on the waitlist! We will notify you if a spot becomes available!</p></div>` : ""}
    </div>
    <div class="detail-meta">
      <div>
        <h2>${c.title}</h2>
        <em>With ${c.teacher}</em>
        <p class="detail-when"><strong>${prettyDay(c)} ${dateBits}</strong><br>${c.time}</p>
        <p style="text-decoration:underline">${classLevelLabel(c)}</p>
      </div>
      <div class="when">
        ${c.full ? `<p class="class-full">CLASS FULL</p>` : `<p class="class-spots">${c.taken ?? 7}/10</p>`}
      </div>
    </div>
    <p class="detail-body">${c.description}</p>
    ${actions}
    ${bookModal}${cancelModal}
  </div>`;
}

function paymentScreen() {
  const c = CLASSES.find((x) => x.id === state.classId);
  if (!c) return "";
  const plan = PAY_PLANS.find((p) => p.id === state.payPlan) || PAY_PLANS[0];
  return `<div class="screen payment-screen">
    <div class="page-heading">
      <button class="back" data-action="close-payment" aria-label="Back"><img src="assets/back.svg" alt="" /></button>
      <h1>Book Class</h1>
      <div></div>
    </div>
    <div class="payment-body">
      <h2>Please select your payment:</h2>
      ${PAY_PLANS.map((p) => `
        <button type="button" class="pay-plan ${p.id === state.payPlan ? "is-selected" : ""}" data-action="set-pay-plan" data-plan="${p.id}">
          <strong>${p.title}</strong>
          <span>${p.copy}</span>
        </button>`).join("")}
      <div class="payment-total">
        <p>Total: ${plan.total}</p>
        <button type="button" class="event-more" data-action="toggle-pay-details">
          <span>More Details</span><span class="chevron ${state.payDetailsOpen ? "is-open" : ""}">⌄</span>
        </button>
        ${state.payDetailsOpen ? `<p class="event-extra">${plan.extra}</p>` : ""}
      </div>
      ${state.paid
        ? `<p class="enrolled-note">You’re booked in. See you on the pole.</p><button class="pay pay-now-fit" data-action="go-home">Home</button>`
        : `<button class="pay pay-now-fit" data-action="pay">Pay Now</button>
           <button class="cancel-link" data-action="close-payment">Cancel</button>`}
    </div>
  </div>`;
}

function isEventBooked(id) {
  return state.eventBookings.includes(id);
}

function events() {
  return `<div class="screen">
    <div class="page-heading"><div></div><h1>Events</h1><div></div></div>
    <div class="events">${EVENTS.map((e) => `
      <button type="button" class="event-card" data-action="open-event" data-id="${e.id}">
        <div class="event-photo">
          <img src="${e.photo}" alt="" />
          ${isEventBooked(e.id) ? `<span class="stamp">Booked</span>` : ""}
        </div>
        <div class="event-copy">
          <div class="when"><strong>${e.date}</strong><span>${e.day}</span><span>${e.time}</span></div>
          <p><strong>${e.headline}</strong> ${e.blurb}</p>
        </div>
      </button>`).join("")}</div>
  </div>`;
}

function eventDetail() {
  const e = EVENTS.find((x) => x.id === state.eventId);
  if (!e) return events();
  const booked = isEventBooked(e.id);
  return `<div class="screen event-detail">
    <div class="page-heading">
      <button class="back" data-action="close-event" aria-label="Back"><img src="assets/back.svg" alt="" /></button>
      <h1>Book Event</h1>
      <div></div>
    </div>
    <div class="hero event-hero"><img src="${e.photo}" alt="" /></div>
    <div class="event-info">
      <h2>${e.name}</h2>
      <p class="event-date">${e.day} ${e.date}</p>
      <p class="event-fact">${clockIcon()}<span>${e.time}</span></p>
      <p class="event-fact">${pinIcon()}<span>${e.venue}<br>${e.address}</span></p>
      <p class="event-desc">${e.description}</p>
    </div>
    <div class="event-map"><img src="assets/map.svg" alt="Map of The Golden Era Dance Studio" /></div>
    <div class="event-total">
      <p>Total: $${e.price}</p>
      <button type="button" class="event-more" data-action="toggle-event-details">
        <span>More Details</span><span class="chevron ${state.eventDetailsOpen ? "is-open" : ""}">⌄</span>
      </button>
      ${state.eventDetailsOpen ? `<p class="event-extra">${e.extra}</p>` : ""}
    </div>
    ${booked
      ? `<p class="enrolled-note event-booked-note">You’re booked in for this event.</p>`
      : `<button class="pay event-pay" data-action="pay-event">Pay Now</button>`}
  </div>`;
}

const LEVEL_INFO = [
  {
    n: 1,
    body: "The very first level of pole dancing — for absolute beginners, or anyone with minimal experience who’s had time off.",
    prereq: "None. Everyone starts in Level 1 unless they already have pole experience elsewhere.",
  },
  {
    n: 2,
    body: "Level 2 builds on the foundations from Level 1, with more spins and time on the pole.",
    prereq: "Spinning climb, sit, layout. Knee spin, hook spin, chair spin on both sides.",
  },
  {
    n: 3,
    body: "From Level 3 up, people often stay in a level for a while. The syllabus has different versions each term so you keep learning new things even if you repeat.",
    prereq: "Fan kick. Spinning climb, sit, layout, hello boys. Open leg Jamilla with correct form. Invert to V / straddle, handstand stag.",
  },
  {
    n: 4,
    body: "Level 4 is more aerial work and hangs, still with a syllabus that changes so repeating stays interesting.",
    prereq: "Bent leg layback. Ballerina spin. Aerial invert. Outside leg hang. Working on inside leg hang.",
  },
  {
    n: 5,
    body: "Level 5 is the next stage after Level 4. Advanced Technique is open to Level 4 and 5 only.",
    prereq: "Comfortable with Level 4 skills, and a chat with your teacher about whether you’re ready.",
  },
];

function clockIcon() {
  return `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 10.6 3.2 1.8-.8 1.4L11 13.2V6h2Z"/></svg>`;
}

function pinIcon() {
  return `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"/></svg>`;
}

function profile() {
  const prefs = [
    ["classReminders", "Class reminders"],
    ["waitlist", "Waitlist updates"],
    ["events", "Events & workshops"],
    ["studioNews", "Studio news"],
  ];
  return `<div class="screen">
    <div class="page-heading"><div></div><h1>Profile</h1><div></div></div>
    <div class="profile">
      <h2>Leah</h2>
      <p class="profile-studio">The Golden Era Dance Studio</p>

      <section class="profile-block">
        <h3>Email</h3>
        <p class="profile-email">${state.email}</p>
      </section>

      <section class="profile-block">
        <h3>Level</h3>
        <p class="profile-level-value">Level ${state.bookLevel}</p>
        <button type="button" class="profile-link" data-action="open-level-info">Information about levels</button>
      </section>

      <section class="profile-block">
        <h3>Notifications</h3>
        <div class="profile-prefs">
          ${prefs.map(([key, label]) => {
            const on = Boolean(state.notify[key]);
            return `<button type="button" class="pref-row ${on ? "is-on" : ""}" data-action="toggle-pref" data-pref="${key}" role="switch" aria-checked="${on}">
              <span>${label}</span>
              <span class="switch" aria-hidden="true"></span>
            </button>`;
          }).join("")}
        </div>
      </section>

      <button type="button" class="profile-delete" data-action="ask-delete">Delete account</button>
    </div>
  </div>`;
}

function levelGuide() {
  return `<div class="screen">
    <div class="page-heading">
      <button class="back" data-action="close-level-info" aria-label="Back"><img src="assets/back.svg" alt="" /></button>
      <h1>Levels</h1>
      <div></div>
    </div>
    <div class="profile level-guide">
      <p class="level-guide-intro">Pole classes are progressive, what you learn in level 1 becomes the foundation for level 2 and onwards. To level up, discuss your skills with your teacher or contact Lulu on 0134 123 123 or lulu@thegoldenera.com</p>
      ${LEVEL_INFO.map((level) => `
        <article class="level-card ${level.n === state.bookLevel ? "is-yours" : ""}">
          <h3>Level ${level.n}${level.n === state.bookLevel ? " · Yours" : ""}</h3>
          <p>${level.body}</p>
          <p class="level-prereq"><strong>Prerequisites</strong><br>${level.prereq}</p>
        </article>`).join("")}
    </div>
  </div>`;
}

function inbox() {
  return `<div class="screen">
    <div class="page-heading">
      <button class="back" data-action="close-inbox" aria-label="Back"><img src="assets/back.svg" alt="" /></button>
      <h1>Notifications</h1>
      <div></div>
    </div>
    <div class="inbox">
      ${NOTIFICATIONS.map((n) => `
        <article class="thread">
          <div class="thread-head">
            <div class="thread-avatar" aria-hidden="true">G</div>
            <div>
              <strong>${n.from}</strong>
              <span>${n.time}</span>
            </div>
          </div>
          <div class="thread-messages">
            <p class="bubble">${n.html}</p>
          </div>
        </article>`).join("")}
    </div>
  </div>`;
}

function render() {
  const keepProfileScroll = state.tab === "profile" && state.profileView !== "levels";
  const profileEl = document.querySelector(".profile:not(.level-guide)");
  const profileScroll = keepProfileScroll && profileEl ? profileEl.scrollTop : 0;
  const cls = CLASSES.find((c) => c.id === state.classId);
  const screen = cls
    ? (state.step === "payment" ? paymentScreen() : detail())
    : state.eventId ? eventDetail() : state.inboxOpen ? inbox() : state.teacherAddOpen ? teacherAddBooking() : state.teacherClassId ? teacherClass() : state.tab === "home" ? (state.role === "teacher" ? teacherHome() : home()) : state.tab === "book" ? timetable() : state.tab === "events" ? events() : state.profileView === "levels" ? levelGuide() : profile();
  document.getElementById("app").innerHTML = `<div class="phone-inner${state.role === "teacher" ? " is-teacher" : ""}">${statusBar()}${screen}${nav()}${cancelModals()}</div>`;
  const nextProfile = document.querySelector(".profile:not(.level-guide)");
  if (keepProfileScroll && nextProfile) nextProfile.scrollTop = profileScroll;
  applyStudentFocus();
}

document.getElementById("app").addEventListener("click", (e) => {
  const stop = e.target.closest("[data-stop]");
  const target = e.target.closest("[data-action]");
  if (e.target.closest(".scrim") && !stop) {
    state.modal = false;
    render();
    return;
  }
  if (!target) {
    let changed = false;
    if (state.addStudentSuggest != null && !e.target.closest(".student-suggest-wrap")) {
      state.addStudentSuggest = null;
      changed = true;
    }
    if (state.weekOpen || state.levelOpen) {
      state.weekOpen = false;
      state.levelOpen = false;
      changed = true;
    }
    if (changed) render();
    return;
  }
  const action = target.dataset.action;
  if (action === "tab") {
    const nextTab = target.dataset.tab;
    if (nextTab === "home" && state.tab !== "home") countHomeView();
    state.tab = nextTab;
    state.classId = null;
    state.eventId = null;
    state.weekOpen = false;
    state.levelOpen = false;
    state.mode = "book";
    state.modal = false;
    state.step = "class";
    state.profileView = null;
    state.inboxOpen = false;
    state.teacherClassId = null;
    state.teacherAddOpen = false;
    state.editingExtraId = null;
    if (state.tab === "book" && state.role !== "teacher" && state.week < CURRENT_WEEK) state.week = CURRENT_WEEK;
  } else if (action === "toggle-teacher") {
    state.role = state.role === "teacher" ? "student" : "teacher";
    state.tab = "home";
    state.weekOpen = false;
    state.inboxOpen = false;
    state.classId = null;
    state.eventId = null;
    state.teacherClassId = null;
    state.teacherAddOpen = false;
    state.editingExtraId = null;
    state.modal = false;
  } else if (action === "open-teacher-class") {
    state.teacherClassId = target.dataset.id;
    state.weekOpen = false;
  } else if (action === "close-teacher-class") {
    state.teacherClassId = null;
    state.modal = false;
  } else if (action === "open-add-booking") {
    state.teacherAddOpen = true;
    state.editingExtraId = null;
    state.addKind = "private";
    state.addDate = isoFromUtc(utcDate(state.week, 0));
    state.addStart = "13:00";
    state.addEnd = "14:00";
    state.addNotes = "";
    state.addStudents = [""];
    state.addStudentSuggest = null;
    state.weekOpen = false;
  } else if (action === "open-edit-booking") {
    const extra = (state.teacherExtras || []).find((x) => x.id === target.dataset.id);
    if (!extra) return;
    state.teacherAddOpen = true;
    state.editingExtraId = extra.id;
    state.addKind = extra.kind === "practice" ? "practice" : "private";
    state.addDate = isoFromUtc(utcDate(extra.week, extra.dayIndex));
    state.addStart = extra.start || "13:00";
    state.addEnd = extra.end || (extra.start ? addHour(extra.start) : "14:00");
    state.addNotes = extra.notes || "";
    state.addStudents = extra.students && extra.students.length ? extra.students.slice() : [""];
    state.addStudentSuggest = null;
    state.weekOpen = false;
  } else if (action === "close-add-booking") {
    state.teacherAddOpen = false;
    state.editingExtraId = null;
    state.addStudentSuggest = null;
  } else if (action === "set-add-kind") {
    state.addKind = target.dataset.kind === "practice" ? "practice" : "private";
    if (state.addKind === "private" && !(state.addStudents && state.addStudents.length)) state.addStudents = [""];
    state.addStudentSuggest = null;
  } else if (action === "add-private-student") {
    const names = (state.addStudents && state.addStudents.length ? state.addStudents : [""]).slice();
    names.push("");
    state.addStudents = names;
    state.addStudentSuggest = names.length - 1;
    pendingStudentFocus = { index: names.length - 1, caret: 0 };
  } else if (action === "pick-student") {
    const i = Number(target.dataset.index);
    const list = (state.addStudents && state.addStudents.length ? state.addStudents : [""]).slice();
    list[i] = canonicalStudentName(target.dataset.name || "");
    state.addStudents = list;
    state.addStudentSuggest = null;
  } else if (action === "save-add-booking") {
    const form = target.closest(".add-booking");
    const date = (form && form.querySelector('[data-field="add-date"]')?.value) || state.addDate;
    const start = (form && form.querySelector('[data-field="add-start"]')?.value) || state.addStart;
    const endRaw = (form && form.querySelector('[data-field="add-end"]')?.value) || state.addEnd;
    const notes = (form && form.querySelector('[data-field="add-notes"]')?.value) || state.addNotes || "";
    const students = (form
      ? [...form.querySelectorAll('[data-field="add-student"]')].map((el) => canonicalStudentName(el.value))
      : (state.addStudents || []).map(canonicalStudentName)
    ).filter(Boolean);
    if (!date || !start) return;
    const end = !endRaw || minutesOf(endRaw) <= minutesOf(start) ? addHour(start) : endRaw;
    if (slotTaken(date, start, end, state.editingExtraId)) return;
    state.addDate = date;
    state.addStart = start;
    state.addEnd = end;
    state.addNotes = notes;
    const { week, dayIndex } = weekAndDayFromISO(date);
    const entry = {
      id: state.editingExtraId || `extra-${Date.now()}`,
      kind: state.addKind === "practice" ? "practice" : "private",
      week,
      dayIndex,
      row: rowFromTime(start),
      start,
      end,
      timeLabel: timeRangeLabel(start, end),
      notes: notes.trim(),
      students: state.addKind === "practice" ? [] : students,
    };
    const editing = Boolean(state.editingExtraId);
    if (editing) {
      state.teacherExtras = (state.teacherExtras || []).map((x) => (x.id === state.editingExtraId ? entry : x));
    } else {
      state.teacherExtras = (state.teacherExtras || []).concat(entry);
    }
    state.teacherAddOpen = false;
    state.editingExtraId = null;
    state.addStudentSuggest = null;
    state.tab = editing ? "home" : "book";
    if (week >= 1 && week <= 10) state.week = week;
    state.weekOpen = false;
  } else if (action === "ask-delete-session") {
    if (!state.editingExtraId) return;
    state.modal = "delete-session";
  } else if (action === "confirm-delete-session") {
    if (!state.editingExtraId) return;
    state.teacherExtras = (state.teacherExtras || []).filter((x) => x.id !== state.editingExtraId);
    state.teacherAddOpen = false;
    state.editingExtraId = null;
    state.modal = false;
    state.tab = "home";
    state.weekOpen = false;
  } else if (action === "toggle-mark") {
    if (state.attendanceSubmitted[attendanceKey(state.teacherClassId, "_all")]) return;
    const key = attendanceKey(state.teacherClassId, target.dataset.name);
    state.teacherMarks[key] = state.teacherMarks[key] === "present" ? "" : "present";
  } else if (action === "submit-attendance") {
    if (!state.teacherClassId) return;
    state.attendanceSubmitted[attendanceKey(state.teacherClassId, "_all")] = true;
    state.modal = "attendance-success";
  } else if (action === "edit-attendance") {
    if (!state.teacherClassId) return;
    delete state.attendanceSubmitted[attendanceKey(state.teacherClassId, "_all")];
  } else if (action === "ask-add-student") {
    if (state.attendanceSubmitted[attendanceKey(state.teacherClassId, "_all")]) return;
    state.newStudentName = "";
    state.newStudentNotes = "";
    state.modal = "add-student";
  } else if (action === "confirm-add-student") {
    if (state.attendanceSubmitted[attendanceKey(state.teacherClassId, "_all")]) return;
    const name = (state.newStudentName || "").trim();
    const notes = (state.newStudentNotes || "").trim();
    if (name && state.teacherClassId) {
      const list = state.addedStudents[state.teacherClassId] || [];
      if (!teacherRoster(state.teacherClassId).some((s) => s.name.toLowerCase() === name.toLowerCase())) {
        state.addedStudents[state.teacherClassId] = list.concat({ name, notes });
      }
    }
    state.newStudentName = "";
    state.newStudentNotes = "";
    state.modal = false;
  } else if (action === "toggle-week") {
    state.weekOpen = !state.weekOpen;
    state.levelOpen = false;
  } else if (action === "set-week") {
    const next = Number(target.dataset.week);
    if (!(state.tab === "book" && state.role !== "teacher" && next < CURRENT_WEEK)) state.week = next;
    state.weekOpen = false;
  } else if (action === "toggle-level") {
    state.levelOpen = !state.levelOpen;
    state.weekOpen = false;
  } else if (action === "set-level") {
    state.bookLevel = Number(target.dataset.level);
    state.levelOpen = false;
  } else if (action === "open-inbox") {
    state.inboxOpen = true;
    state.inboxRead = true;
    state.weekOpen = false;
  } else if (action === "close-inbox") {
    state.inboxOpen = false;
  } else if (action === "open-class") {
    if ((state.teacherExtras || []).some((x) => x.id === target.dataset.id)) return;
    state.classId = target.dataset.id;
    state.bookingKind = catchUpCount() > 0 ? "catch-up" : "casual";
    state.modal = false;
    state.paid = false;
    state.weekOpen = false;
    state.mode = "book";
    state.step = "class";
    state.payPlan = "weekly";
    state.payDetailsOpen = false;
  } else if (action === "toggle-expand") {
    state.expandedId = state.expandedId === target.dataset.id ? null : target.dataset.id;
  } else if (action === "expand-day") {
    const ids = (target.dataset.ids || "").split(",").filter(Boolean);
    if (!ids.length) return;
    state.expandedId = ids.includes(state.expandedId) ? null : ids[0];
  } else if (action === "ask-cancel") {
    const week = Number(target.dataset.week);
    if (week < CURRENT_WEEK) return;
    state.cancelClassId = target.dataset.id;
    state.cancelWeek = week;
    state.modal = state.classId ? "book-cancel" : "cancel-confirm";
  } else if (action === "rebook") {
    const classId = target.dataset.id;
    const week = Number(target.dataset.week);
    if (week < CURRENT_WEEK) return;
    state.cancellations = state.cancellations.filter((x) => !(x.classId === classId && Number(x.week) === week));
    state.rebookFlashes = state.rebookFlashes.filter((x) => !(x.classId === classId && Number(x.week) === week));
    state.rebookFlashes.push({ classId, week, seen: 1 });
    state.modal = "rebook-success";
  } else if (action === "noop") {
    return;
  } else if (action === "open-event") {
    state.eventId = target.dataset.id;
    state.eventDetailsOpen = false;
    state.paid = false;
    state.inboxOpen = false;
    state.tab = "events";
  } else if (action === "close-event") {
    state.eventId = null;
    state.eventDetailsOpen = false;
  } else if (action === "toggle-event-details") {
    state.eventDetailsOpen = !state.eventDetailsOpen;
  } else if (action === "pay-event") {
    if (state.eventId && !isEventBooked(state.eventId)) state.eventBookings.push(state.eventId);
  } else if (action === "close-class") {
    state.classId = null;
    state.mode = "book";
    state.modal = false;
    state.step = "class";
    state.paid = false;
  } else if (action === "close-payment") {
    state.step = "class";
    state.paid = false;
    state.payDetailsOpen = false;
  } else if (action === "set-pay-plan") {
    state.payPlan = target.dataset.plan;
  } else if (action === "toggle-pay-details") {
    state.payDetailsOpen = !state.payDetailsOpen;
  } else if (action === "view") {
    state.view = target.dataset.view;
  } else if (action === "toggle-waitlist") {
    const classId = state.classId;
    const week = state.week;
    if (!classId) return;
    if (isWaitlisted(classId, week)) {
      state.waitlists = state.waitlists.filter((x) => !(x.classId === classId && Number(x.week) === Number(week)));
    } else {
      state.waitlists.push({ classId, week });
    }
  } else if (action === "kind") {
    if (isEnrolled(state.classId, state.week)) return;
    const cls = CLASSES.find((x) => x.id === state.classId);
    if (cls?.full) return;
    state.bookingKind = target.dataset.kind;
  } else if (action === "open-modal") {
    if (isEnrolled(state.classId, state.week)) return;
    const cls = CLASSES.find((x) => x.id === state.classId);
    if (cls?.full) return;
    if (state.bookingKind === "term") {
      state.step = "payment";
      state.payPlan = "weekly";
      state.paid = false;
      state.payDetailsOpen = false;
    } else {
      state.modal = "book";
      state.paid = false;
    }
  } else if (action === "close-modal") {
    state.modal = false;
  } else if (action === "confirm-cancel") {
    confirmCancel();
    state.modal = state.classId ? false : "cancel-success";
  } else if (action === "pay") {
    if (isEnrolled(state.classId, state.week)) return;
    state.paid = true;
    commitBooking();
  } else if (action === "open-level-info") {
    state.profileView = "levels";
  } else if (action === "close-level-info") {
    state.profileView = null;
  } else if (action === "toggle-pref") {
    const key = target.dataset.pref;
    if (key && Object.prototype.hasOwnProperty.call(state.notify, key)) {
      state.notify[key] = !state.notify[key];
      const on = state.notify[key];
      target.classList.toggle("is-on", on);
      target.setAttribute("aria-checked", String(on));
    }
    return;
  } else if (action === "ask-delete") {
    state.modal = "delete-account";
  } else if (action === "go-home") {
    if (state.tab !== "home" || state.classId || state.eventId || state.inboxOpen) countHomeView();
    state.tab = "home";
    state.classId = null;
    state.eventId = null;
    state.teacherClassId = null;
    state.teacherAddOpen = false;
    state.editingExtraId = null;
    state.modal = false;
    state.paid = false;
    state.mode = "book";
    state.weekOpen = false;
    state.step = "class";
    state.inboxOpen = false;
  }
  render();
});

document.getElementById("app").addEventListener("input", (e) => {
  if (e.target.dataset.field === "new-student") state.newStudentName = e.target.value;
  if (e.target.dataset.field === "new-student-notes") state.newStudentNotes = e.target.value;
  if (e.target.dataset.field === "add-date") {
    state.addDate = e.target.value;
    refreshSlotTakenUI();
  }
  if (e.target.dataset.field === "add-start") {
    state.addStart = e.target.value;
    refreshSlotTakenUI();
  }
  if (e.target.dataset.field === "add-end") {
    state.addEnd = e.target.value;
    refreshSlotTakenUI();
  }
  if (e.target.dataset.field === "add-notes") state.addNotes = e.target.value;
  if (e.target.dataset.field === "add-student") {
    const i = Number(e.target.dataset.index);
    const list = (state.addStudents && state.addStudents.length ? state.addStudents : [""]).slice();
    list[i] = e.target.value;
    state.addStudents = list;
    state.addStudentSuggest = i;
    pendingStudentFocus = { index: i, caret: e.target.selectionStart };
    render();
  }
});
document.getElementById("app").addEventListener("focusin", (e) => {
  if (e.target.dataset.field !== "add-student") return;
  const i = Number(e.target.dataset.index);
  if (state.addStudentSuggest === i) return;
  state.addStudentSuggest = i;
  pendingStudentFocus = { index: i, caret: e.target.selectionStart };
  render();
});
document.getElementById("app").addEventListener("change", (e) => {
  if (e.target.dataset.field === "add-date") {
    state.addDate = e.target.value;
    refreshSlotTakenUI();
  }
  if (e.target.dataset.field === "add-start") {
    state.addStart = e.target.value;
    refreshSlotTakenUI();
  }
  if (e.target.dataset.field === "add-end") {
    state.addEnd = e.target.value;
    refreshSlotTakenUI();
  }
});

render();
