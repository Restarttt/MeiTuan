<template>
  <div class="home">
    <home-nav></home-nav>
    <home-app></home-app>
    <home-icon :icon="icon_data"></home-icon>
    <home-list-one v-for="(item,index) of list" :key="index" :list="item"></home-list-one>
    <home-detail :home_detail="all_data"></home-detail>
    <home-link></home-link>
  </div>
</template>
<script>
import HomeNav from "../../components/home-nav";
import HomeApp from "../../components/home-app";
import HomeIcon from "../../components/home-icon";
import HomeListOne from "../../components/home-list-one";
import HomeDetail from "../../components/home-detail";
import HomeLink from "../../components/home-link";
export default {
  name: "",
  components: {
    HomeNav,
    HomeApp,
    HomeIcon,
    HomeLink,
    HomeListOne,
    HomeDetail
  },
  data() {
    return {
      all_data: {
        title: "查看全部团购",
        type: 1
      },
      list: [
        {
          img:
            "https://p0.meituan.net/200.0/deal/5a916ac8ccc2fde7c9a20f53a8d2831f413705.png@75_0_450_450a%7C267h_267w_2e_90Q",
          name: "鱼你在一起",
          summary: "[吉安等]单人用餐，提供免费WiFi",
          money: "25.8",
          price: "36",
          count: 397
        },
        {
          img:
            "https://p1.meituan.net/200.0/deal/81ad57fc9cc1da0dbb3344f448024130748191.png@177_0_396_396a%7C267h_267w_2e_90Q",
          name: "纸上风情·烤鱼·现炒家常菜",
          summary: "[吉安等]纸上烤草鱼2～3人，可免费使用包间",
          money: "88",
          price: "135",
          count: 2014
        },
        {
          img:
            "https://p0.meituan.net/200.0/deal/ee0dcddbed46ca022e7855aa3e6bcba9104076.jpg@142_0_850_850a%7C267h_267w_2e_90Q",
          name: "华莱士·全鸡汉堡",
          summary: "[吉安等]2个香辣鸡腿堡+大薯条+2杯中可+黑椒鸡块1份",
          money: "28",
          price: "44",
          count: 6180
        },
        {
          img:
            "https://p0.meituan.net/200.0/deal/35a393b9030d3644c4eca5a973de39fe76211.jpg@161_0_518_518a%7C267h_267w_2e_90Q",
          name: "大拇指蛋糕",
          summary: "[吉安等]水果蛋糕1个，约8英寸，圆形",
          money: "38",
          price: "68",
          count: 85
        },
        {
          img:
            "https://p1.meituan.net/200.0/deal/ca9ccb510b729200dc81d8c2b5f46ce130532.jpg",
          name: "杨排风自助餐厅",
          summary: "[吉安等]晚餐跟周六日全天",
          money: "63",
          price: "78",
          count: 108385
        },
        {
          img:
            "//p0.meituan.net/200.0/dpdeal/9062a944918bae8f95ced35be19fff03123277.jpg",
          name: "奥克恒温游泳运动中心",
          summary: "[青原区]恒温运动中心成人票",
          money: "59.8",
          price: "88",
          count: 6014
        },
        {
          img:
            "https://p1.meituan.net/200.0/deal/657fa4c49b0eeff348a073eebb6450a772157.jpg@125_0_392_392a%7C267h_267w_2e_90Q",
          name: "亚马逊环球美食百汇",
          summary: "[天虹周边]平日单人自助午餐",
          money: "83",
          price: "88",
          count: 22254
        },
        {
          img:
            "https://p1.meituan.net/200.0/deal/e9f9993c4def7fda63a60632893663f354756.jpg@126_0_388_388a%7C267h_267w_2e_100Q",
          name: "渝味晓宇火锅",
          summary: "[2店通用]3人套餐，提供免费WiFi",
          money: "148",
          price: "238",
          count: 3348
        },
        {
          img:
            "https://p0.meituan.net/200.0/deal/8ecc44f5583f1318a1da5537f6dcde9424280.jpg@90_0_521_521a%7C267h_267w_2e_100Q",
          name: "贡茶",
          summary: "[吉安县中心城区]茶饮4选1，提供免费WiFi",
          money: "6.98",
          price: "11",
          count: 209
        },
        {
          img:
            "https://p1.meituan.net/200.0/deal/b9ae909ff865687753b70a22a75dbf3d158934.jpg@267h_267w_2e_90Q",
          name: "麦博工坊时尚蛋糕",
          summary: "[吉安等]10英寸经典巧克力生日蛋糕1个",
          money: "148",
          price: "228",
          count: 221
        }
      ],
      icon_data: [
        {
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACu0lEQVRYR8WXz4uNYRTHP8egCEPYKPmRWTAWRPlRNPMPEDWjyOI+tzFRFmKFQpGNbEY0pvteq8mYUmypuVFYGEphQQwWFjOSqbFQ19H73Pde773v+7z3MvN2n+V9z/mezz3Pec5zHqHBpf20Mpc9/GYvwlpgGbA0cP8GTKB8YBb3+MV96eVHI9JSz0gHWE8Lx4GDQGs9++C7H3yQIn3Sw9skn0QA9bgINviiBgPXmk0CfWI46/J3AqjHHaDrPwPXug2LoTtOKxZAPT4Cq2coeFlmTAxrajUjAJpjHLEFNvNLmZAsy8PCVQDq8QjYNfORqxQfi2F3+ZcKQFBwZxKCj0OFvgB0xNoKr4EiShswz6F3qVyYFiA4as8i1V6k0wq0MCIG0TznUDrE0KkeIxEIoVsyDFvNPJtQa7M4BmKSItv9I1oC8LgOHI0Y/htArxhuhjXU4wjQ78jCDTEcE82xEOETsGQaAKNi2BoXSD2eA1tivn1HWeUD7EO4G0vZeAYGxXDIAXAVOBGrr+wX9bgNHJgWgHBeMlyIBRigw68hxzYM+QAvgM2JALO5Jhk2BkXY7ne1miJ8KoadjgxcAU46AF76AJ+BlS4A6aGgHhvE8KamwKpPwRxWyGG+1uqoxxNghwPgiw8wBcx3nOnY1KrHNuAhsCDkd1oMl6sg83Sh9k5xrZ/JACW3B8ArMZwKzncetTUTbTJKRrLcCuzqBffNLIB7C/5yF/zmY4U9NOEfhe2ijSrqaLfAXYTpA9gidB/D9AGGkhtR2gC2ESW14nQBSq04KKz4yyhdgNJlZAFKk2/0Ok4PoPo6DrLgT8DxA4nyXrK0BQ3IB3Uuf26wejneIaxzGFYPJGWjOiPZaPAQqTesjiFMobQ7gsePZBWIZg6loUw0bywPQTTvYRKCaN7TrALRzMdpuIrTep7/Aea5Ud5gn/zuAAAAAElFTkSuQmCC",
          name: "美食"
        },
        {
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD/0lEQVRYR8VWbW7bRhB9QysV9cvJCaKcoNYJYp8gyglK5gJREAXoP8v/CoRC5QuE9Akan6DyCaLcwD5BpV+WE5mvmOUus6S+6LSAFzDsNXd33sy8eTOCR17yyPbxIADfPkRHOfEbIEcAngLQ37pmAOYEpweCy18+ZrpvtBoBuP0QRZLLKQTdRq8S1wRGnXF6se/8TgC3v0ddWUkK4HjfQ1u+T9li3Pkju952fyuA22F0LJC/bKh/0r65Ng+EJ9vSshGANf73f7FavxsIe5tArAGwYf9iPb8BZAKwD+DlQwAJcAHyM0UyAIeGpC326ulYA7AcxlNnjJCzTvJppIZtVPSx5wC+Ako0MWwXUKtBCforgCu2GDlDd8M4I7RyzJqGSXriO1IBYNhOQzqzCJ50kkwBFftBpKUHmWTzTdHQ7/Vvy+GbAcA/3XkhX7fH2edy7z+0HMbKVvWwMNjii10MbpKSNT4R1+E4fbEGoBAZ0dyXK0zSRjqxC8gmQvuELA0s38cTCN7+3wA0LXct+cd/1+fWDwAe+UyegYt2kkYu93ctnBoJFpmT+bnPDT1jPJXgLcinAGftFc4cH5bDWMmqBHXrKkxSI24+gMohl3/jwYF8sTKs7Fe2H/pkunsf9SlGtBZaHcYYcd2+Z09B1MmtvSNM0l4dAD2EN2GSGt33Wayc8Mp0Hibps+JMrFWhtX7VXrH/I+TyLkw+TewZ/304fvkR8A+UIfJ1oQYA7RUNAC/H5t5yGLu3LsMkVRFTkJUK2wTAeaECcB6O00GR2zcjAU/17zoA94hnsALAJ5vviKYqTNJCU1zYNY+5wAjMgWDudNtKs/LjkOBIKJHyoaqSFqS2YWEmEFXPBVs8cjqiZX5PM0OY5UhcArBEUclUWZ21V3ztWGw1QnOp/WBByEQlWmUWJNvjLLaR0qgpFy4D4ajmRNFfFGTAs87HTGW9GgGKRIBMiXxWL7Oy1Ch9lx7VDorMXb/QfRAwq3c9raTvT9C9B46E0hcyc3K83gsQvAKpNaqV4EauskCMUcAoZiAwjSUnTOsWoOfAuQtWiEwKIca5S+d9JQLGw6IZDQgOlAd5jpfte1zUG4ymRM87T+t7Z9zm/ZXOiZp/gUwonGwFoBdtvrV7uTFsFgjjhwyaZbqqE9U0EL6rv7PWbCwAbcFKpnJpBYQrnG9rxe6gVk3wHacFnyprEQiP9wLQK5601t4w26mO3wFk5soWOboQdgWiorPGm4IvDUcyZ9GCcOPUJiBN/7cQMvKHEP/izn5fq/+mBv1zV4FwsIs/jQYOWx2qbuW0tAfNDYUjn+3bzjcC4JdVnhsp1jzrjyOqtuEZiNkmIdoF9kEAfiYH++48OoB/ARm+Mj93ZfqpAAAAAElFTkSuQmCC",
          name: "猫眼电影"
        },
        {
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACi0lEQVRYR82XS2sTURSAz7kzqU1oaosVyRDRulDqC6UIbrKp4kLqTn+BgbQqiknB1lWXIsZULGmtrtSFuBAR0Y2Lgi24EWq7kaKLYptEiCWmpc3rzpEJJCaZTObmIeNs5zy+87z3Ilj8ocX+oS6AsdXJXVmbfFBV6RARUxCpEwGcRJAhhCQAJSWAz2me/fbQfX1VJDghgEDkUQ+iOsARz4gY1WSQcJEz/vHBniuLtXRMAfyx8GkivAiITlHnpXJIuCDL8vO7uy9vVNOvCeCPzQwSqBcacVwGAbCFO+SJYLd3pdKWIcDN6NQ1QDzWrPMy/aw8FtrrXa+A07toVeSVlhngivNX9N74kfFM4Z8uAyOxx70c+GhLIy8xxlSaCyrDzwwBAmthryqxU/8KQLPLVAwFFd/X/LSUOgpEpw+rCDeMnM9vpvt/pHlfhshRKqPIbPlsl31WFJoRfAm6hsI6ALPav/udOhfP8v3VHJ3vsr/okVlSBAKJ+CaxkRnFt1WWAf/a9C2S4ICRkTeJ1GAix5Vq/z0dbW97220REQBNhnJ8asJ9daEIcIleSu6f6/m0mAF0SBg/abd9SnDaubSd9Wjyxx1tsycctmVRAKbi+6Die10EGE2Eu9MpdqdRgHp7Agnm77uGnhYBApEn+1SWuy0CIBKlaUmIlkKu4cn/B6AVJThqt81tE9m/p3L9ZhnQlaDZJtTKUg+Argk1A82MYWVfmGVAN4Z5AJPjt9YeqAfAcBGZreIPyZQnkuF9IlMw0Nn+yt0mxavJGq5iTdjSw0gDsPw4FukFkRJUTb3IhaSgaOmVrABhNhWimcBGLqV/ISy8lhcgLH2YlKbZsqeZaK0bkTN9mjVitB6dPw/joTBB7wBQAAAAAElFTkSuQmCC",
          name: "酒店"
        },
        {
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAENUlEQVRYR8WXbWxTVRjH/8/tvR2MzG1dSzsnMuJMhBhQfMGI6AfjK1PwDV9oJy8RQ+K+aERdq07tLWqiH5yJESKGvqigGIkSEjUhxpcEVDRLdFOBbbDttusG67bSQdf7mJas2djae+74wPl0k/P//8/vPvfkuecQTIxE825bSjnzMICrmNlOElVl7azzABH1A2ifnS75orx5zUnRWBIRamr4HmJeC8JaET0YESaKVHvd+430RQGirweXQaJG4YXPX40Rgc4trlcaDhYCKQgQU0OvMtBs9AYi8wQ0O72e16bTTgsQVUPfAFgpEm5Cs8/l9dSfr58CEPUHt4LoRRPB4lLmN12+hpcmGiYBaG+E1pOEHeKJ5pWsY0P1y56Px515gJ5AeLmF+SezkXNWLEbyx1ZTtgzRLTVN7p+zpjxATA1/xeBVIkkkW2CpLIN8zRWQZQvOHo8h092PTCIpYgeB9jq97tV5gKga3gDwRyJu2V6O8gdWIJFKwnoqhbIldRhsOwarvQJ6e7eJatBGl9e9I1eBmBrew+AHjQCUyxywNdyFvq5uyD0DsN28JG/RentRIZVASo5icNcBo6hsFb50et0P5QA0fyhOBHsxl1RaAvvm1aASBVpHF6oXzJ8kT3ZpGNHicN60GKcPtWH4+9+LQjCjv9rncVDf1p3X6rp02Ai57PbrULpsIYaPdiOVSmHu1VdOsWSr4LQ7IFkVxN/bA30kVTRWkvSlFA2E7gdjrxGAbd3dUC61I/FPJ9LpNOzTAETbj8LmdMBaeQkGdx/AmSM9xWMJq0h0Azqb3BiLncJoqQzFaoVlKAXZUZFbYCw+mHs+2fov5tTWQJEtSP7yV+5TGBBsJM0f3EJEbxlVoND8TPrAeBYzv0CaGnqegLcvCgCwhTQ1uI5A+dZoFuSCKgBeT32ByL066/vMLjyuvxAAiaSV1OuPzJdI77wYADpLtblGFFVDfwNYaAaCFBnZtmytq8Fo6zFkEiNm7Fltm8vrWXQOwB/cBqKnRBNobjkq65dDcdnylqH9B5H64z/RCIB5u8vXsCkH0KOG7rAA34q7AXnNrZhlteYso8MjSHfFQH92CEdkgDtrvJ7v8r/jaCDUAsYzwglZ4ewSoGwWMJQCRs+KWwnvu5o8jVlDHmDA/+m8NI39AGCBeNKMlB0Ky7dV+R4/MQng3F4IPwriz2YUK2pieszlc+8al085lMb8oWeZ8I5onhkdMZ5z+jzvTvRMeyyPB8L1GeavzYQbaS1E9zma3Nnj/qRR8GKi+XfeCJI+IGCpUXixeQYOg/XN1b4nD02nK3o1+23Th8q8y0sbmagR4FpzINRJzC0njp9uuX7b0+lCXqHLaUz9xKkj00DAIwBuMAD5lYHPJViCTu8TMSNoIYCJIQOB8KI0uA5MdmY9d44kkvpB3K+AjlQ1ubNtXXj8D90wf0d81HbzAAAAAElFTkSuQmCC",
          name: "休闲娱乐"
        },
        {
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAFaElEQVRYR82YbUxTVxjH/8+Flkopg7FR0Vl04sA3NpzOgRuR+QJt3BRadE4d0+i2mEW06AxxH5Ys21y0rfGLL5tRoy46KL5E2orBTYluqIgv0W0NbuLmC75s0tYCLe1ZbgPVwr1NNZDsfuo95//8z+8+957znFPCE1za6g0TQb6pIJoAIAPAUAAxAQuGG4zQRKAG5us8VjVjVXWk1hSJUGszloJhCYDRkei7NLdB2CrzRxv2aJY5wsWFhdBWG2eDw5cA0p5g8FAp0X3AX24uKPtWzEMUQmsxbgCh9KkH7xHIGLZXafSLhPwEIbRW0w8AK+4rgG4fxtjRNkjetmqWdTzu3QtCazHsBdGcvgYI+hGs5gK9RhRCZzV9xcDK+w2g25jYJnNB2dLgbfePwur10ziOq+l3gK4BCNzsSvXyCv42+DqKrMZTBGQLQfjuu+A+einYJVElQZbzkiCv5/dbIe3S9BSx5/rNrNaPDEIUWY2FBFSFy4L3+r1gNyeXISopLkTOg7b9eAUkjQppZx4fBuSN6qXnRQxYXKXWbwtkQms1HgAwMxxEe30TWLsXrKMTspwR4OJkIfKHhxogSR+Ele/OC2m/Un8BB201kL/zqpB9nVmtz6UFR9bJ3f4oVziAjoY/wTq8UKUOQXxCPJov2uHNHtYXEOCiuVQqtBkLOAZrOAjnzjo8tygPJaOycdveDMvuA+gsHhcS4q69DOIIq/WfhLTX7D6Ic7evI3aK2IrPFpDOYljNiNaKQfgfuOH8/iSyyudixouZsDdeweHtlYhe+EboN3HHAcfOE4I28SW5iEqOFxmCraciq2kzgX0kBtF++ip8dx3I/7AY45JVuHujBVvXGKEoze+b2cxgJp3VWMEAnZijq+oMpCMGYoGuCMpYRUC2ceXXwLyJISH81PTdaUXn9fvwtbSCBkhBMgkoVhrQKeYIzn6AsROktRj2g2iWGETrllqkvJ+HxTlTg5IT+4/i0t0b8E1QBdq89lt4WN2IxNwxeF6VAtWYNERxXFDfuMMCT35gSRC6TpLWatwBoESol5+SrkMNUKoGgRxtyMjJwqQ3Xw9Ia8xWnLYcBxQywOdHyqxsFE7KxbMyOf64ZMfZ2lNgMgkyXh6JhuP1cOWnCxIQUM2/ji8Y8JmQwnu1BW0//YroNCWiBybAbbuAuKFKFJctwhBFIjr9fhzeaUZLjA+zZmqglMejofZnnD7bCP+wJLgfOOG52oKEAXL4ZmYK54FoE3VtXPYJKfgUSzMGQzI8Odj9wGRF6sJpKMmbHmjbXL4eiR9Mxpz08YH7tUvWIHbplKDed88Jx/bjSFw1QxiCsaVUZDOlEGM3hRT/rjscCG4/ZQf/4fGrnv9hO1z7fhGdGcl5mfCOV8G5qw5RygTETh8bmOKK9yYJxvg539jAsl1kMdYS4a2eKueek5BmqhAzdgj42sDXC9eBs5C9NhzRgxIFTbvB/a1ucM/Egs+E+8hFKOYJQBDOmwv0WV21wzAfoF09XfmBXRX1iHklFVyiHB2N1/gpBcXcHNFM8Fnj4yRpSvgdbej86x/RAgawUrO6bGOwlGsthnMgyurp3nG+OWDK2jyQjh4MybBH34cYiefy3/A2tYDiYhD9QhJEyvk1s1ofKECPIKwGDUARnxVEUxFhBzGaX6lZsScEgr/RWQzfMKJPI/R5ahmBtlSqV3zcbdB7o2sz7QVj/bbRZYCtSq1XP/4E/88tfzehzmYyMcaWP3XOewduM6v1i4X8+v0YSKCbfmBNlXoFX6MEr8gOxNXGUnBPfCBuIsa+I5fTVDH7c0+4jEYE0W0Q5q8BD4iaGWN2gM5wxI5VFujrIn2V/wGXqwhFEWoIuwAAAABJRU5ErkJggg==",
          name: "外卖"
        },
        {
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADeklEQVRYR81XXUhUQRg9s6lIFpRpmEq5ikn1UqFFkVH0VEHgQz2UaxRkQl7pTaoHFQKDosw1Kl+kdinTwlJUwtLQMDLJpFJS3F2U1Exd/9dMd2LuemV379z1rqvQwMCFO993znw/M2cIvBjm5PRDICSJAvsIEMomM6fAbzYJ8AGUlmmNBe/UuiWLLbQkX95EMZsKQk4D2LrY+vn/HaD0CYFfYZQxr8+TjUcC5uT0LKIhqZQiXCWwyzJC0EvttFBrLMhRslckYNIJ9QRIXAqwuw0FGqIN+oM8X1wCJp3A8hmyHOCSDwoMRhv0Ys04DxkBs04wA4haTnAnXxatQa9VJGDRZZRQ0JMrBC66JSClUYb8UxLGQgRYwYGQbG/Bg/bsQuCOOARujxVNp9s6MdXcCtvXdmVXlGZLhSkSYK0GzVyzt9Uemn4OjABvWJ+VY7TyDfcf6w7YV8WzFhUJLGX365KOYqSsGp5I9OfqMd3eyY/EfBQkAl0gJFpt+AM2RyD8eiZGK2pgLa1QJPG3fwB9Wbdgt03LXVNq0hoLYkiX7tIxDTSVasHZujWJexFy4YxoMlZdi+GnLxVJ/Lp5X7Ee7LAfJ+Zk4QEILnpDgIWfTWmM1dRj2PCcS4KliU3uoHhITDqhiQAJ3hAI2h+P0LQUF5PxukYMFRXLSHiKAAU+kaUePLzic4/E7OAweq/d4NeAg76FWHTCBAWC1EaAhZ74+8Fawi++0apaWIsdNWFrbcNEw0dF1wSY9IqAc+7H3zZg6FEpP++vXmPkxeJ1LRJQmwL3wmPbmnjfhMFCo0giMNbRxX8sPZioa8TUl29qgmpRVYRrjxzAhrMLx7eL48mmFvwuKFIDJlsjFeFdABlKHlYn7MRG4Tz3t5TvJaE7jPLJvM6r4zkJ3BaLsCsC1z/re1b1Pg1KDzuOYp3wg6f3Im9nwy8kWIYxcKcQUy2qcuyJX4fWoI/zeBlF5uXAL3i9ixPW1zM9vT5tXDR2vox417F/RBgicq+6AHWnZcI+ZfMZXHYdi2lwEySs7WaHrJjp/omALZGwtX7H3MiYz+DOu2ffLppwOZWwElN3hSwTpSuhiCUyPGXMleVqT0cv8yFTxLIUODtcToXsroSdcf7fp5nEcuFxCqSo1o2UmgA89vlx6p5jUT9SzQlKsJv7PKf4bCf28hjDvSq19fEP+86SsNi/bnkAAAAASUVORK5CYII=",
          name: "KTV"
        },
        {
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADPUlEQVRYR8WXT0gUcRTHv292DcRrUe2s9OeQ4KEgig6ZO9spOkQZRqfAQ5az/bnVMb1EeAjUHMsu4SVIDIoQAmtHk4iMKMgiD7WBs9kfKCgPpTMvftOO7I47Mz/FxYE57Oz7vff5/d73937vR1jCk3x87SATHQLRTgDrCq/w8M19mV8S8/3p/WeGZd1SlOGmsRsb59hpJeYTALZG2Rf+/8BEA1Wk9H9qPPU5bEwoQGK07xKBW8FISAYuNSPkGdSfT7V1BI0PBFBN4w6A5mUFXjxo0NL0Y+V8lQVQTeMjgM0rFNxzk7M0fYvf5yIA1TSEoNaucHDP3XdL04V4F54SgIRpjBGwLyC4ScQ9DuMAgU4uF5CBJ3lNb/TGLwC4gmNuD1Us8dHpVOZucrS3iZmGlg1B1O4J0wUQW22e7RcSan83X0Xal71tX5MjxnaOowuAVgB5A6JHUDACm1sANAUCEvJxiu0SW9QFkJm954zBN/NaplX8Tj69Wo0/VXvmEc/NpNtyns2Gsev1MceZDFshLqyCC6Cave8B2lZmwA9ScIQdqgf4PIA6BiaJuNNKZQb89rXjPQl7TmkiogsAasNTxFOWlqmjZLZHY4plA40ZQyD6ZTM6imcp7Nc/HKhZUz3b4DA3gNFQlA4peRDbaUqYvV0EOhdB+5Mo1g5n7rWwc5R4iphF7r38u8PFskYJuTgOg7tJNY3nAHZLIQNmmJ2l6WnV7HsF8A5JfxMCILLqEdE9dviKldafyThOZI3DROiO1gFyAuA3gJpQxYIv5rVMp0xwz0Y1jdsAjkeMmZUCsDR9oWCJLTbTePqt37H/e6S4/ztwASJTUAygmkaW2O6YTp8t0YP4zkSmV+EkAdwURIqwggATUtuwUgDuNpRZqkoBuIUoohS7SqkMQKEUyxxGlQAoOYyijmMfQLOl6YP+baiaRnNciY17XXBoav3HceQqMLdY6cytpRSihNnXT+CynZM3e+FPsiWjYZuR8Z+GQUCF2YtVWtRbBrZkRSU0qCn9y0SXRaERDYw/ONv8QHxTFGQAiI6o3BPelBZBhFRHngpoXqIyJNeWF0Gs3sXEg1jVq5kHsaqXU39SK3E9/weZm+lsD2Zf6gAAAABJRU5ErkJggg==",
          name: "周边游"
        },
        {
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADz0lEQVRYR8WXXYhVVRTHf/9zbmCfPmj2aV8kIUn00jDT4L1ZafmSNZpUVGAifYBCRUVkttUKIhJqoOal6KGiHAjsISGD5l6dGBIahgKdhzQqekizFBrD5pwVe8694517zzn3UMIc2C/n7PVf/7P2Wv+1tij42HN75nLOnLswWwVcA8wHzUvM7XfgKHAIaRcTf3+m15YfLwKtTptse3UxkTYiHsCY22n/1HdxHOMjQuvXi5UDeTa5BMxVX4ZgI9gFhRy3bdIJiPvlKpuz7DMJmKvtBO79b47brAblymvTsFIJmKsdBq46Q84bMD/Kla9uxWwjYK56BDT/DDuvw9lRucqFzdgzCJir1kBL853rFNgepP1JAdg8sJWga4uRtr1ylXJj7zSBJOH0QiaI8QPSDgg/JooWUeLOOoExiIZQuA6zp0CXdyZirzQSc4pAUmrBSE62D2LRWwSl27B4DWhJi5PDyJ7H9B3STsz+BGpAV32dP3O/ThDG3b5EEwKu9jbweAbzQcDVga/vcDxPyy3dYVuGVhKG3jko+II4+jrF7h258hMNAj8BCzPAhwmD9UTxAHBLx/BKazG7COhP9kbLUKmCmWux/YOJ4EqZG74RotFcYOnhKfltB0k3C9RNbF8C5+UQAMV9spf2bkL2Zg6BQ0STfYRnbQHr6xiBqbDLYXYx8BiB3UCsbcDdKbafyFz1XdAjGcC/YVqNbHuh8E/XlpJwG/fBZA+EvwDnpvgYlbnaPqA35eNJCNageDNGT6E/P13cmzC7zIcC6SBm72XY/+wJHElaa9vzLfAQcCvwbE6SpmHfAzwI0QCEzwAr0gloIo9A3SZaDKFP0jkFozBOEKwmjj+F6FEIv8q2SwhkHYG3Owl0A2MFnfsMXI/ihZgC4BJgQ46tP4K8JNRBSvEKJuV1osCj3Sj+ENMHgBct//cLcgxHC5Rh1INKdxTUgHVABWwB0j6MVzuw9mXYUYiG5MrLWoFs29BNxME3Le+frIe9C6Kt+efvTyvuKyLFGQnsa91OzfxL7SZiK6GNAPeDHQNuhmAD2KUtQIkUT+lFfjPKiuIxKC2Cf8ZmtmDrRYFXwuWY7UccAF2RImRNzahzO86Kgm88fm5snh0HkI1gej+n/Ga24yQKHQaSdLTXkf5q+2STb6DSCGYZ7btlIGkAFBvJmt3Z5yCvEV6kGutswC+v/be3884YyZpIzN5QeprELI7lTSRm72LSdByzdzWbJtG4nKJVKWKSUWn6FWzX/76ctsmvq3UhejFbAroO8Ms/42DjSN9jDMuVWyU6UxL+BbhwgYKciV3HAAAAAElFTkSuQmCC",
          name: "丽人"
        },
        {
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADO0lEQVRYR8WXS2jUQBjH//9Ek5rpQZBSUAQpImhBfFwF7cmDepIV9ST4KIK7WhA9Wq+KSLMoVsQHHhStF/XgzQriybd4EkSwgrWgiE3Y2Zp8Mtum3a5tErRl57Y73/y/X2a+xwyRY1TPq3WxjS0EN0OkQ4h2Au31SwUYpmAY5EeBPLEiDDo9wesseaYZVH1vvQhPgNidJTTjvOA2KWecUvhqtvWzAuiydwrGOeD9k/OpRSEoZ9xieHomnRkBKuXWfooc+k/H05YLebmlONrdqPkXgPaVzKXjRi23FEzzOe1H1VePBdgynwAEBp1S0JX4mASYOPPe+XQ+qU3pTWKiBlCLdvDpHARcXv6QkE0mO2oAuk/dSk01Si/AAgSd0zxQeglrREQuTPx/k8DyXMcouO0eDfZQ+61rAHmfhq6rVluLE28X4BqAFwA+AijEEbsW9YwOmsAl8c4pBmu1r24IWYl/R9dt23qWviXsZLXs7RfhlTTDWOSgUB7ZsD5j4vy0r4I44rYpALnkFMPDuqyGJMYBizIs4Ms0XVIOUPd5AyB3ppPKgFsKCxXfewpa700+a199iiPuSwDMERHRkMC65paC1ZU+zydZTNUVuUfdp96AWJtKCnxb+D1YVl3inYRgg1sKd2pfPY8jHk8AHB20Vl2vB4RtIrziex8IrkwHwFtWfPW1sbHMuIjcFf/GiGVLfxyx27blVBTxtAEw9aM+t3W5tQCRO1kpUWtgeSufAEMUuQLSZEIhERdghECbKTACrAJ4FZQOCPZmAZj53ACMsD5pr9pXd4zTRgdCXnSLo3dzpfbE4twAjussZvePn3m+ythUfHWewLEs+9wAtiU7FhwJH2YJJvMmSAFszLLPHYQCnG0pBeZ+kDmkH15VqyDLcDwIc6RhLVgaulia+FhZbY0Fj7IAIHibsxDVAH4tdIMl7MZYlnDuzmoKUZ5SnDhMan8mgK/uA9iRZTdeinM0o7qcP95SCs5lCWtffQGwNMsOYGe+djyl9MC25NLYmBXOKm7LCmu8a6aPpB0bq6ZfSGqVa/wa3pwrWbJXTb2U1lWw5l3LE4imPkwmd6KZT7OpmGji47Q+iefzef4HiS2qQGPb2kkAAAAASUVORK5CYII=",
          name: "小吃快餐"
        },
        {
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+2XP2gUURDGf3MXKzmwVNFCCBExGxVLFdyNwSqghUIKtbRSC7uAJEFIZaWdnQoptIiijZj7A4qdGO8iSjjBIkZLGyvdjCyX5Pb2z3t7m8AiuO3MN9+382bnfSsU/EjB/PyDAj683ImUxxA5ibIXkT2ofkdYRfUN6r/iyNlfWTubvQMf67tZ00ngErDLQPATeERJZjns/rAJySZgqXYZ5RYwaCsYircRbjPsPTRh7AJa9SnQ6T6II6kyjePOpOHNAprVC4g8zk++jlS9yMjok6Q66QK2i3yDNUVEsoDOwL3u88xtjWpTklPRwUwW0KrdBa7ZKuaI38PxrodxcQGfn1X4XfkGVHIQ2CArON5+s4Cl6gQqc7ZKueMDawc5dGZ5Ax/vQKt6B+RmiKAJ/g0oTwGnI8SmWAP8mThOxnHcF+kCmtU5RCbWE97ieCc2SVu198DRDLFFHO9YIk65yoh339CBWr37pr6LM9boFgovJVMssnx6lllvLH4EvR1o4Hhu6E1C4sgXs3cgNgOLIE9Bx4HjkRkwxd6BPI/jrDOwcA4pzeeecitQB3FGv6TPQHDfl3asWK5cK01igvCVYe+AeQ8E0UI3YSCg8LsgENExIQ/y9ToBJVxJMidmP7BlM7I5aqmmxO6ItuoLDGYkkGcXEGR1RMz26Q/aqE6mOaH0zzDt0Luu+DywzzAbwSc8v72uOMr2aWGIP+UhVEP/BbLKgL8cvmqzDHC2I8hSKWfOfwGFd+Av8LDTISwntyAAAAAASUVORK5CYII=",
          name: "全部分类"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  background-color: #f0efed;
}
</style>
