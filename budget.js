(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    15: function(e, t, a) {},
    17: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a(0)
          , c = a.n(n)
          , r = a(4)
          , l = a.n(r)
          , s = a(1)
          , m = a(2)
          , i = (a(15),
        a(5));
        var o = function() {
            var e = Object(n.useState)(2e3)
              , t = Object(m.a)(e, 1)[0]
              , a = Object(n.useState)([])
              , r = Object(m.a)(a, 2)
              , l = r[0]
              , o = r[1];
            Object(n.useEffect)(function() {
                var e = JSON.parse(localStorage.getItem("data"));
                null !== e && o(Object(s.a)(e))
            }, []);
            var u = Object(n.useRef)()
              , d = Object(n.useRef)();
            function f() {
                return l.reduce(function(e, t) {
                    return e += t.rupee
                }, 0)
            }
            return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
                className: "container mb-3"
            }, c.a.createElement("h1", null, "My Budget Planner")), c.a.createElement("div", {
                className: "container-fluid"
            }, c.a.createElement("div", {
                className: "row"
            }, c.a.createElement("div", {
                className: "col d-flex align-items-center justify-content-center"
            }, c.a.createElement("h4", {
                className: "alert alert-secondary"
            }, "Budget: Rs.", t)), c.a.createElement("div", {
                className: "col d-flex align-items-center justify-content-center"
            }, c.a.createElement("h4", {
                className: "alert alert-secondary text-success"
            }, "Remaining: Rs.", t - f())), c.a.createElement("div", {
                className: "col d-flex align-items-center justify-content-center"
            }, c.a.createElement("h4", {
                className: "alert alert-info"
            }, "Spant so far:", f())))), c.a.createElement("div", {
                className: "container mb-3"
            }, c.a.createElement("h3", null, "Expenses")), c.a.createElement("div", {
                className: "container"
            }, 0 === l.length ? c.a.createElement("h3", {
                className: "text-success"
            }, "Add Data To List . . . . .") : l.map(function(e) {
                return c.a.createElement("div", {
                    className: "alert alert-secondary d-flex justify-content-between",
                    role: "alert",
                    key: e.name
                }, e.name, c.a.createElement("span", null, "Rs.", e.rupee, c.a.createElement(i.a, {
                    onClick: function() {
                        return function(e) {
                            var t = l.filter(function(t) {
                                return t.name !== e
                            });
                            localStorage.setItem("data", JSON.stringify(Object(s.a)(t))),
                            o(Object(s.a)(t))
                        }(e.name)
                    }
                })))
            })), c.a.createElement("div", {
                className: "container mb-3"
            }, c.a.createElement("h2", null, "Add Expenses")), c.a.createElement("form", {
                className: "container",
                onSubmit: function(e) {
                    return function(e) {
                        e.preventDefault();
                        var t = u.current.value
                          , a = Number.parseInt(d.current.value);
                        o([].concat(Object(s.a)(l), [{
                            name: t,
                            rupee: a
                        }]));
                        var n = JSON.parse(localStorage.getItem("data"));
                        null === n ? localStorage.setItem("data", JSON.stringify([{
                            name: t,
                            rupee: a
                        }])) : localStorage.setItem("data", JSON.stringify([].concat(Object(s.a)(n), [{
                            name: t,
                            rupee: a
                        }]))),
                        u.current.value = "",
                        d.current.value = ""
                    }(e)
                }
            }, c.a.createElement("div", {
                className: "container d-flex justify-content-between"
            }, c.a.createElement("div", {
                className: "mb-3",
                style: {
                    width: "48%"
                }
            }, c.a.createElement("label", {
                className: "form-label"
            }, "Name"), c.a.createElement("input", {
                type: "text",
                className: "form-control",
                id: "exampleInputEmail1",
                "aria-describedby": "emailHelp",
                ref: u
            })), c.a.createElement("div", {
                className: "mb-3 ",
                style: {
                    width: "48%"
                }
            }, c.a.createElement("label", {
                className: "form-label"
            }, "Cost"), c.a.createElement("input", {
                type: "Number",
                className: "form-control",
                id: "exampleInputEmail1",
                "aria-describedby": "emailHelp",
                ref: d
            }))), c.a.createElement("button", {
                type: "submit",
                className: "btn btn-primary"
            }, "Save")))
        }
          , u = function(e) {
            e && e instanceof Function && a.e(1).then(a.bind(null, 18)).then(function(t) {
                var a = t.getCLS
                  , n = t.getFID
                  , c = t.getFCP
                  , r = t.getLCP
                  , l = t.getTTFB;
                a(e),
                n(e),
                c(e),
                r(e),
                l(e)
            })
        };
        l.a.createRoot(document.getElementById("root")).render(c.a.createElement(o, null)),
        u()
    },
    6: function(e, t, a) {
        e.exports = a(17)
    }
}, [[6, 3, 2]]]);
//# sourceMappingURL=main.20e6a12c.chunk.js.map
