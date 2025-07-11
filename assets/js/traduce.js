document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('language-toggle');
    const elements = document.querySelectorAll('[data-lang]');
    
    // Translations
    const translations = {
        "en": {
            // Main page translations
            "title": "EDWARD CUESTA",
            "tagline": "Secure Systems Integration Specialist",
            "about_title": "ABOUT ME",
            "command_whoami": "$ whoami",
            "whoami_text": "Professional with over 10 years of experience in secure system integration and technological solutions.",
            "command_skills": "$ skills",
            "skill1": "> Process automation",
            "skill2": "> Proactive monitoring",
            "skill3": "> Secure architectures",
            "skill4": "> Continuous improvement",
            "skills_title": "MY ADDED VALUE",
            "skill_monitoreo": "Monitoring",
            "skill_monitoreo_desc": "Log analysis, Elastic Stack (ELK)",
            "skill_redes": "Networking",
            "skill_redes_desc": "Basic iptables configuration",
            "skill_automatizacion": "Automation",
            "skill_automatizacion_desc": "Bash scripting",
            "skill_cloud": "Cloud",
            "skill_cloud_desc": "AWS CloudTrail (basic)",
            "skill_seguridad": "Security",
            "skill_seguridad_desc": "NAS hardening (personal project)",
            "skill_desarrollo": "Development",
            "skill_desarrollo_desc": "HTML, CSS, basic PHP",
            "contact_title": "CONTACT",
            "contact_description": "If you wish to discuss a collaboration opportunity or simply want to connect, feel free to contact me.",
            "contact_button": "CONTACT",
            "footer_text": "© 2025 EDWARD CUESTA. ALL RIGHTS RESERVED.",
            
            // CV translations
            "cv_title": "EDWARD CUESTA BARON",
            "cv_tagline": "IT and Security Specialist",
            "cv_badge": "SIEM Engineer Opportunity · Grupo Digital",
            "cv_about_title": "PROFESSIONAL PROFILE",
            "cv_command_whoami": "$ whoami",
            "cv_whoami_text": "Professional with 10+ years in IT, specialized in secure systems integration. Currently focused on SIEM and cloud security.",
            "cv_command_skills": "$ skills",
            "cv_skill1": "> Log analysis with <strong>Elastic Stack</strong>",
            "cv_skill2": "> <strong>Logstash</strong> pipelines for normalization",
            "cv_skill3": "> iptables configuration and basic hardening",
            "cv_skill4": "> Automation with Bash scripting",
            "cv_skill5": "> AWS CloudTrail (in training)",
            "cv_experience_title": "RELEVANT EXPERIENCE",
            "cv_job_title1": "Cybersecurity Analyst",
            "cv_job_date1": "Oct 2020 - Dec 2021 · SEVSERVICES S.A.",
            "cv_job_desc1_1": "Security monitoring <strong>(SIEM-like)</strong> through log analysis",
            "cv_job_desc1_2": "Implementation of <strong>regular expressions</strong> for data parsing",
            "cv_job_desc1_3": "Alert automation with <strong>Bash scripts</strong>",
            "cv_job_title2": "IT Specialist",
            "cv_job_date2": "Dec 2022 - Present · Sanushealth Tech Solutions",
            "cv_job_desc2_1": "Integration of hospital systems with focus on <strong>centralized logging</strong>",
            "cv_job_desc2_2": "Development of solutions for access traceability",
            "cv_skills_title": "TECHNICAL SKILLS",
            "cv_tech_skill1": "SIEM & Logs",
            "cv_tech_skill1_desc": "Elastic Stack (Elasticsearch, Logstash, Kibana)",
            "cv_tech_skill2": "Cloud",
            "cv_tech_skill2_desc": "AWS CloudTrail, Google Cloud (basic)",
            "cv_tech_skill3": "Security",
            "cv_tech_skill3_desc": "Basic hardening, iptables, auditing",
            "cv_tech_skill4": "Automation",
            "cv_tech_skill4_desc": "Bash scripting, system integration",
            "cv_tech_skill5": "Networking",
            "cv_tech_skill5_desc": "Secure network configuration",
            "cv_tech_skill6": "Development",
            "cv_tech_skill6_desc": "HTML, CSS, basic PHP",
            "cv_project_title": "FEATURED PROJECT",
            "cv_project_name": "Secure NAS with Open-Source SIEM",
            "cv_project_point1": "Configuration of <strong>auditing and iptables</strong> for log generation",
            "cv_project_point2": "Installation/configuration of <strong>Elasticsearch, Logstash and Kibana</strong>",
            "cv_project_point3": "Kibana dashboards to monitor SSH access",
            "cv_project_point4": "<strong>Log parsing</strong> with:",
            "cv_project_subpoint1": "Grok filters in Logstash (for automatic structuring).",
            "cv_project_subpoint2": "Custom regex for complex events (e.g., brute-force attacks).",
            "cv_contact_title": "CONTACT",
            "cv_contact_description": "Available for interviews at Grupo Digital:",
            "cv_download_button": "DOWNLOAD CV",
            "cv_phone_label": "Phone:",
            "cv_email_label": "Email:",
            "cv_contact_button": "CONTACT",
            "cv_footer_text": "CV created specifically for Grupo Digital | Version 1.0 (05/2025)",
            "cv_security_badge": "🔒 Private URL - Do not share"
        },
        "es": {
            // Main page translations
            "title": "EDWARD CUESTA",
            "tagline": "Especialista en Integración de Sistemas Seguros",
            "about_title": "SOBRE MÍ",
            "command_whoami": "$ whoami",
            "whoami_text": "Profesional con más de 10 años de experiencia en integración de sistemas y soluciones tecnológicas seguras.",
            "command_skills": "$ skills",
            "skill1": "> Automatización de procesos",
            "skill2": "> Monitorización proactiva",
            "skill3": "> Arquitecturas seguras",
            "skill4": "> Mejora continua",
            "skills_title": "MI VALOR AÑADIDO",
            "skill_monitoreo": "Monitoreo",
            "skill_monitoreo_desc": "Análisis de logs, Elastic Stack (ELK)",
            "skill_redes": "Redes",
            "skill_redes_desc": "Configuración básica de iptables",
            "skill_automatizacion": "Automatización",
            "skill_automatizacion_desc": "Scripts en Bash",
            "skill_cloud": "Cloud",
            "skill_cloud_desc": "AWS CloudTrail (básico)",
            "skill_seguridad": "Seguridad",
            "skill_seguridad_desc": "Hardening de NAS (proyecto personal)",
            "skill_desarrollo": "Desarrollo",
            "skill_desarrollo_desc": "HTML, CSS, PHP básico",
            "contact_title": "CONTACTO",
            "contact_description": "Si deseas discutir una oportunidad de colaboración o simplemente quieres conectar, no dudes en contactarme.",
            "contact_button": "CONTACTO",
            "footer_text": "© 2025 EDWARD CUESTA. TODOS LOS DERECHOS RESERVADOS.",
            
            // CV translations
            "cv_title": "EDWARD CUESTA BARON",
            "cv_tagline": "Especialista en TI y Seguridad",
            "cv_badge": "Oferta SIEM Engineer · Grupo Digital",
            "cv_about_title": "PERFIL PROFESIONAL",
            "cv_command_whoami": "$ whoami",
            "cv_whoami_text": "Profesional con 10+ años en TI, especializado en integración de sistemas seguros. Actualmente enfocado en SIEM y seguridad cloud.",
            "cv_command_skills": "$ skills",
            "cv_skill1": "> Análisis de logs con <strong>Elastic Stack</strong>",
            "cv_skill2": "> Pipelines en <strong>Logstash</strong> para normalización",
            "cv_skill3": "> Configuración de iptables y hardening básico",
            "cv_skill4": "> Automatización con Bash scripting",
            "cv_skill5": "> AWS CloudTrail (en formación)",
            "cv_experience_title": "EXPERIENCIA RELEVANTE",
            "cv_job_title1": "Analista de Ciberseguridad",
            "cv_job_date1": "Oct 2020 - Dic 2021 · SEVSERVICES S.A.",
            "cv_job_desc1_1": "Monitoreo de seguridad <strong>(SIEM-like)</strong> mediante análisis de logs",
            "cv_job_desc1_2": "Implementación de <strong>expresiones regulares</strong> para parsing de datos",
            "cv_job_desc1_3": "Automatización de alertas con <strong>scripts en Bash</strong>",
            "cv_job_title2": "Especialista en TI",
            "cv_job_date2": "Dic 2022 - Presente · Sanushealth Tech Solutions",
            "cv_job_desc2_1": "Integración de sistemas hospitalarios con enfoque en <strong>logging centralizado</strong>",
            "cv_job_desc2_2": "Desarrollo de soluciones para trazabilidad de accesos",
            "cv_skills_title": "HABILIDADES TÉCNICAS",
            "cv_tech_skill1": "SIEM & Logs",
            "cv_tech_skill1_desc": "Elastic Stack (Elasticsearch, Logstash, Kibana)",
            "cv_tech_skill2": "Cloud",
            "cv_tech_skill2_desc": "AWS CloudTrail, Google Cloud (básico)",
            "cv_tech_skill3": "Seguridad",
            "cv_tech_skill3_desc": "Hardening básico, iptables, auditoría",
            "cv_tech_skill4": "Automatización",
            "cv_tech_skill4_desc": "Bash scripting, integración de sistemas",
            "cv_tech_skill5": "Redes",
            "cv_tech_skill5_desc": "Configuración de redes seguras",
            "cv_tech_skill6": "Desarrollo",
            "cv_tech_skill6_desc": "HTML, CSS, PHP básico",
            "cv_project_title": "PROYECTO DESTACADO",
            "cv_project_name": "NAS Seguro con SIEM Open-Source",
            "cv_project_point1": "Configuración de <strong>auditoría e iptables</strong> para generación de logs",
            "cv_project_point2": "Instalación/configuración de <strong>Elasticsearch, Logstash y Kibana</strong>",
            "cv_project_point3": "Dashboards en Kibana para monitorizar accesos SSH",
            "cv_project_point4": "<strong>Parsing de logs</strong> con:",
            "cv_project_subpoint1": "Filtros Grok en Logstash (para estructuración automática).",
            "cv_project_subpoint2": "Regex personalizado para eventos complejos (ej: ataques brute-force).",
            "cv_contact_title": "CONTACTO",
            "cv_contact_description": "Disponible para entrevistas en Grupo Digital:",
            "cv_download_button": "DESCARGAR CV",
            "cv_phone_label": "Teléfono:",
            "cv_email_label": "Email:",
            "cv_contact_button": "CONTACTAR",
            "cv_footer_text": "CV creado específicamente para Grupo Digital | Versión 1.0 (05/2025)",
            "cv_security_badge": "🔒 URL privada - No compartir"
        }
    };

    // Set initial language to English
    let currentLang = localStorage.getItem('lang') || 'en';
    
    function applyTranslations(lang) {
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Update button text
        toggleButton.textContent = lang === 'en' ? 'ES' : 'EN';
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update CV download link
        const cvDownloadLinks = document.querySelectorAll('a[data-cv-base]');
        cvDownloadLinks.forEach(link => {
            const baseName = link.getAttribute('data-cv-base');
            const extension = link.getAttribute('data-cv-extension') || 'pdf';
            link.href = `${baseName}_${lang}.${extension}`;
        });
    }

    // Apply translations on load
    applyTranslations(currentLang);

    // Toggle language
    toggleButton.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'es' : 'en';
        localStorage.setItem('lang', newLang);
        currentLang = newLang;
        applyTranslations(newLang);
    });
});