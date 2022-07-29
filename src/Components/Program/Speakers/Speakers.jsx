import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import SpeakerCard from "./SpeakerCard";

import Speaker01 from "../../../Assets/Images/Speakers/speaker-1.jpg";
import Speaker02 from "../../../Assets/Images/Speakers/speaker-2.jpg";
import Speaker03 from "../../../Assets/Images/Speakers/speaker-3.jpg";
import Speaker04 from "../../../Assets/Images/Speakers/speaker-4.jpg";
import Speaker05 from "../../../Assets/Images/Speakers/speaker-5.jpg";
import Speaker06 from "../../../Assets/Images/Speakers/speaker-6.jpg";
import Speaker07 from "../../../Assets/Images/Speakers/speaker-7.jpeg";
import Speaker08 from "../../../Assets/Images/Speakers/speaker-8.jpg";
import Speaker09 from "../../../Assets/Images/Speakers/speaker-9.png";
import Speaker10 from "../../../Assets/Images/Speakers/speaker-10.png";
import Speaker11 from "../../../Assets/Images/Speakers/speaker-11.jpg";
import Speaker12 from "../../../Assets/Images/Speakers/speaker-12.jpg";
import Speaker13 from "../../../Assets/Images/Speakers/speaker-13.jpeg";
import Speaker14 from "../../../Assets/Images/Speakers/speaker-14.jpg";
import Speaker15 from "../../../Assets/Images/Speakers/speaker-15.jpg";
import Speaker16 from "../../../Assets/Images/Speakers/speaker-16.jpg";
import Speaker17 from "../../../Assets/Images/Speakers/speaker-17.png";
import Speaker18 from "../../../Assets/Images/Speakers/speaker-18.png";
import Speaker19 from "../../../Assets/Images/Speakers/speaker-19.jpg";
import Speaker20 from "../../../Assets/Images/Speakers/speaker-20.jpg";
import Speaker21 from "../../../Assets/Images/Speakers/speaker-21.png";
import Speaker22 from "../../../Assets/Images/Speakers/speaker-22.jpg";
import Speaker23 from "../../../Assets/Images/Speakers/speaker-23.png";
import Speaker24 from "../../../Assets/Images/Speakers/speaker-24.png";
import Speaker25 from "../../../Assets/Images/Speakers/speaker-25.png";
import Speaker26 from "../../../Assets/Images/Speakers/speaker-26.png";
import Speaker27 from "../../../Assets/Images/Speakers/speaker-27.png";
import Speaker28 from "../../../Assets/Images/Speakers/speaker-28.png";
import Speaker29 from "../../../Assets/Images/Speakers/speaker-29.png";
import Speaker30 from "../../../Assets/Images/Speakers/speaker-30.png";

import Background from "../../../Assets/Images/Home/SummitReasons/background.png";

const Speakers = () => {
  const SpeakersList = [
    {
      id: 1,
      position:
        "WPA president. University of Birmingham. University of Warwick (United Kingdom)",
      name: "Afzal Javed",
      image: Speaker01,
      description: `Dr. Afzal Javed MBBS, MCPS, D.PSYCH (LONDON), BOARD CERT.PSYCH (UK), F.R.C.Psych. (UK), M.PHIL (Edinburgh), FRCP (Ireland) <br />
        Dr. Afzal Javed is a Consultant Psychiatrist & is Honorary Professor, Institute of Applied Health Research, University of Birmingham & Honorary Associate Clinical Professor at Warwick Medical School, University of Warwick UK. He also holds the honorary position of Chairman Pakistan Psychiatric Research Centre, Fountain House, Lahore (Pakistan). <br />
        He graduated from King Edward Medical College Lahore, Pakistan and received higher specialised training in Psychiatry from Pakistan and UK (from Royal Edinburgh Hospital, University of Edinburgh and Institute of Psychiatry & Maudsley Hospital London). <br />
        He has served the UK Royal College of Psychiatrists as Deputy / Associate Registrar, member Board of International Affairs of the College, Chairman of West Midlands Division of the College & one of the lead College office bearers for SAS doctors & Patients & Carers groups. He was also elected as executive committee member of the College Faculty of Rehabilitation and Social Psychiatry & represents the faculty at Education and Training Committee of the College. <br />
        His role in international psychiatry is highlighted by his involvement with several professional organisations: President World Psychiatric Association (WPA), Immediate Past President Asian Federation of Psychiatric Associations (AFPA), Past President World Association for Psychosocial Rehabilitation (WAPR), Immediate Past Executive Secretary for Scientific Sections World Psychiatric Association (WPA), Advisor & Founder Secretary General of South Asian Forum on Mental Health & Psychiatry (SAF), Advisor SAARC Psychiatric Federation (SPF), Founding Secretary General Asian Federation of Psychiatric Associations (AFPA), Immediate Past Co Chairman / Founder office Bearers WPA Section on Psychiatry in Developing Countries, Chairman Pakistan Psychiatric Research Centre, Fountain House, Lahore, Pakistan.<br />
        His areas of special interest are Psychosocial Rehabilitation, Social and Transcultural Psychiatry and Psychiatric Research. His academic skills have been invaluable when publishing more than 150 scientific papers and being author of six books/monographs on different topics of psychiatry. He is currently involved in several projects on Schizophrenia and different clinical aspects of long-term management of chronic mentally ill in the community.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 2,
      position: "WPA President Elect. Karolinska Institute (Sweden)",
      name: "Danuta Wasserman",
      image: Speaker02,
      description: `Danuta Wasserman (DW) is a Univ. Prof. Dr. Med. in Psychiatry and Suicidology at Karolinska
        Institute (KI), and the current Director and Founding Head of the National Centre for Suicide
        Research and Prevention of Mental Ill-Health (NASP) at KI, since 1993. DW is appointed as the
        Director of the WHO Collaborating Centre for Research, Methods Development and Training in
        Suicide Prevention since 1997 until July 2024 and assists in the development of suicide preventive
        research and suicide preventive programs on five continents. She is the former President of the
        European Psychiatric Association (EPA) and the International Academy of Suicide Research
        (IASR). She is serving on the Board of the EPA since 2008 and Chairs presently the Committee on
        Ethics. In October 2020 DW was elected as the President-Elect of the World Psychiatric Association
        (WPA), incoming as President in 2023 – 2026. Professor Wasserman is the Honorary Fellow of the
        Royal College of Psychiatrists in the UK, Honorary Member of the Hungarian and Romanian
        Psychiatric Associations and Honorary President of Estonian-Swedish Mental Health Institute.<br />
        DW has won numerous national and international honours and awards. Since 2000, she serves as
        the Principle Investigator for the Genetic Investigation of Suicide and Attempted Suicide Project
        (GISS project), funded by the Knut and Alice Wallenberg Research Foundation in Sweden. DW
        serves as a consultant to the mental health promotion and suicide preventive studies among youth
        to several universities in Europe, Asia, Latin America, and to Montana State University, Texas
        University and Columbia University in the United States.<br />
        Professor Wasserman is also the chair and a member of several national and international working
        groups on mental health promotion and suicide prevention.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 3,
      position:
        "Association for the Improvement of Mental Health Programs (Switzerland)",
      name: "Norman Sartorius",
      image: Speaker03,
      description: `Professor Norman Sartorius, MD, PhD, FRCPsych previously the Director of the Mental Health Program of the World Health Organization and President of the Wordl Psychiatric Association and of the European Psychiatric Association now serves as President of the Association for the Improvement of Mental Health Programs, a non-governmental organization located in Geneva. Professor Sartorius holds several professorial positions in Europe, the USA and elsewhere. He has published more than 500 papers in peer-reviewed journals and authored, co-authored, edited or co-edited more than 120 books. <br />
        Professor Sartorius’ main areas of interest at present are the comorbidity of mental and physical disorders, the reduction of the stigma of mental disorders and education of psychiatrists and other stakeholders in the field of mental health. In his previous positions he was the principal investigator of a number of international collaborative studies and projects dealing with schizophrenia and other major mental diseases, comorbidity of mental and physical illnesses, health service development,  and education of different categories of staff.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 4,
      position: "King’s College London (United Kingdom)",
      name: "Sir Graham Thornicroft",
      image: Speaker04,
      description: `Sir Graham Thornicroft is Professor of Community Psychiatry at the Centre for Global Mental Health and the Centre for Implementation Science, Institute of Psychiatry, Psychology and Neuroscience, King’s College London. He is also a Consultant Psychiatrist at South London & Maudsley NHS Foundation Trust, working in a community mental health team in Lambeth. He is a Fellow of the Academy of Medical Sciences, is a National Institute of Health Research Senior Investigator Emeritus, and is a Fellow of the Royal Society of Arts, Honorary Fellow of King’s College London and the Honorary Fellow of the Royal College of Psychiatrists. He is the chair of the the Stigma Section of the World Psychiatric Association.<br />
        Graham took his undergraduate degree at Cambridge in Social and Political Sciences, studied Medicine at Guy’s Hospital, London and then trained in Psychiatry at the Maudsley and Johns Hopkins Hospitals. He gained an MSc in Epidemiology at the London School of Hygiene and Tropical Medicine, and a PhD at the University of London. <br />
        Graham has made significant contributions to the development of mental health policy in England, including chairing the External Reference Group for the National Service Framework for Mental Health, the national mental health plan for England for 1999-2009.<br />
        He is also active in global mental health, for example, he chaired the World Health Organisation Guideline Development Group for the Mental Health Gap Action Programme (mhGAP) Intervention Guide (1st, 2nd and 3rd editions), a practical support for primary care staff to treat people with mental, neurological and substance use disorders in low and lower middle income countries, which is now used in over 100 countries worldwide. He chaired the External Reference Group for the WHO guidelines on the Management of Physical Health Conditions in adults with severe mental disorders. He has recently chaired the Guideline Development Group for the WHO guidelines on Mental Health at Work.<br />
        He is a Board Trustee of United for Global Mental Health, a Board Member for  Mental Health and Human Rights, and he chairs the Board of Implemental. His areas of research expertise include: reduction of stigma and discrimination, evaluation of mental health services, and global mental health. Graham has written over 640 peer-reviewed papers in PubMed, and authored or edited over 32 books of which 7 are award winning. In 2020 and 2021 he was named as among the most Highly Cited Researchers in the world by Clarivate. Graham has appeared in the media including BBC 1, BBC World Service, BBC Today radio programme, and The Economist. Graham received a Knighthood in the Queen’s Birthday Honours Awards in 2017. 
        `,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 5,
      position: "University Psychiatric Clinic Sveti Ivan (Croatia)",
      name: "Igor Filipčić",
      image: Speaker05,
      description: `Prof. Igor Filipčić, MD, PhD specialist psychiatrist and subspecialist in biological and social psychiatry.<br />
      In 2022 elected member of the Commission of the Ministry of Health of the Republic of Croatia for psychiatry, and in 2021 elected member of the Commission of the Ministry of Health of the Republic of Croatia for monitoring the prevention, diagnosis and treatment of mental health in the post COVID period.<br />
      In 2020 was elected for Board member for WPA Zone 9 - Central Europe and in WPA Comorbidity section. <br />
      2016 year get the qualification for the use deep transcranial magnetic stimulation “ Certificate of Brainsway deep TMS operator” and in association with Harvard TH Chan, School of Public Health and Institute for Healthcare improvement completed "The International Leadership Development for Physicians Program". Head of the Reference Center of the Ministry of Health of the Republic Croatia for the treatment of transcranial magnetic stimulation (TMS) of psychiatric diseases and comorbidities at the Psychiatry Clinic Sveti Ivan. President of the Croatian Society for Neurostimulation of the Brain at the Croatian Medical Association. Member of the EPA board in the section of TMS and other brain stimulation.<br />
      Professor at the Department of Psychiatry and Psychological Medicine at the University of Zagreb Medical School. Professor at the Department of Psychiatry at the Department of Dental Medicine and Health at the University of Josip Juraj Strossmayer in Osijek. Head of the University undergraduate study for nursing in Sveta Nedelja and Pregrada Faculty of dental medicine and health at Josip Juraj Strossmayer University in Osijek, Croatia. Professor of high school of the Zagreb University Health Care Center - head of Department for Psychiatry. <br />
      Co-editor in the CURENT OPINION PSYCHIATRY magazine, member of the Editorial Board of the HPD Journal of Social Psychology and Journal of Alcoholism and Psychiatry Research. Founder and President of the Croatian Society for Brain Neurostimulation at Croatian Medical Association. <br />
      Representative in the Assembly of the Croatian Medical Chamber in the City of Zagreb, Member of the Committee for Medical Ethics and Deontology of the Croatian Medical Chamber. Member of the Ethics Committee of the Institute of Anthropology and member of the Ethics Committee of the Zagreb University Health Care Center. Leader in several domestic and international projects, and chief investigator in clinical trials.<br />
      Member and president  number of organizational committees from psychiatric fields.
      Author and co-author in chapter 13 books and over 100 scientific papers (CC, SCI or SSCI).`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 6,
      position: "Ege University (Turkey)",
      name: "Simavi Vahip",
      image: Speaker06,
      description: `Simavi Vahip is professor of psychiatry at the Affective Disorders Unit of Ege University Department of Psychiatry, Izmir, Turkey. His main areas of interest are mood disorders, especially bipolar disorders and related phenomena such as bipolar depression and manic switch; classification in psychiatry, and training in psychiatry. He has founded and directed several inpatient and outpatient units at Ege University, e.g. Affective Disorders Unit (1986), Clinical Psychopharmacology and Research Inpatient Unit (1989). He has worked as the Residency Training Coordinator for many years. He was member of the Executive Committee of the Brain Research Center of Ege University (1993-2016).<br />
      He was president of the Society for Bipolar Disorders of Turkey (ISBD affiliated) between 2010 and 2013 and he was elected as member of the Board of Councillors of the International Society for Bipolar Disorder (ISBD) for two consecutive periods (2007-2011).<br />
      He served as president (2014-2016) and vice-president (2011-2014) for the Psychiatric Association of Turkey (PAT). He carried primary responsibilities in organizing scientific meetings and congresses both internationally and nationally.<br />
      He served the European Psychiatric Association (EPA) at many levels including policy, planning, organization, education, training and others. He was the chair (2019-21) and the vice-chair (2017-19) of the Steering Committee of the EPA-Council of National Psychiatric Associations. As the chair of the Committee he also served as member at the EPA Executive Committee and EPA Board (2019-21). Currently, he is member of the EPA Board. He served as founding editor-in-chief for the InterACT (Official Newsletter of EPA Council of National Psychiatric Associations) and he is continuing this task since 2018. <br />
      He is author in more than 130 papers and 20 books or book chapters in Turkish and in English.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 7,
      position: "EPA President Elect. University of Antwerp (Belgium)",
      name: "Geert Dom",
      image: Speaker07,
      description: `Geert Dom, full professor of psychiatry at the University of Antwerp, Belgium, and Medical Director of the MH Care Group Multiversum, Boechout, Belgium. Research domains are focused on addictive behaviors and their co-morbidities. Geert Dom is the immediate past president of the European Federation of Addiction Societies (EUFAS) and president-elect of the EPA. He is the president of the Belgian Professional Association of Medical Specialists in Psychiatry, member association of the Council of NPA's.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 8,
      position: "Norwegian University of Science and Technology (Norway)",
      name: "Norbert Skokauskas",
      image: Speaker08,
      description: `Norbert Skokauskas is Professor in Child and Adolescent Psychiatry at Norwegian University of Science
      and Technology (NTNU), faculty of Medicine and Health Sciences. He works for the Regional Centre for
      Child and Youth Mental Health and Child Welfare (RKBU) which is engaged in research, development,
      teaching and dissemination in the fields of child and adolescent mental health and child welfare. <br /> <br />
      Professor Skokauskas is a President of the World Psychiatric Association Child and Adolescent Psychiatry
      Section (WPA-CAP).<br /><br />
      More about his reasearch activities can be found at <br /> <a target="_blank" href="https://www.ntnu.edu/employees/norbert.skokauskas">https://www.ntnu.edu/employees/norbert.skokauskas</a>.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 9,
      position:
        "Institute of Psychiatry of Taras Shevchenko National University of Kyiv (Ukraine)",
      name: "Iryna Pinchuk",
      image: Speaker09,
      description: `Professor Iryna Pinchuk is a Director of the Institute of Psychiatry of Taras Shevchenko National
      University of Kyiv (since 2019), the Head of the International Technology Transfer Center (since 2020),
      the Vice-President Ukrainian Psychiatric Association (since 2019), Member board International
      Consortium of Universities for  Drug Demand Reduction (ICUDDR) (since 2017), Mental Health Expert at
      the Ministry of Health of Ukraine (since 2021). She was a Director of International PEPFAR Addiction
      Technology Transfer Center - Ukraine and Central Asia (2017-2020), Director of the Ukrainian Research
      Institute for Social and Forensic Psychiatry and Drug Abuse (2012-2018).Iryna Pinchuk is a Founder
      Chapter Ukraine the International Society of Substance Use Prevention and Treatment Professionals
      (ISSUP Ukraine). She was a Consultant to the World Health Organization (WHO) (2020, 2021).<br /><br />
      Iryna Pinchuk is a member of the Board of Ukrainian Psychiatry Association (since 1998), and the Head
      of Donetsk regional branch of the Ukrainian Psychiatry Association (2011-2012).<br /><br />
      Key qualifications:<br />
      - More than 30 years’ experience in psychiatric service, working with psychiatric dispensaries,
      psycho-neurological doctors’ offices, psychotherapeutic centres and psychotherapeutic offices
      gained through management of the institutions and later their accreditation as a head of national
      accreditation commission<br />
      - In-depth knowledge of the epidemiology and prevalence of mental disorders among general
      population<br />
      - Clear understanding of healthcare sector complex reforms Ukraine, specifically in mental health
      and psychosocial support, service delivery, policy and regulatory framework development,
      workforce development and organizational strengthen<br />
      - More than 15 years’ experience in designing and implementing innovative and alternative
      approaches to mental health and organizational strengthening of psychiatric service in Ukraine<br />
      - Experience in engaging with national stakeholders in mental health at different levels and
      education institutions, health authorities at national and local level<br />
      - 10 years of experience in promotion of social inclusion of people with mental disorders<br />
      - 5 years of experience working with people affected by a conflict including those after war; working
      with the national and international NGOs for the MHPSS service provision to the conflict affected
      population in the eastern Ukraine<br />
      - Provides training for undergraduate medical students and postgraduate mental health specialists
      on SUD and mental health. The National Trainer of ATTC Ukraine.
      `,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 10,
      position: "Tbilisi State Medical University (Georgia)",
      name: "Eka Chkonia",
      image: Speaker10,
      description: `Eka Chkonia is Associate Professor in Psychiatry at Tbilisi State Medical University (TSMU), Honorary
      Member of the World Psychiatric Association, Head of the Society of Georgian Psychiatrists, Program
      Director in Psychiatry (TSMU USMD program), Clinical Director at the Central Psychiatric Hospital (Tbilisi
      Mental Health Center), Editorial Board member of the journal “V.M.Bekhterev Review of Psychiatry and
      Medical Psychology”, Editorial Board member of the medical journal “The Georgian Psychiatric News”.<br />
      Eka Chkonia is the Secretary of the Steering Committee of the EPA (European Psychiatric Association)
      Council of NPAs, Member of the EPA Ethics committee, Head of the WPA Expert Committee on the
      Ukrainian mental health crisis, Ambassador for Georgia in European College of
      Neuropsychopharmacology (ECNP, 2013-2017).<br />
      Prof. Chkonia teaches General and Clinical Psychiatry to the TSMU medical students in, coordinates the
      courses in Human Development and Neuroscience (TSMU USMD program). She is a Director of the
      Clerkship in Psychiatry (TSMU USMD program).`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 11,
      position:
        "Tel Aviv University. Mount Sinai School of Medicine NY (Israel & USA)",
      name: "Michael Davidson",
      image: Speaker11,
      description: `Prof. Michael Davidson is Professor Psychiatry at Tel Aviv University (emeritus) and at Mount Sinai School of Medicine NY (secondary appointment). He is currently a Chief Medical Officer at Minerva Neurosciences Inc. Mass. US, Professor of Psychiatry and Chair of Psychiatry department at the University of Nicosia Medical School. Since 2000 he is the President of Israeli Medical Centre for Alzheimer.<br />
      Prof. Davidson has trained in psychiatry at the Mount Sinai School of Medicine in New York City between 1981 and 1985 where remained on staff until 1995 and became Professor of Psychiatry. Prof. Davidson has accumulated experience both as an administrator and as a researcher. He has been hospital deputy director both in New York State and in Israel and has contributed to the movement of deinstitutionalization.<br />
      As a researcher Prof. Davidson has published over 340 articles mostly in peer reviewed prestigious journals in the area of Schizophrenia and of Alzheimer’s disease. In the area of Schizophrenia he has investigated and published data focused on the biology of the disease (neurochemistry and molecular biology) as well as experimental treatments. Recently he as embarked in the study of the premorbid and prodromal manifestations leading to Schizophrenia.  In the areas of Alzheimer’s Diseases most of his research work has been devoted to developing novel treatments for this condition. Lately his research has been focused on determining the contribution of cardiovascular risk factors and pathology to the manifestation of Alzheimer’s disease. Prof. Davidson is a board member of several professional organizations as well as a reviewer for professional journals.
      `,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 12,
      position: "King’s College London (United Kingdom)",
      name: "Sir Simon Wessely",
      image: Speaker12,
      description: `Professor Sir Simon Wessely is Professor of Psychological Medicine and Regius Professor of
      Psychiatry at King’s College London and a Consultant Liaison Psychiatrist at King’s College and the
      Maudsley Hospitals.<br />
      Simon Wessely studied medicine and history of art at Trinity Hall, Cambridge, and finished his
      medical training at University College Oxford, graduating in 1981. He obtained his medical
      membership in Newcastle, before moving to London to train in psychiatry at the Maudsley. He has a
      Master’s and Doctorate in epidemiology. He is a Foundation Senior Investigator of the National
      Institute for Health Research, and past President of the Royal College of Psychiatrists and the Royal
      Society of Medicine. In 2017 he was asked by the then Prime Minister to chair the Independent
      Review into the Mental Health Act, which was accepted by the government and is now the basis of
      the 2021 White Paper. In 2021 he became a Fellow of the Royal Society (FRS).<br />
      He has over 800 original publications, with an emphasis on the boundaries of medicine and
      psychiatry, unexplained symptoms and syndromes, population reactions to adversity, military
      health, epidemiology, and others. He founded the King’s Centre for Military Health Research, which
      is now the main source of information on the health and well-being of the UK Armed Forces past and
      present and has been Civilian Consultant Advisor in Psychiatry to the British Army since 2001. <br />
      He also has a long-standing interest in how both ordinary people and organisations react to
      adversity. Since 2013 he has been the Director of the Public Health England/NIHR Health Protection
      Research Unit into Emergency Preparedness and Response. This has meant a heavy involvement in
      our COVID-19 research response, I addition to which he is also PI on the MRC/ESRC funded NHS
      Check, a major study of the impact of the pandemic on NHS staff health and well being.<br />
      He is active in public engagement activities, speaking regularly on radio, TV and at literary and science
      festivals. He was a trustee of Combat Stress for over ten years and his contributions to veterans’
      charities include cycling (slowly) eight times to Paris to raise funds for the Royal British Legion.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 13,
      position: "Karolinska Institute (Sweden)",
      name: "David Mataix-Cols",
      image: Speaker13,
      description: `Professor David Mataix-Cols is a clinical psychologist specialised in the study and care of patients with
      obsessive-compulsive and related disorders. He completed his PhD in 1999 (University of Barcelona). In
      2000, he was awarded a Marie Curie Fellowship to conduct post-doctoral research at Imperial College
      London. From 2002, he was appointed lecturer at King’s College London, where he eventually became a
      full professor in 2012. In parallel, he developed his clinical activity at the Maudsley Hospital. He is now
      professor of child and adolescent psychiatric science at the Karolinska Institute, Stockholm, where he
      runs a program of research aimed at understanding the causes of obsessive-compulsive and related
      disorders across the lifespan and the development of cost-effective treatments for these conditions.
      Much of his team’s current work involves the development of digital tools for the wider dissemination of
      psychological therapies.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 14,
      position: "King’s College London (United Kingdom)",
      name: "Kate Tchanturia",
      image: Speaker14,
      description: `Professor Kate Tchanturia, PhD, DClin, FAED, FBPS, FHEA is the lead (consultant) clinical psychologist
      for the eating disorder national clinical service at South London and Maudsley NHS Foundation Trust
      and Professor of Psychology of eating disorders at King’s College London and visiting Professor of
      Clinical Psychology in Illia State University Tbilisi Georgia and Medical State University.<br />
      For more than two decades, her clinical and academic work has focused on translational research to
      promote excellence in clinical practice. Kate has published over 280 peer reviewed papers, reporting
      experimental studies of cognitive processing and emotion in eating disorders, female autism as well
      as their cultural presentations.<br />
      She has published three edited books in English.
      She is a Fellow of the British Psychological Society, Academy of Eating Disorders, the Higher
      Education Academy and Academy of Europe.<br />
      She has lectured internationally and trained clinicians and researchers in the UK, USA, Europe, South
      America, New Zealand, Japan, Australia and in her country of origin, Georgia in the Neuropsychology
      of Eating Disorders and how to translate it into remedial approaches.<br /><br />
      For more information websites: <br />
      <a href="https://kclpure.kcl.ac.uk/portal/kate.tchanturia.html" target="_blank">https://kclpure.kcl.ac.uk/portal/kate.tchanturia.html</a><br />
      <a href="http://www.katetchanturia.com/" target="_blank">http://www.katetchanturia.com/</a><br />
      <a href="https://peacepathway.org/" target="_blank">https://peacepathway.org/</a>`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 15,
      position: "Institute of Mental Health (United Kingdom)",
      name: "Anthony David",
      image: Speaker15,
      description: `Professor Anthony David is Professor of Mental Health and Director of the Institute of Mental Health since 2018, as well as Honorary Consultant Neuropsychiatrist at the National Hospital for Neurology, UCLH Foundation NHS Trust. He recently published “Into the Abyss: a neuropsychiatrist’s notes on troubled minds” (2020 Oneworld Publications) to international acclaim. He qualified in medicine from Glasgow University and worked in medicine and neurology before training in psychiatry at the Maudsley Hospital, London. Prior to joining UCL, he was Vice Dean for Academic Psychiatry at KCL IoPPN (2013-18). Prof David’s research interests include schizophrenia, neuropsychiatry, medically unexplained syndromes and structural and functional neuroimaging. Prof David is a Fellow of the Royal College of Physicians, the Royal College of Psychiatrists and a member of the Academy of Medical Sciences, the Experimental Psychology Society and a founder member of both the British Neuropsychological Society and British Neuropsychiatry Association. He is editor of the journal “Cognitive Neuropsychiatry” and has co-edited several books including, The Self in Neuroscience and Psychiatry (2003), Insight and Psychosis (2nd Ed) (2004), Lishman’s Organic Psychiatry (2009). He has authored over 600 publications in peer reviewed medical and scientific journals.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 16,
      position: "Queen Mary University of London (United Kingdom)",
      name: "Dennis Ougrin",
      image: Speaker16,
      description: `Professor Dennis Ougrin graduated from a medical school in Ukraine in 1998 and came to the Maudsley
      hospital in the UK to undertake his post-graduate training in child and adolescent psychiatry. He worked
      as a consultant child and adolescent psychiatrist establishing and leading intensive community care
      services at South London and Maudsley NHS Foundation Trust. He also led the MSc in Child and
      Adolescent Mental Health at King’s College London and acted as the Chief Investigator of major NIHR,
      MRC and charity-funded studies in the field of self-harm and intensive community care services. In
      2018-2020 Professor Ougrin was the editor-in-chief of Child and Adolescent Mental Health, a key clinical
      journal in child and adolescent psychiatry, psychology and allied disciplines. In September 2021
      Professor Ougrin was appointed to lead the Youth Resilience Research Unit at Queen Mary University of
      London.<br />
      Professor Ougrin leads a programme of global mental health studies aimed at developing community
      mental health services in Ukraine and other Low- and Middle-Income Countries.  His main professional
      interests include the prevention of Borderline Personality Disorder and effective interventions for self-
      harm in young people. <br />
      Professor Ougrin is the author of Therapeutic Assessment, a novel model of assessment for young
      people with self-harm. He also developed and tested an Intensive Community Care Service model for
      young people with severe psychiatric disorders called Supported Discharge Service. The model was
      evaluated in the first randomised controlled trial of an intensive community care service for young
      people in the UK. The results of the trial informed the development of intensive community care
      services in the UK and internationally. Professor Ougrin has expertise in conducting randomised
      controlled trials in the fields of psychological therapy and mental health service models. <br />
      Professor Ougrin also works on developing modular psychotherapeutic interventions for self-harm and
      on understanding the pathophysiology of self-harm in young people.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 17,
      position:
        "King’s Health Partners, King’s College London (United Kingdom)",
      name: "Simon Surguladze",
      image: Speaker17,
      description: `Dr. Simon Surguladze MD PhD DSc is a Psychiatrist at Crisis Intervention Service at King’s Health
      Partners and Senior Visiting Lecturer at King’s College London Institute of Psychiatry, Psychology &amp;
      Neuroscience.<br /><br />
      Dr Surguladze was trained in Psychiatry at Tbilisi State Medical University. At different times he
      worked as a Head of Department at M.Asatiani Institute of Psychiatry, Chief Psychiatrist of Georgia
      and Associate Professor at Tbilisi State University. He is one of the founders of Georgian National
      Association for Mental Health (GAMH) which was the first independent organisation protecting
      human rights of mental health patients. He was elected President of GAMH from 1993-1994. He is
      one of the authors of the Georgian Mental Health Law adopted by the Georgian Parliament in 1992.
      He received a Fellowship from German Research Society (DFG) to Psychiatry Clinic of Heidelberg
      University in 1995-96. He was awarded with the Wellcome Trust International Research Fellowship
      to take part in research at the Institute of Psychiatry in London in 1997. He then worked as a
      Lecturer and subsequently as a Head of Affective Neuroscience group at King’s College London
      Institute of Psychiatry. His research in the UK has focused on neuropsychology and neurobiology of
      emotional processes in healthy individuals and mental patients. He remained involved in reforms in
      Georgian mental health system as well as research. From 2005-2012 he was a Chair of Global
      Initiative on Psychiatry Tbilisi Regional Board. He initiated several projects in Georgia that were
      funded by Cordaid, Royal Society UK, European Union Framework Program 7, The Wellcome Trust,
      USA Democracy Commission. From 2012-2018 he was appointed a Visiting Professor of Social
      Neuroscience at Ilia State University in Tbilisi, Georgia where he established a Social and Affective
      Neuroscience Laboratory. Dr Surguladze was a consultant of a working group in the Ministry of
      Health of Georgia in 2019-2020 that promoted further reforms in mental health services. His recent
      projects in Georgia have addressed the issues of burnout in care professionals and teaching social-
      emotional skills at schools. As a principal author and in collaboration with colleagues, Dr Surguladze
      published 76 research papers in peer-reviewed journals.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 18,
      position: "Ilia State University (Georgia)",
      name: "Nino Makhashvili",
      image: Speaker18,
      description: `Associate Professor, Head of Mental Health Resource Center, Ilia State University.
      Director of Foundation GIP-Tbilisi<br />
      Nino Makhashvili, MD., Ph.D. over the years had worked as a psychiatrist in in-patient and
      outpatient mental health clinics in Georgia. Since mid-90’s she has been involved in psychosocial
      support to refugees and internally displaced persons (IDPs), prisoners, victims of interpersonal
      violence, torture, etc. Nowadays, with the GIP-T team, she works on structural changes of the
      mental health care systems in countries of the Caucasus and Central Asia, also in Ukraine.<br />
      As an associate professor and head of the Mental Health Resource Center at Ilia State
      University, Nino Makhashvili is involved in academic teaching and research activities. She leads
      two academic programs - MA Program on Mental Health and International PhD program in
      Public Health. She is one of the founders/directors of a mental health counselling service for
      students of the university.<br />
      Her research interests include the mental health of war-affected populations, the epidemiology
      of common mental disorders, systems of mental health services, human rights in mental health.<br />
      Together with her team she is involved in deinstitutionalization processes in the region,
      community-based service development, lobbying of trauma-informed and trauma-specific
      services, also active in prison mental health and forensic psychiatry.<br />
      In 2020 Nino Makhashvili was nominated and elected as an Honorary Member of World
      Psychiatric Association (WPA). As a member of WPA section on ‘Psychological Consequences of
      Torture and Trauma’ and WPA Task-force on ‘Minimizing Coercion in Psychiatry’ she advocates
      for trauma-free mental health care.<br />
      She has an honour to be part of the advisory group for the proposed new WHO Global Mental
      Health status report 2001-2021.<br />
      Over the years, she serves as a member of the Consultative Council on Mental Health at the
      Parliament of Georgia; Mental Health Policy Advisory Board at Ministry of Health and Social
      Affairs of Georgia; National Inter-Agency Coordination Council on Criminal Justice Reform at the
      Ministry of Justice; She is a member of advisory board to NPM, at Public Defender Office,
      Georgia. She leads the Georgian Society of Supervision and Coaching.<br />
      Nino Makhashvili contributes frequently to print and broadcast media. She is lecturing,
      consulting, supervising and offering specialist trainings and workshops internationally.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 19,
      position: "Yerevan State Medical University (Armenia)",
      name: "Armen Soghoyan",
      image: Speaker19,
      description: `Dr. Armen Soghoyan MD, PhD, pasychiatrist, is the Associate Professor at Yerevan State Medical
      University after Mkhitar Heratsi (YSMU). He is the President of Armenian Psychiatric Association
      and the President of Armenian Medical Association. Currently he works as a scientific manager
      at Psychosocial Recovery Center. He is the Editor in Chief of Armenian Journal of Mental Health.<br />
      Dr. Soghoyan is the Honorary Member of World Psychiatric Association (WPA). From 2005 to
      2011, he has served as a Zonal Representative of WPA, Zone 10 (Eastern Europe). Since 2011, he
      is Co-chair of Operational Committee on Finance of WPA. Since 1997, he is a member of
      Network of Reformers of Geneva Initiative on Psychiatry, in 2005-2011 he was Board member of
      the foundation Global Initiative on Psychiatry-Tbilisi.<br />
      Previously Dr. Soghoyan was a Head of the Licensing Agency at MoH of Armenia (2011-2013),
      the Deputy Director at NUBARASHEN Psychiatric Center (2013-2015) the Head of the Agency for
      Medical and Social Expertise (2015-2020). In 2016 he was involved in elaboration of the National
      Mental Health Program of Kyrgyzstan as WHO expert.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 20,
      position: "Tbilisi State University (Georgia)",
      name: "Nino Okribelashvili",
      image: Speaker20,
      description: `Prof. Nino Okribelashvili is a Deputy Rector for Research at Tbilisi State University. As a  Professor of
      Psychiatry, she is the Head of the Department of Psychiatry and Medical Psychology at the Faculty of
      Medicine. From 2012-to 2019, she was the elected member of the TSU Representative and Academic
      Councils.<br />
      In 2020, Prof. Okribelashvili received an IREX Fellowship in the UASP Research Management and
      Leadership Program. She is an alumna of the JFDP Program (funded by the US Department of State,
      ACCELS / ACTR) at George Washington University (USA). Nino participated in the Alberto Villar Medical
      Program (American-Austrian Foundation 1997, 2001, 2003), Health System Management (Oxford Policy
      Management, 2007), and International Pension Reform Training Program (coordinated by BICON / SIDA
      in Stockholm, Sweden), etc.<br />
      Since 1988, her research has focused on schizophrenia, PTSD, suicide, and specific issues of social and
      transcultural psychiatry. Prof. Okribelashvili is the author of more than 20 articles in scientific
      journals and is a member of many professional societies.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 21,
      position: "Federation Global Initiative on Psychiatry (The Netherlands)",
      name: "Robert van Voren",
      image: Speaker21,
      description: `Robert van Voren (1959) is Chief Executive of Human Rights in Mental Health - Federation
      Global Initiative on Psychiatry (FGIP). He is a Sovietologist by education. Van Voren is
      Professor of Soviet and Post-Soviet Studies at the Vytautas Magnus University in Kaunas,
      Lithuania and at Ilia State University in Tbilisi, Georgia, and Visiting Professor at the
      University of Silezia in Katowice, Poland. He is also Executive Director of the Andrei Sakharov
      Research Center for Democratic Development in Lithuania.<br /><br />
      Robert van Voren is board member of several organizations in the field of human rights and
mental health. He has written extensively on Soviet issues and, in particular, issues related
to mental health and human rights, and published more than a dozen books.
      `,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 22,
      position: "Charité - University Medical School in Berlin (Germany)",
      name: "Meryam Schouler-Ocak",
      image: Speaker22,
      description: `Prof. Dr. med. Meryam Schouler-Ocak is Professor for Intercultural Psychiatry and Psychotherapy, additionally, specialist for neurology, psychotherapy, particularly in trauma focused psychotherapy and in EMDR – therapy. She is chair of Research Unit on Intercultural Migration and Care Research, Social Psychiatry at Charité – Universitätsmedizin Berlin, which has seven working groups. 2014 Prof. Schouler-Ocak received the Order of Merit by the Federal Republic of Germany. Prof. Schouler-Ocak is board member of European Psychiatric Association (EPA); chair of Committee on Ethical Issues of the EPA; chair of Section on Transcultural Psychiatry of the World Psychiatric Association (WPA-TPS) and coopted board member of the World Association of Cultural Psychiatry (WACP). She is also chair on Section of Intercultural Psychiatry and Psychotherapy, Migration of the German Association for Psychiatry, Psychotherapy and Psychosomatics (DGPPN) and President of the German-Turkish Association for Psychiatry, Psychotherapy and Psychosocial Health (DTGPP). Since 2020, she is chair of the working group on “Providing mental health care for migrants and refugees” (Working Group for the Action Plan 2020—2023 of WPA). Her research interests focus on intercultural psychiatry and psychotherapy, trauma and trauma-related disorders, mental health and healthcare of immigrants, refugees, asylum seekers and ethnic minorities, suicidality and gender.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 23,
      position: "Charité Psychiatric University Hospital (Germany)",
      name: "George Bakanidze",
      image: Speaker23,
      description: `After graduating from medical school in his native Georgia, Dr. med. George Bakanidze, M.
      Sc. completed a Master of Science in Cognitive Neuroscience, Neuropsychology and Psychopathology in
      Maastricht, the Netherlands in 2006.<br /><br />
      In 2008, he moved to Berlin, Germany, where he initially worked as a visiting scientist at Charité -
      Universitätsmedizin Berlin at Charité Campus Mitte in the genetics group.<br /> <br />
      He made his residency at the Charité Psychiatric University Hospital at St. Hedwig-Krankenhaus Berlin,
      where he obtained his specialist degree in psychiatry and psychotherapy in 2016. In 2018, he completed
      his PhD at Charité on genetics of schizophrenia. He worked at diverse clinics in Berlin including the clinic
      for forensic psychiatry where he worked as deputy head of department.<br /><br />
      His special interests are evidence-based psychopharmacotherapy and behavioral therapy approaches in
      psychiatry. He has profound experience in treating the full spectrum of psychiatric disorders and long-
      standing expertise in treating people with immigrant background.<br /><br />
      Currently he is working at the Charité Psychiatric University Hospital at St. Hedwig-Krankenhaus
      Berlin where he provides psychiatric care of war affected Ukrainians (in Russian language) and at the
      outpatient facility of Fliedner Klinik Berlin.<br /><br />
      In addition to his therapeutic activities, Dr. Bakanidze works as an expert witness for Berlin courts in the
      field of civil and criminal law.<br /><br />
`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 24,
      position: "Laboratory of Psychophysics (Switzerland)",
      name: "Simona Garobbio",
      image: Speaker24,
      description: `Simona Garobbio studies the heterogeneity of the psychosis spectrum, with a particular regard to
      the visual system. She has a M.Sc. in Life Sciences and Technologies at the Ecole Polytechnique of
      Lausanne (EPFL), Switzerland, which she completed with a master thesis at the Institute of Vision in
      Paris, France.<br /><br />
      Simona is currently a PhD. student in the laboratory of psychophysics (LPSY) headed by Prof. Michael
      H. Herzog at EPFL, where the main research focus is the investigation of visual information
      processing in human observers through psychophysical experiments, EEG, and mathematical
      modelling.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 25,
      position: "Radboud University Medical Center (The Netherlands)",
      name: "Rutger Jan van der Gaag",
      image: Speaker25,
      description: `Prof. Rutger Jan van der Gaag MD PhD HonFRCPsych. (1950) is emeritus professor of psychiatry (child and
        adolescent) at the Radboud University Medical Center, where he still practices and acts as ProRector. His
        research and clinical work focused on developmental disorders (autism ADHD addiction) throughout the
        lifespan and on gender sensitive medicine and psychiatry.<br /><br />
        He is honorary president of the Netherlands Psychiatric Association and immediate past President of the
        Royal Dutch Medical Association. He served as Vice-President of the Standing Committee of European
        Medical doctors CPME, board member of the EPA to which he brought the National Psychiatric Associations.<br /><br />
        Currently he holds a variety of positions within the field of (Mental)Health{care} and beyond: he is professor
        of Psychosomatics and Psychotherapy at the Stradina University in Riga Latvia, president of the Dutch
        Association of Healthcare Executives (NVZD), president of the Papageno Foundation for Autism (Amsterdam
        New York), stakeholder at the European Food Safety Authority EFSA (Parma Italy), Member of the Executive
        Board of the University of Paris-Cité (CA Université de Paris-Cité), foreign Associate Member of the
        Académie Nationale de Médecine (Paris), member of the Editorial Board of the Journal of Autism and
        Developmental Disorders, etc.<br /><br />
        And he secretary of the Foundation Alliance for Gender and Mental Health / IAWMH that organizes the 9 th
        congress of the Internationl Association for Women’s Mental Health (6-9 th November Maastricht the
        Netherlands) <a target="_blank" href="https://www.iawmh2022.org/">www.iawmh2022.org</a>`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 26,
      position: "Ilia State University (Georgia)",
      name: "Jana (Darejan) Javakhishvili",
      image: Speaker26,
      description: `Jana (Darejan) Javakhishvili, PhD in psychology, is a professor of psychology and Director of the Institute for
      Addiction Studies at <a target="_blank" href="https://iliauni.edu.ge/en/">Ilia State University</a>, Tbilisi, Georgia. Since 2006, she has also worked for the
      Foundation Global Initiative on Psychiatry – Tbilisi (GIP-Tbilisi) as a senior mental health consultant. She is
      specialized in working with individuals, families, and communities, traumatized because of military conflicts
      and displacement, natural disasters, and terrorist attacks. Those include Georgian internally displaced
      persons, refugees from Chechnya, Beslan survivors, war-affected populations in Ukraine, survivors of
      political oppression in Belarus, etc. Her research interests concern mental health of war- and political
      oppression-affected populations. She is a past President of the European Society for Traumatic Stress
      Studies – <a target="_blank" href="https://estss.org/">ESTSS</a> (2019-2020). Since July 2021 she is a trustee of the Dart Centre for Journalism and Trauma-
      Europe (<a target="_blank" href="https://dartcenter.org/europe">DCE</a>). Since 2017 she is on the Editorial Board of the European Journal of Psychotraumatology
      (<a target="_blank" href="https://www.tandfonline.com/journals/zept20">EJPT</a>).`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 27,
      position: "Cardiff University (United Kingdom)",
      name: "Jonathan Bisson",
      image: Speaker27,
      description: `Professor Jonathan Bisson is a practising psychiatrist and Clinical Professor in Psychiatry at Cardiff
      University. He is Director of Traumatic Stress Wales and Health for Health Professionals, national
      initiatives to improve the health and wellbeing of people affected by traumatic events in Wales and staff
      working in NHS Wales.  He is Deputy Director of the National Centre for Mental Health and lead its
      intervention development workstream.<br /><br />
      He has conducted many research studies including six randomised controlled trials and five Cochrane
      systematic reviews that have shaped research and practice in the traumatic stress field.  He was co-chair
      of the UK’s first PTSD NICE Guideline Development Group and chair the International Society for
      Traumatic Stress Studies’ Treatment Guidelines Committee.  He developed and continue to lead Cardiff
      University’s Traumatic Stress Research Group.  He developed and was the first director of NHS Veterans
      Wales and Health and Care Research Wales. <br /><br />
      Professor Jonathan Bisson has been awarded the 2021 Lord Ashcroft Research Award, in recognition of
      his work on a novel treatment method for veterans suffering from Post-traumatic Stress Disorder
      (PTSD).<br /><br />
      For more: <a target="_blank" href="https://www.cardiff.ac.uk/people/view/122802-bisson-jonathan">https://www.cardiff.ac.uk/people/view/122802-bisson-jonathan</a>`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 28,
      position: "Brain Mind Institute at EPFL (Switzerland)",
      name: "Michael Herzog",
      image: Speaker28,
      description: `Michael Herzog studied Mathematics, Biology, and Philosophy at the Universities of Erlangen, Tübingen,
      and the Massachusetts Institute of Technology (MIT). Since 2004, he is a professor for psychophysics at
      the Brain Mind Institute (BMI) at the EPFL in Lausanne (Switzerland). His research interests comprise
      many aspects of visual processing, such as spatio-temporal vision and non-retinotopic processing, in the
      healthy population but also schizophrenia, the older population, and sports(wo)men. In addition,
      Michael has a keen interest in epistemology and consciousness research.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 29,
      position: "University of Georgia (Georgia)",
      name: "Nana Zavradashvili",
      image: Speaker29,
      description: `Nana Zavradashvili, PhD is Associate Professor at the University of Georgia, consultant
      psychiatrist at the Rustavi Mental Health Center, invited professor in social psychiatry at Ilia
      State University. As a local expert and invited trainer, she is involved in Council of Europe
      projects aimed at strengthening mental health in the penitentiary and police systems and
      developing mental health policy and regulatory framework in line with European best practice.
      Nana Zavradashvili has many years of practical work experience and is actively involved in
      pedagogical and research activities. Over the years, she has been a consultant psychiatrist at the
      National Center for Mental Health, coordinator of the psychiatric residency program, and
      executive director of the Coalition &quot;Human Rights and in Healthcare&quot;. Her research interests
      include human rights and mental health, quality assurance in mental healthcare, risk assessment
      and management of violence in psychiatry. The International Master’s Degree on Mental Health
      Policy and Services allows Nana Zavradashvili to carry out numerous activities at the mental
      health policy level; in particular she participated in the development of the Mental Health
      Strategic Plan, National Mental Healthcare Standards, reviewed legal provisions of involuntary
      treatment; recently she coordinated assessment of the quality of psychiatric care and the
      human rights condition in all psychiatric institutions in Georgia, using WHO quality&amp;rights toolkit
      and produced countrywide report. Nana Zavradashvili is an active participant and speaker of
      local and international scientific conferences, has undergone various trainings in local and
      international organizations, as well as leads advanced training courses in Georgia and abroad.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
    {
      id: 30,
      position: "Centre for Studies of Holocaust and Religious Minorities (Norway)",
      name: "Carl Emil Vogt",
      image: Speaker30,
      description: `Carl Emil Vogt (b. 1974) is a historian with a phd on Fridtjof Nansen&#39;s humanitarian work from the
      University of Oslo, Norway. He has published several books for a Norwegian Public, among them a
      biography on Nansen and a monograph on Nansen&#39;s relief work in Russia and Ukraine in the early
      1920s. He has been working as a researcher for the Arctic University of Norway, and is currently a
      senior advisor for the Centre for Studies of Holocaust and Religious Minorities.`,
      socials: {
        facebook: "/",
        twitter: "/",
        linkedIn: "/",
      },
    },
  ];
  return (
    <SpeakerWrapper>
      <Title data-aos="fade-up" data-aos-duration="800">
        Confirmed Speakers
      </Title>
      <SpeakersContainer data-aos="fade-up" data-aos-duration="800">
        {SpeakersList.map((speaker) => {
          return (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              position={speaker.position}
              image={speaker.image}
              facebook={speaker.socials.facebook}
              twitter={speaker.socials.twitter}
              linkedIn={speaker.socials.linkedIn}
              description={speaker.description}
            />
          );
        })}
      </SpeakersContainer>
    </SpeakerWrapper>
  );
};

const SpeakerWrapper = styled.section`
  padding: 100px 0;
  /* background-image: url(${Background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; */
`;

const Title = styled.h1`
  margin: 0 auto 100px;
  text-align: center;
  font-family: "Titillium Web", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #000;
`;

const SpeakersContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 50px;
`;

export default Speakers;
