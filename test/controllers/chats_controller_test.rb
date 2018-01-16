require 'test_helper'

class ChatsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get send_msg" do
    get :send_msg
    assert_response :success
  end

end
