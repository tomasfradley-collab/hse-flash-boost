export interface HSETopic {
  id: string;
  category: string;
  categoryId: number;
  title: string;
  description: string;
  advice: string;
  videoUrl: string;
  okImage: string;
  nokImage: string;
}

// Import all topic images
import fallsHeightOk from "@/assets/topics/falls-height-ok.jpg";
import fallsHeightNok from "@/assets/topics/falls-height-nok.jpg";
import slipsTripsOk from "@/assets/topics/slips-trips-ok.jpg";
import slipsTripsNok from "@/assets/topics/slips-trips-nok.jpg";
import movingObjectsOk from "@/assets/topics/moving-objects-ok.jpg";
import movingObjectsNok from "@/assets/topics/moving-objects-nok.jpg";
import manualHandlingOk from "@/assets/topics/manual-handling-ok.jpg";
import manualHandlingNok from "@/assets/topics/manual-handling-nok.jpg";
import hazardousSubstancesOk from "@/assets/topics/hazardous-substances-ok.jpg";
import hazardousSubstancesNok from "@/assets/topics/hazardous-substances-nok.jpg";
import noiseOk from "@/assets/topics/noise-ok.jpg";
import noiseNok from "@/assets/topics/noise-nok.jpg";
import workplaceStressOk from "@/assets/topics/workplace-stress-ok.jpg";
import workplaceStressNok from "@/assets/topics/workplace-stress-nok.jpg";
import havsOk from "@/assets/topics/havs-ok.jpg";
import havsNok from "@/assets/topics/havs-nok.jpg";
import electricalHazardsOk from "@/assets/topics/electrical-hazards-ok.jpg";
import electricalHazardsNok from "@/assets/topics/electrical-hazards-nok.jpg";
import fireHazardsOk from "@/assets/topics/fire-hazards-ok.jpg";
import fireHazardsNok from "@/assets/topics/fire-hazards-nok.jpg";
import collapsesOk from "@/assets/topics/collapses-ok.jpg";
import collapsesNok from "@/assets/topics/collapses-nok.jpg";
import stressDemandsOk from "@/assets/topics/stress-demands-ok.jpg";
import stressDemandsNok from "@/assets/topics/stress-demands-nok.jpg";
import stressControlOk from "@/assets/topics/stress-control-ok.jpg";
import stressControlNok from "@/assets/topics/stress-control-nok.jpg";
import stressSupportOk from "@/assets/topics/stress-support-ok.jpg";
import stressSupportNok from "@/assets/topics/stress-support-nok.jpg";
import stressRelationshipsOk from "@/assets/topics/stress-relationships-ok.jpg";
import stressRelationshipsNok from "@/assets/topics/stress-relationships-nok.jpg";
import stressRoleOk from "@/assets/topics/stress-role-ok.jpg";
import stressRoleNok from "@/assets/topics/stress-role-nok.jpg";
import stressChangeOk from "@/assets/topics/stress-change-ok.jpg";
import stressChangeNok from "@/assets/topics/stress-change-nok.jpg";
import anxietyPressureOk from "@/assets/topics/anxiety-pressure-ok.jpg";
import anxietyPressureNok from "@/assets/topics/anxiety-pressure-nok.jpg";
import anxietyControlOk from "@/assets/topics/anxiety-control-ok.jpg";
import anxietyControlNok from "@/assets/topics/anxiety-control-nok.jpg";
import anxietySupportOk from "@/assets/topics/anxiety-support-ok.jpg";
import anxietySupportNok from "@/assets/topics/anxiety-support-nok.jpg";
import depressionChronicStressOk from "@/assets/topics/depression-chronic-stress-ok.jpg";
import depressionChronicStressNok from "@/assets/topics/depression-chronic-stress-nok.jpg";
import depressionTraumaOk from "@/assets/topics/depression-trauma-ok.jpg";
import depressionTraumaNok from "@/assets/topics/depression-trauma-nok.jpg";
import depressionBereavementOk from "@/assets/topics/depression-bereavement-ok.jpg";
import depressionBereavementNok from "@/assets/topics/depression-bereavement-nok.jpg";
import depressionIsolationOk from "@/assets/topics/depression-isolation-ok.jpg";
import depressionIsolationNok from "@/assets/topics/depression-isolation-nok.jpg";
import depressionGeneticsOk from "@/assets/topics/depression-genetics-ok.jpg";
import depressionGeneticsNok from "@/assets/topics/depression-genetics-nok.jpg";
import depressionDiscriminationOk from "@/assets/topics/depression-discrimination-ok.jpg";
import depressionDiscriminationNok from "@/assets/topics/depression-discrimination-nok.jpg";
import depressionPovertyOk from "@/assets/topics/depression-poverty-ok.jpg";
import depressionPovertyNok from "@/assets/topics/depression-poverty-nok.jpg";
import depressionNutritionOk from "@/assets/topics/depression-nutrition-ok.jpg";
import depressionNutritionNok from "@/assets/topics/depression-nutrition-nok.jpg";

export const hseTopics: HSETopic[] = [
  // Category 1: Safety at Work
  {
    id: "falls-height",
    category: "Safety at Work",
    categoryId: 1,
    title: "Falls from Height",
    description: "Falls from height are the most common cause of fatal accidents in the construction industry. Working at height includes any work where a person could fall a distance liable to cause personal injury, even if it is at or below ground level. This includes working on ladders, scaffolding, roofs, or near excavations.",
    advice: "Always use proper fall protection equipment including harnesses, guardrails, and safety nets. Ensure all equipment is inspected regularly. Never work at height without proper training and authorization. Use scaffolding and platforms that are properly erected and maintained.",
    videoUrl: "https://www.youtube.com/watch?v=PxVFsqwfBQQ",
    okImage: fallsHeightOk,
    nokImage: fallsHeightNok
  },
  {
    id: "slips-trips",
    category: "Safety at Work",
    categoryId: 1,
    title: "Slips, Trips, and Falls",
    description: "Slips, trips, and falls are a leading cause of non-fatal workplace injuries. These incidents occur due to wet or contaminated floors, uneven surfaces, poor lighting, trailing cables, or cluttered walkways. They can result in serious injuries including fractures, sprains, and head injuries.",
    advice: "Keep all walkways clear and well-lit. Clean up spills immediately and use warning signs. Wear appropriate non-slip footwear. Secure cables and hoses. Maintain good housekeeping practices. Report and repair uneven surfaces promptly.",
    videoUrl: "https://www.youtube.com/watch?v=VqMDiZV10yM",
    okImage: slipsTripsOk,
    nokImage: slipsTripsNok
  },
  {
    id: "moving-objects",
    category: "Safety at Work",
    categoryId: 1,
    title: "Moving Objects",
    description: "Injuries and fatalities caused by moving vehicles, machinery, or falling objects are significant workplace hazards. This includes being struck by vehicles, caught in machinery, or hit by falling materials. These incidents often result in severe injuries or death.",
    advice: "Always wear high-visibility clothing in areas with vehicle movement. Stay alert and maintain safe distances from moving machinery. Use designated walkways. Ensure proper signage and barriers are in place. Secure all materials to prevent falls. Never bypass machine guards.",
    videoUrl: "https://www.youtube.com/watch?v=0VZAqqP-BXI",
    okImage: movingObjectsOk,
    nokImage: movingObjectsNok
  },
  {
    id: "manual-handling",
    category: "Safety at Work",
    categoryId: 1,
    title: "Manual Handling",
    description: "Manual handling causes musculoskeletal disorders and injuries, particularly in construction and logistics. This includes lifting, lowering, pushing, pulling, or carrying objects. Poor manual handling techniques can lead to back injuries, muscle strains, and long-term health problems.",
    advice: "Use mechanical aids whenever possible. Assess loads before lifting. Use proper lifting techniques - bend your knees, keep your back straight, and lift with your legs. Get help for heavy or awkward loads. Take regular breaks and rotate tasks to avoid repetitive strain.",
    videoUrl: "https://www.youtube.com/watch?v=4ApBCB9RYDE",
    okImage: manualHandlingOk,
    nokImage: manualHandlingNok
  },
  {
    id: "hazardous-substances",
    category: "Safety at Work",
    categoryId: 1,
    title: "Hazardous Substances",
    description: "Exposure to hazardous substances like asbestos, silica dust, chemicals, fumes, and airborne toxins can lead to serious respiratory diseases and other health problems. Long-term exposure can cause cancer, lung diseases, and other chronic conditions.",
    advice: "Always use appropriate PPE including respirators and protective clothing. Ensure adequate ventilation in work areas. Follow safety data sheets for all chemicals. Store hazardous materials properly. Participate in health surveillance programs. Report any health concerns immediately.",
    videoUrl: "https://www.youtube.com/watch?v=FTNqceA0oh8",
    okImage: hazardousSubstancesOk,
    nokImage: hazardousSubstancesNok
  },
  {
    id: "noise",
    category: "Safety at Work",
    categoryId: 1,
    title: "Noise Exposure",
    description: "Excessive noise from machinery and tools causes long-term hearing damage and can contribute to stress and reduced concentration. Prolonged exposure to high noise levels can result in permanent hearing loss, tinnitus, and other hearing disorders.",
    advice: "Wear appropriate hearing protection in high-noise areas. Use ear plugs or ear muffs as required. Maintain equipment to reduce noise levels. Take regular breaks from noisy environments. Participate in hearing tests and monitoring programs. Report any hearing problems early.",
    videoUrl: "https://www.youtube.com/watch?v=mXxYDP3KDZQ",
    okImage: noiseOk,
    nokImage: noiseNok
  },
  {
    id: "workplace-stress",
    category: "Safety at Work",
    categoryId: 1,
    title: "Workplace Stress",
    description: "Stress is a growing concern in workplaces, leading to poor mental health, reduced productivity, and increased accident risk. Work-related stress can result from excessive workload, lack of control, poor relationships, or unclear roles.",
    advice: "Communicate openly with supervisors about workload concerns. Take regular breaks throughout the day. Use available employee assistance programs. Practice stress management techniques. Maintain work-life balance. Support colleagues and foster a positive work environment.",
    videoUrl: "https://www.youtube.com/watch?v=hnpQrMqDoqE",
    okImage: workplaceStressOk,
    nokImage: workplaceStressNok
  },
  {
    id: "havs",
    category: "Safety at Work",
    categoryId: 1,
    title: "Hand-Arm Vibration Syndrome (HAVS)",
    description: "HAVS results from prolonged use of vibrating handheld tools and equipment. It causes damage to blood vessels, nerves, and joints in the hands and arms, leading to numbness, tingling, loss of grip strength, and in severe cases, permanent disability.",
    advice: "Limit exposure time to vibrating tools. Take regular breaks. Use anti-vibration gloves and tools with vibration-reducing features. Maintain tools properly to minimize vibration. Keep hands warm to maintain good circulation. Report symptoms early for medical assessment.",
    videoUrl: "https://www.youtube.com/watch?v=8YQJsXBQDHQ",
    okImage: havsOk,
    nokImage: havsNok
  },
  {
    id: "electrical-hazards",
    category: "Safety at Work",
    categoryId: 1,
    title: "Electrical Hazards",
    description: "Electrical hazards present risks of electrocution, burns, and fires. Contact with live electrical equipment or faulty wiring can result in serious injury or death. Even low voltage electricity can be fatal in certain conditions.",
    advice: "Only qualified electricians should work on electrical systems. Always assume cables are live until proven otherwise. Use lockout/tagout procedures. Regularly inspect electrical equipment and cords. Keep electrical equipment away from water. Use residual current devices (RCDs) for protection.",
    videoUrl: "https://www.youtube.com/watch?v=pSSqJ910grs",
    okImage: electricalHazardsOk,
    nokImage: electricalHazardsNok
  },
  {
    id: "fire-hazards",
    category: "Safety at Work",
    categoryId: 1,
    title: "Fire Hazards",
    description: "Fire risks exist in various workplaces from combustible materials, hot work, electrical faults, or chemical reactions. Fires can spread rapidly, causing injuries, fatalities, and significant property damage. Explosions can occur with certain materials.",
    advice: "Keep fire exits clear and accessible. Know evacuation procedures and assembly points. Store flammable materials properly. Use hot work permits and fire watches. Maintain fire extinguishers and detection systems. Never block fire doors. Conduct regular fire drills.",
    videoUrl: "https://www.youtube.com/watch?v=7qDin4YbC3c",
    okImage: fireHazardsOk,
    nokImage: fireHazardsNok
  },
  {
    id: "collapses",
    category: "Safety at Work",
    categoryId: 1,
    title: "Structural Collapses",
    description: "Unintended collapses of structures, trenches, scaffolding, or excavations can trap or crush workers, often resulting in fatalities. These incidents occur due to inadequate shoring, poor ground conditions, or structural failures.",
    advice: "Ensure proper shoring and support systems for excavations and structures. Conduct competent ground assessments. Follow engineering specifications. Never enter unsupported trenches deeper than 1.2m. Inspect scaffolding before use. Evacuate areas showing signs of structural distress immediately.",
    videoUrl: "https://www.youtube.com/watch?v=3q1hFXEwxkQ",
    okImage: collapsesOk,
    nokImage: collapsesNok
  },

  // Category 2: Mental Health - Stress and Anxiety
  {
    id: "stress-demands",
    category: "Mental Health - Stress",
    categoryId: 2,
    title: "Work Demands and Pressure",
    description: "Excessive pressure to cope with workload and job demands is a major source of workplace stress. When demands consistently exceed a person's capacity to cope, it leads to chronic stress, burnout, and mental health problems. This includes unrealistic deadlines, too much responsibility, and inadequate resources.",
    advice: "Break large tasks into manageable steps. Prioritize tasks and communicate realistic timelines. Don't be afraid to ask for help or additional resources. Learn to say no when workload becomes unmanageable. Discuss concerns with your manager early. Use time management techniques.",
    videoUrl: "https://www.youtube.com/watch?v=0fL-pn80s-c",
    okImage: stressDemandsOk,
    nokImage: stressDemandsNok
  },
  {
    id: "stress-control",
    category: "Mental Health - Stress",
    categoryId: 2,
    title: "Lack of Control",
    description: "A lack of control or input into how work is done is a significant stress factor. When workers have no say in decision-making, work methods, or pace of work, it increases feelings of helplessness and stress. This includes micromanagement and rigid procedures that don't account for worker expertise.",
    advice: "Discuss with your supervisor about having more input in your work. Suggest improvements based on your experience. Seek clarification on areas where you do have autonomy. Focus on aspects you can control. Join committees or working groups to have a voice in decisions.",
    videoUrl: "https://www.youtube.com/watch?v=JpIzr7rn7RQ",
    okImage: stressControlOk,
    nokImage: stressControlNok
  },
  {
    id: "stress-support",
    category: "Mental Health - Stress",
    categoryId: 2,
    title: "Insufficient Support",
    description: "Insufficient information or support from management and colleagues creates stress and uncertainty. This includes lack of training, unclear instructions, unavailable supervision, and poor team relationships. Without adequate support, workers feel isolated and unable to perform their roles effectively.",
    advice: "Build positive relationships with colleagues. Ask questions when unclear about tasks. Seek mentoring or coaching opportunities. Use available employee assistance programs. Offer support to colleagues in return. Attend team meetings and social events to strengthen workplace connections.",
    videoUrl: "https://www.youtube.com/watch?v=3T2pWZeRNUk",
    okImage: stressSupportOk,
    nokImage: stressSupportNok
  },
  {
    id: "stress-relationships",
    category: "Mental Health - Stress",
    categoryId: 2,
    title: "Workplace Relationships",
    description: "Issues with workplace relationships, including bullying, harassment, and conflict, severely impact mental health. Poor relationships create a toxic work environment, leading to anxiety, depression, and reduced job satisfaction. Bullying can cause lasting psychological harm.",
    advice: "Treat all colleagues with respect and dignity. Report bullying or harassment immediately through proper channels. Document incidents with dates and details. Seek support from HR or employee assistance programs. Don't suffer in silence - speak up about relationship issues. Practice assertive communication.",
    videoUrl: "https://www.youtube.com/watch?v=TJzv_zixQJg",
    okImage: stressRelationshipsOk,
    nokImage: stressRelationshipsNok
  },
  {
    id: "stress-role",
    category: "Mental Health - Stress",
    categoryId: 2,
    title: "Role Clarity",
    description: "An unclear or poorly defined role and responsibilities causes stress and confusion. When expectations are ambiguous, workers don't know what's expected of them, leading to anxiety about performance and conflicts with colleagues over responsibilities. Role conflict occurs when competing demands are placed on workers.",
    advice: "Request a clear job description and review it regularly. Clarify expectations with your supervisor. Document agreed responsibilities. Raise concerns about conflicting demands early. Participate in performance reviews to align expectations. Ask for role clarity during organizational changes.",
    videoUrl: "https://www.youtube.com/watch?v=RWMNFkp8xNQ",
    okImage: stressRoleOk,
    nokImage: stressRoleNok
  },
  {
    id: "stress-change",
    category: "Mental Health - Stress",
    categoryId: 2,
    title: "Organizational Change",
    description: "A lack of engagement or support during organizational change causes significant stress. Changes to structure, processes, or personnel create uncertainty about job security, role changes, and future direction. Poor change management amplifies stress and resistance.",
    advice: "Stay informed by attending briefings and reading communications. Ask questions about how changes affect you. Focus on what you can control during transitions. Be open to new ways of working. Support colleagues through change. Provide feedback through appropriate channels. Seek clarity on your role post-change.",
    videoUrl: "https://www.youtube.com/watch?v=KtPv2ydZGEo",
    okImage: stressChangeOk,
    nokImage: stressChangeNok
  },
  {
    id: "anxiety-pressure",
    category: "Mental Health - Anxiety",
    categoryId: 2,
    title: "Excessive Work Pressure",
    description: "Too much demand or pressure at work leads to anxiety and panic. This includes impossible deadlines, constant interruptions, high-stakes decisions, and performance pressure. When pressure is unrelenting, it triggers anxiety symptoms including racing heart, sweating, and difficulty concentrating.",
    advice: "Practice deep breathing and relaxation techniques. Break overwhelming tasks into smaller steps. Communicate early when deadlines are unrealistic. Take short breaks to reset. Use stress balls or fidget tools. Consider anxiety management training. Seek professional help if anxiety persists.",
    videoUrl: "https://www.youtube.com/watch?v=WWloIAQpMcQ",
    okImage: anxietyPressureOk,
    nokImage: anxietyPressureNok
  },
  {
    id: "anxiety-control",
    category: "Mental Health - Anxiety",
    categoryId: 2,
    title: "Loss of Control and Anxiety",
    description: "Lack of control over work or environment is a known factor that increases stress and anxiety. Uncertainty about what will happen next, inability to influence decisions, and feeling powerless create persistent anxiety. This is particularly acute during organizational changes or when facing new situations.",
    advice: "Identify areas where you do have control and focus there. Create routines and structures that provide stability. Use planning tools to increase sense of control. Learn anxiety management techniques. Share concerns with trusted colleagues or professionals. Remember that some uncertainty is normal.",
    videoUrl: "https://www.youtube.com/watch?v=ZidGozDhOjg",
    okImage: anxietyControlOk,
    nokImage: anxietyControlNok
  },
  {
    id: "anxiety-support",
    category: "Mental Health - Anxiety",
    categoryId: 2,
    title: "Poor Support and Anxiety",
    description: "Insufficient support from managers or colleagues contributes to anxiety. Feeling alone in facing challenges, having no one to turn to for guidance, and lacking emotional support amplifies anxiety symptoms. Isolation at work makes anxiety worse and harder to manage.",
    advice: "Build a support network at work. Don't be afraid to ask for help when anxious. Use employee assistance programs for professional support. Practice self-compassion rather than self-criticism. Share appropriate concerns with your supervisor. Join peer support groups if available.",
    videoUrl: "https://www.youtube.com/watch?v=xfsLxWxlZpw",
    okImage: anxietySupportOk,
    nokImage: anxietySupportNok
  },

  // Category 3: Mental Health - Depression
  {
    id: "depression-chronic-stress",
    category: "Mental Health - Depression",
    categoryId: 3,
    title: "Chronic Workplace Stress",
    description: "Long-term, high-level stress can significantly impact mental well-being and lead to depression. When stress is unrelenting without relief or recovery time, it depletes mental resources and can trigger depressive episodes. Chronic workplace stress affects mood, motivation, and ability to function.",
    advice: "Recognize early warning signs including persistent low mood, fatigue, and loss of interest. Seek professional help early - depression is treatable. Use all available leave and breaks for recovery. Consider adjustments to work arrangements. Engage in activities outside work that bring joy. Don't try to power through - get help.",
    videoUrl: "https://www.youtube.com/watch?v=z-IR48Mb3W0",
    okImage: depressionChronicStressOk,
    nokImage: depressionChronicStressNok
  },
  {
    id: "depression-trauma",
    category: "Mental Health - Depression",
    categoryId: 3,
    title: "Workplace Trauma and Abuse",
    description: "Experiences of trauma or abuse in the workplace are strong risk factors for depression. This includes witnessing serious incidents, experiencing violence or threats, severe bullying, or harassment. Workplace trauma can have lasting psychological effects and trigger or worsen depression.",
    advice: "Report traumatic incidents immediately. Seek professional trauma counseling. Use employee assistance programs. Don't minimize your experience. Take time off if needed to recover. Consider whether the workplace is safe for your return. Document incidents for any formal processes. Connect with support groups.",
    videoUrl: "https://www.youtube.com/watch?v=5rZlkMKbYHY",
    okImage: depressionTraumaOk,
    nokImage: depressionTraumaNok
  },
  {
    id: "depression-bereavement",
    category: "Mental Health - Depression",
    categoryId: 3,
    title: "Bereavement and Loss",
    description: "The loss of a close person can lead to depression, and returning to work while grieving is challenging. Grief affects concentration, energy, and emotional regulation. Workplaces may not provide adequate time or support for grieving, compounding the risk of depression.",
    advice: "Take bereavement leave and don't rush back to work. Communicate with your employer about what support you need. Consider phased return or reduced hours initially. Access grief counseling services. Be patient with yourself - grief takes time. Inform close colleagues so they can be understanding. Use flexible work arrangements if available.",
    videoUrl: "https://www.youtube.com/watch?v=gsYL4PC0hyk",
    okImage: depressionBereavementOk,
    nokImage: depressionBereavementNok
  },
  {
    id: "depression-isolation",
    category: "Mental Health - Depression",
    categoryId: 3,
    title: "Social Isolation at Work",
    description: "Feelings of loneliness or lack of social connection at work contribute to depression. This includes remote work isolation, exclusion from team activities, poor workplace relationships, or working alone. Humans need social connection, and workplace isolation increases depression risk significantly.",
    advice: "Make effort to connect with colleagues during breaks. Use video calls rather than just emails when remote. Join workplace social activities or committees. Reach out to colleagues you want to know better. Consider a desk move to be near others. Balance remote work with office time. Seek connections outside work too.",
    videoUrl: "https://www.youtube.com/watch?v=n3Xv_g3g-mA",
    okImage: depressionIsolationOk,
    nokImage: depressionIsolationNok
  },
  {
    id: "depression-genetics",
    category: "Mental Health - Depression",
    categoryId: 3,
    title: "Genetic Factors and Family History",
    description: "A family history of mental illness can increase a person's risk of depression. While genetics don't determine outcomes, they create vulnerability. Combined with workplace stress, genetic predisposition can manifest as depression. Understanding this risk helps with early intervention.",
    advice: "Be aware of your family mental health history. Monitor your own mental health proactively. Inform healthcare providers of family history. Consider preventive strategies like stress management and regular exercise. Build strong support networks. Seek help early if symptoms appear. Remember that family history is not destiny.",
    videoUrl: "https://www.youtube.com/watch?v=NOAgplgTxfc",
    okImage: depressionGeneticsOk,
    nokImage: depressionGeneticsNok
  },
  {
    id: "depression-discrimination",
    category: "Mental Health - Depression",
    categoryId: 3,
    title: "Discrimination and Stigma",
    description: "Experiencing discrimination, including racism, and the stigma associated with mental health issues negatively affect well-being. Workplace discrimination based on race, gender, age, disability, or other factors creates chronic stress and increases depression risk. Mental health stigma prevents people from seeking help.",
    advice: "Know your rights regarding workplace discrimination. Report discrimination through proper channels. Document incidents with specifics. Seek support from HR, unions, or employee resource groups. Don't internalize discriminatory treatment. Access external support organizations. Challenge stigma by speaking openly about mental health when safe to do so.",
    videoUrl: "https://www.youtube.com/watch?v=YLXVv0CRZdA",
    okImage: depressionDiscriminationOk,
    nokImage: depressionDiscriminationNok
  },
  {
    id: "depression-poverty",
    category: "Mental Health - Depression",
    categoryId: 3,
    title: "Financial Hardship and Social Disadvantage",
    description: "Financial hardship and social inequality are significant stressors that contribute to depression. Job insecurity, low wages, debt, and economic pressure create constant worry and stress. The relationship between poverty and depression is bidirectional - each makes the other worse.",
    advice: "Access any available financial support or hardship programs. Discuss pay concerns with HR or unions. Seek free financial counseling services. Don't suffer in silence about financial stress. Look for employee benefits you may not be using. Consider whether mental health is affecting work performance and seek help. Connect with community support services.",
    videoUrl: "https://www.youtube.com/watch?v=MB5IX-np5fE",
    okImage: depressionPovertyOk,
    nokImage: depressionPovertyNok
  },
  {
    id: "depression-nutrition",
    category: "Mental Health - Depression",
    categoryId: 3,
    title: "Poor Nutrition and Substance Use",
    description: "Poor nutrition and substance use play a role in the development and maintenance of depression. Irregular eating, poor diet quality, excessive alcohol or drug use all affect brain chemistry and mood. Workplace culture around alcohol or lack of healthy food options can contribute to these problems.",
    advice: "Maintain regular, balanced meals even when not hungry. Limit alcohol consumption - it's a depressant. Avoid using substances to cope with stress. Pack healthy lunches rather than relying on vending machines. Stay hydrated. Seek help for substance issues early. Consider nutritional counseling. Take proper lunch breaks away from your desk.",
    videoUrl: "https://www.youtube.com/watch?v=3dqXHHCc5lA",
    okImage: depressionNutritionOk,
    nokImage: depressionNutritionNok
  }
];

export const categories = [
  { id: 1, name: "Safety at Work", color: "warning" },
  { id: 2, name: "Mental Health - Stress & Anxiety", color: "default" },
  { id: 3, name: "Mental Health - Depression", color: "destructive" }
] as const;

export function getRandomTopic(): HSETopic {
  return hseTopics[Math.floor(Math.random() * hseTopics.length)];
}

export function getTopicsByCategory(categoryId: number): HSETopic[] {
  return hseTopics.filter(topic => topic.categoryId === categoryId);
}
