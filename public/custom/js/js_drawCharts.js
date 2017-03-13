 google.charts.load("current", {packages:["corechart"]});


DrawPieChart();

function DrawPieChart(){

  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Component',         'Percetage'],
    ['Software Engineering',      40],
    ['Data visualization',         12],
    ['EdTech Innovation',         19],
    ['Mathematical Education',    13],
    ['Social Entrepreneurship',   16],
  ]);

  var options = {
        
        legend: 'bottom',
          pieSliceText: 'label',
        // pieHole: 0.2,
        height:400,
        chartArea:{
             top:5,
             bottom:5,
             width: '100%',
         },
         fontSize: 10, 
         // backgroundColor: '#99ffff',
        is3D: true ,
        tooltip:{textStyle:{fontSize:'18'}},  
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
  };

}

var dataProgramming = [
        ["Programming Language", "Level", { role: "style" } , { role: 'annotation'} ],
        ["Javascript", 90, "color:#3366CC;fill-opacity: 0.9", 'Javascript (Proficient)'],
        ["HTML/CSS", 90, "color:#3366CC;fill-opacity: 0.9", 'HTML/CSS (Proficient)'],
        ["Python", 88,  "color:#3366CC;fill-opacity: 0.88", 'Python (Proficient)'],
        ["PHP",  86,  "color:#3366CC;fill-opacity: 0.86", 'PHP (Proficient)'],
        ["SQL",  86,  "color:#3366CC;fill-opacity: 0.86", 'SQL (Proficient)'],
        ["Java", 80,  "color:#3366CC;fill-opacity: 0.8", 'Java (Intermediate)'],
        ["C++", 77,  "color:#3366CC;fill-opacity: 0.77", 'C++(Intermediate)'],
      ];

var dataLibrary = [
        ["Library", "Level", { role: "style" } , { role: 'annotation'} ],
        ["jQuery", 90, "color:#990099;fill-opacity: 0.9", 'jQuery (Proficient)'],
        ["Boostrap", 90, "color:#990099;fill-opacity: 0.9", 'Boostrap (Proficient)'],
        ["Google Charts ", 70,  "color:#990099;fill-opacity: 0.7", 'Google Charts (Intermediate)'],
        ["D3",  60,  "color:#990099;fill-opacity: 0.6", 'D3 (Intermediate)'],
        ["ReatJS",  50,  "color:#990099;fill-opacity: 0.5", 'ReatJS(Beginner)'],
      ];

var dataFramework = [
        ["Framework", "Level", { role: "style" } , { role: 'annotation'} ],
        ["Express", 90, "color:#DC3912;fill-opacity: 0.9", 'Express (Proficient)'],
        ["Django", 90, "color:#DC3912;fill-opacity: 0.9", 'Django (Proficient)'],
        ["Flask", 70,  "color:#DC3912;fill-opacity: 0.7", 'Flask (Intermediate)'],
        ["AngularJS",  60,  "color:#DC3912;fill-opacity: 0.6", 'AngularJS (Intermediate)'],
      ];

var dataApplication = [
        ["Application", "Level", { role: "style" } , { role: 'annotation'} ],
        ["Microsoft Office",  96,  "color:#109618;fill-opacity: 0.96", 'Microsoft Office (Proficient)'],
        ["Git", 90, "color:#109618;fill-opacity: 0.9", 'Git (Proficient)'],
        ["Node.js", 89, "color:#109618;fill-opacity: 0.89", 'Node.js (Proficient)'],
        ["Scrum", 80,  "color:#109618;fill-opacity: 0.80", 'Scrum (Intermediate)'],
      ];

var dataSoftSkills = [
        ["Soft Skills", "Level", { role: "style" } , { role: 'annotation'} ],
        ["Teamwork and collaboration",  95,  "color:#0099C6;fill-opacity: 0.95", 'Teamwork and collaboration'],
        ["Problem solving", 95, "color:#0099C6;fill-opacity: 0.90", 'Problem solving'],
        ["Creative", 90, "color:#0099C6;fill-opacity: 0.88", 'Creative'],
        ["Self-motivate", 90,  "color:#0099C6;fill-opacity: 0.88", 'Self-motivate'],
      ];

var dataLanguage = [
        ["Language", "Level", { role: "style" } , { role: 'annotation'} ],
        ["Mandarin-Written",  99,  "color:#FF9900;fill-opacity: 0.99", 'Mandarin,Written : Native'],
        ["Mandarin-Verbal", 99, "color:#FF9900;fill-opacity: 0.99", 'Mandarin,Verbal : Native'],
        ["English-Written", 88, "color:#FF9900;fill-opacity: 0.88", 'English,Written: Fluent'],
        ["English-Verbal", 88,  "color:#FF9900;fill-opacity: 0.88", 'English,Verbal: Fluent'],
      ];

DrawBarChart(dataProgramming,"barchartProgramming");
DrawBarChart(dataLibrary,"barchartLibrary");
DrawBarChart(dataFramework,"barchartFramework");
DrawBarChart(dataApplication ,"barchartApplication");
DrawBarChart(dataSoftSkills ,"barchartSoftSkills");
DrawBarChart(dataLanguage ,"barchartLanguage");

function DrawBarChart(dataArray,containerID){

  google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(dataArray);
      var view = new google.visualization.DataView(data);

      var height = dataArray.length * 25;
      var options = {
        // title: "Programming Language",
        height: height,
        bar: {groupWidth: "85%"},
        legend: { position: "none" },
        fontSize: 16, 
         hAxis: {
            minValue: 0,
            textPosition : 'none',
        },
        chartArea:{
             top:0,
             left:5,
             bottom:5,
             width:'95%',
         },
         // backgroundColor: 'yellow',
          vAxis: { textPosition : 'none'},
          annotations: {
             textStyle: {
                 // color: 'black',
                 // fontSize: 11,
             },
             // alwaysOutside: true
         }
      };
      var chart = new google.visualization.BarChart(document.getElementById(containerID));
      chart.draw(view, options);
  }
};
 
