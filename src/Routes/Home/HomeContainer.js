import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: nulll,
    upcoming: nulll,
    popular: nulll,
    error: null,
    loading: true,
  };

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowwPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
