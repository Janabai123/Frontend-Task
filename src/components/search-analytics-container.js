import { useMemo } from "react";
import "./search-analytics-container.css";
const SearchAnalyticsContainer = ({
  analyticsText,
  analyticsData,
  group1549Left,
  propLeft,
  propRight,
  propLeft1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: group1549Left,
    };
  }, [group1549Left]);

  const searchAnalyticsStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const groupIconStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft1,
    };
  }, [propRight, propLeft1]);

  return (
    <div className="frame-parent5" style={frameDivStyle}>
      <div className="search-analytics-parent">
        <div className="search-analytics" style={searchAnalyticsStyle}>
          {analyticsText}
        </div>
        <div className="lorem-ipsum-dolor-container7">
          <p className="lorem-ipsum-dolor7">{`Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. `}</p>
        </div>
      </div>
      <img
        className="frame-child12"
        alt=""
        src={analyticsData}
        style={groupIconStyle}
      />
    </div>
  );
};

export default SearchAnalyticsContainer;
