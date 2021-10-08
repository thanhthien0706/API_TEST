let url = "https://api.covid19api.com/summary";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    let datavn = data.Countries;
    let arrobject = datavn.filter(function (value) {
      // console.log(value);
      return value.ID == "27d9b263-1d9a-4818-9d3b-a4b3e2e20a87";
    });
    var xValues = ["Total Confirmed","Total Deaths"];
    var yValues = [arrobject[0].TotalConfirmed,arrobject[0].TotalDeaths ];
    var barColors = ["red", "green"];

    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "World Wine Production 2018",
        },
      },
    });
  });
