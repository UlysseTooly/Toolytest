// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4wuR6djweT7vAchr7evKHM
// Component: 4Tj1PFl3Qc
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Container from "../../Container"; // plasmic-import: _Yie3ivvsh/component
import Navbar from "../../Navbar"; // plasmic-import: tjz-vApnh_/component
import Btn from "../../Btn"; // plasmic-import: gIUt2Bx9WL/component
import { useScreenVariants as useScreenVariantsniCroJ2MX1 } from "../blank_project/PlasmicGlobalVariant__Screen"; // plasmic-import: Ni-CroJ2mX1/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: 4wuR6djweT7vAchr7evKHM/projectcss
import sty from "./PlasmicRecommandationLogiciel.module.css"; // plasmic-import: 4Tj1PFl3Qc/css

export const PlasmicRecommandationLogiciel__VariantProps = new Array();

export const PlasmicRecommandationLogiciel__ArgProps = new Array();

function PlasmicRecommandationLogiciel__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsniCroJ2MX1()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root2"}
          data-plasmic-override={overrides.root2}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_tokens,
            sty.root2
          )}
        >
          <Container
            bg={"_1"}
            className={classNames("__wab_instance", sty.container__cSKvl)}
          >
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"section1"}
              data-plasmic-override={overrides.section1}
              hasGap={true}
              className={classNames(projectcss.all, sty.section1)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"column1"}
                data-plasmic-override={overrides.column1}
                hasGap={true}
                className={classNames(projectcss.all, sty.column1)}
              >
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Une expertise numérique dédiée aux entreprises de services"
                    : "Recommandation de logiciels"}
                </h1>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__t2Fvc
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\nQuisque malesuada hendrerit elit, ut placerat neque tempus non. Phasellus bibendum tortor est."
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada hendrerit elit, ut placerat neque tempus non. Phasellus bibendum tortor est.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada hendrerit elit, ut placerat neque tempus non. Phasellus bibendum tortor est."}
                </div>

                <Btn
                  data-plasmic-name={"btn"}
                  data-plasmic-override={overrides.btn}
                  className={classNames("__wab_instance", sty.btn)}
                  type={"primary"}
                >
                  {"Réserver votre recommandation gratuire"}
                </Btn>
              </p.Stack>

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  data-plasmic-name={"column2"}
                  data-plasmic-override={overrides.column2}
                  className={classNames(projectcss.all, sty.column2)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__o8Kwd)}
                  />
                </div>
              ) : null}
            </p.Stack>
          </Container>

          <Container
            className={classNames("__wab_instance", sty.container__il3Ep)}
          >
            <div
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              className={classNames(projectcss.all, sty.section)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__ecviD)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rlrqe
                  )}
                >
                  {
                    "Pourquoi Tooly est devenu la référence en matière de recommandation de logiciels ?"
                  }
                </div>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__furJ8)}
              >
                <div className={classNames(projectcss.all, sty.columns__niH6)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column__tSvk5)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__wzD9J)}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__zsZtj)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"75%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"auto"}
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/tooly_services/images/image7.png",
                          fullWidth: 439,
                          fullHeight: 445,
                          aspectRatio: undefined
                        }}
                      />
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sNnuQ
                      )}
                    >
                      {"Il existe plus de 15000 logiciels SAS"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___4W56D
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada hendrerit elit"
                      }
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column__umlS3)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__csNpn)}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__yMhC1)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"auto"}
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/tooly_services/images/saly24Png.png",
                          fullWidth: 283,
                          fullHeight: 282,
                          aspectRatio: undefined
                        }}
                      />
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nkujC
                      )}
                    >
                      {"Trouver les bons logiciel, c'est long"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__b87O7
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada hendrerit elit"
                      }
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column__vpLvE)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__unAo)}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img___3Qklq)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"auto"}
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/tooly_services/images/saly43Png.png",
                          fullWidth: 681,
                          fullHeight: 720,
                          aspectRatio: undefined
                        }}
                      />
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tSzPj
                      )}
                    >
                      {"50% des logiciels sont remplacés chaque année"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__u3JuW
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada hendrerit elit"
                      }
                    </div>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.columns__vvJzG)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column___07Xk4)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__e5XnI)}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__m8P3K)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"75%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"auto"}
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/tooly_services/images/image7.png",
                          fullWidth: 439,
                          fullHeight: 445,
                          aspectRatio: undefined
                        }}
                      />
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__scrQl
                      )}
                    >
                      {"Lorsque l'on a besoin d'un logiciel, c'est urgent"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uHrNs
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada hendrerit elit"
                      }
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column___4Bdf0)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__y5AYy)}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img___9TfF)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"auto"}
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/tooly_services/images/saly24Png.png",
                          fullWidth: 283,
                          fullHeight: 282,
                          aspectRatio: undefined
                        }}
                      />
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___9JQfb
                      )}
                    >
                      {"Un logiciel ça coûte cher"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qJvyi
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada hendrerit elit"
                      }
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column__ej4F1)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___3Gcdc
                      )}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__eh2Ri)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"auto"}
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/tooly_services/images/saly43Png.png",
                          fullWidth: 681,
                          fullHeight: 720,
                          aspectRatio: undefined
                        }}
                      />
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yDekj
                      )}
                    >
                      {"Manque de transparence dans l'industrie"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__clOp
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada hendrerit elit"
                      }
                    </div>
                  </p.Stack>
                </div>
              </p.Stack>
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root2: [
    "root2",
    "navbar",
    "section1",
    "column1",
    "h1",
    "btn",
    "column2",
    "section"
  ],

  navbar: ["navbar"],
  section1: ["section1", "column1", "h1", "btn", "column2"],
  column1: ["column1", "h1", "btn"],
  h1: ["h1"],
  btn: ["btn"],
  column2: ["column2"],
  section: ["section"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRecommandationLogiciel__ArgProps,
      internalVariantPropNames: PlasmicRecommandationLogiciel__VariantProps
    });

    return PlasmicRecommandationLogiciel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root2") {
    func.displayName = "PlasmicRecommandationLogiciel";
  } else {
    func.displayName = `PlasmicRecommandationLogiciel.${nodeName}`;
  }
  return func;
}

export const PlasmicRecommandationLogiciel = Object.assign(
  // Top-level PlasmicRecommandationLogiciel renders the root element
  makeNodeComponent("root2"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    section1: makeNodeComponent("section1"),
    column1: makeNodeComponent("column1"),
    h1: makeNodeComponent("h1"),
    btn: makeNodeComponent("btn"),
    column2: makeNodeComponent("column2"),
    section: makeNodeComponent("section"),
    // Metadata about props expected for PlasmicRecommandationLogiciel
    internalVariantProps: PlasmicRecommandationLogiciel__VariantProps,
    internalArgProps: PlasmicRecommandationLogiciel__ArgProps
  }
);

export default PlasmicRecommandationLogiciel;
/* prettier-ignore-end */
