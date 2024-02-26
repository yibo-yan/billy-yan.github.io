$(document).ready(function(){
    $("#introBtn").click(function(){
        $("#intro").html("My name is Billy Yan, currently an undergraduate student at New York University, pursuing a degree in Mathematics & Computer Science. Alongside my academic endeavors, I co-founded Uranus Studio in Sichuan, China, where I've worked on impactful projects. Throughout my NYU journey, I explored Computer Science and the intersection of technology and business through a minor in Business Studies. Participating in algorithm competitions like ACSL, CAT, CCC, and HiMCM enhanced my programming skills in various languages, fostering a love for tackling complex challenges. During the summer of 2022, I had enriching internship experiences. At Chengdu Jingwei Technology, I delved into UWB technology, honing my programming skills and gaining insights into tech industry marketing. Subsequently, at Huawei Cloud, I explored the evolving landscape of cloud computing, particularly focusing on edge computing solutions and envisioning the future of technology, especially in applications like VR/AR and large model training for AI. Beyond corporate internships, as a co-founder of Uranus Studio, I led a team in developing a fall prevention device for the elderly, utilizing Doppler millimeter wave radar technology. This hands-on experience taught me crucial lessons in project management, team building, and interdisciplinary collaboration. In summary, my academic journey, coupled with industry and entrepreneurial experiences, has equipped me with a diverse skill set and a holistic understanding of the technology landscape. Passionate about contributing meaningfully to Mathematics, Computer Science, and technology-driven innovations, I look forward to embracing future challenges and continuing my journey of learning and growth in the world of technology and innovation.")
    });
    $("#resumeBtn").click(function(){
        $("#intro").append('<object data="CV/Resume.pdf" width="100%" height="1000px"></object>');
    });
    $("#customRange1").on('input', function(){
        $('#customRange1').text($(this).val());
        $('#intro').css('font-size', $(this).val() + 'pt');
    });
    $('#cookieBanner').slideDown();

      $('#closeBanner').on('click', function() {
        $('#cookieBanner').slideUp();
    });
});
